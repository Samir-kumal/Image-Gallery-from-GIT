import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);
const token = localStorage.getItem("token");

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (token) {
      getUserData();
    }
  }, []);

  const getUserData = (Usertoken) => {
    axios
      .post("http://localhost:5000/userdata", {
        token: Usertoken || token,
      })
      .then((response) => {
        if (response.data) {
          console.log(response.data, "userData");
          setUserData(response.data.data);
        } else {
          console.log("No user data received");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  useEffect(()=>{
    console.log(userData)
  },[userData])

  

  
  return (
    <AuthContext.Provider value={{userData,getUserData}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
