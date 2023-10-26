import React, { createContext, useContext, useMemo, useState } from "react";
import axios from "axios";
const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  //   const [userToken, setUserToken] = useState(null);
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("Token not found in the localstorage");
    return;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const getUserData = () => {
    fetch("http://localhost:5000/userdata", {
      method: "POST",
    //   crossDomain: true,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
      });
  };

  //   const values = useMemo(()=>{
  //     userToken,
  //     setUserToken,
  //     handleUserToken
  //   }, userToken)

  return (
    <AuthContext.Provider value={{ getUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
