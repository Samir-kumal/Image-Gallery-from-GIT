const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    phnno: String,
    email: {type:String, unique: true},
    pass: String,
  },
  {
    collection: "UserInfo",
  }
);
mongoose.model("UserInfo", userSchema);
