import axios from "axios";

export default function getUser(token) {
  console.log("tokem form get user", token);
  return new Promise((resolve, reject) => {
    if (!token) reject("Token not provided");

    axios
      .post("http://localhost:5000/userdata", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
