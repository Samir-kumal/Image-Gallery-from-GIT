import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);
const token = localStorage.getItem("token");
const googleToken = localStorage.getItem("googleToken");

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [tokenExpired, setTokenExpired] = useState(false);

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
          if (response.data.status === "error") {
            setUserData(null);
            console.log(response.data.data);
          } else {
            setUserData(response.data.data);
          }
        } else {
          console.log("No user data received");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  useEffect(() => {
    if (googleToken) {
      const decrptedValues = jwtDecode(googleToken);
      setUserData(decrptedValues);
      console.log(decrptedValues)
    }
  }, []);

  const handleGoogleSigninToken = (token) => {
    localStorage.setItem("googleToken", token);
    const decrptedValues = jwtDecode(token);
    setUserData(decrptedValues);
  };

  return (
    <AuthContext.Provider
      value={{ userData, setUserData, getUserData, handleGoogleSigninToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
