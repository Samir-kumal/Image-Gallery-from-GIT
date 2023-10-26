const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const flatted = require("flatted");

app.use(express.json());
app.use(cors());
require("dotenv").config();
require("./userDetails");

const mongoUrl = `mongodb+srv://SamirKumal:${process.env.passcode}@cluster0.mlooocq.mongodb.net/`;
const JWT_SECRET = process.env.secretcode;

app.listen(5000, () => {
  console.log("Server Started");
});
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to the database"))
  .catch((e) => console.log(e));

app.post("/post", async (req, res) => {
  console.log(req.body);
  const { data } = req.body;
  try {
    if (data === "samir") {
      res.send({ status: "ok" });
    } else {
      res.send({ status: "user not found" });
    }
  } catch (error) {
    console.log({ status: "Something went wrong" });
  }
});

// now we will access the model that we made in the userDetails

const User = mongoose.model("UserInfo");

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ error: "User with that email already exists" });
    }
    await User.create({
      fname: firstName,
      lname: lastName,
      email,
      pass: encryptedPassword,
    });
    res.send({
      status: "ok",
    });
  } catch (e) {
    res.send({
      status: "error",
    });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.send({
        error: "User not found",
      });
    }
    if (await bcrypt.compare(password, user.pass)) {
      const token = jwt.sign({email:user.email}, JWT_SECRET);

      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    return res.json({ error: "Invalid credentials" });
  } catch (err) {
    console.log(err);
  }
});

app.post("/userdata", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
      if (err) {
        return "token expired";
      }
      return res;
    });
    console.log(user);
    if (user == "token expired") {
      return res.send({ status: "error", data: "token expired" });
    }

    const userEmail = user.email;
    User.findOne({ email: userEmail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {
    res.json({ status: "error", data: "Invalid token" });
    console.log(error)
  }
});
