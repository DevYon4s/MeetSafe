import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import * as jose from "jose";

const Callback = () => {
  const location = useLocation();

  useEffect(() => {
    const fetchToken = async (code) => {
      try {
        const response = await axios.post("http://localhost:5000/api/token", {
          code: code,
        });

        const { access_token } = response.data;

        const userInfoResponse = await axios.post(
          "http://localhost:5000/api/userinfo/",
          {
            access_token: access_token,
          }
        );

        const decodedUserInfo = await decodeUserInfoResponse(
          userInfoResponse.data
        );

        // Send user info to the server to be stored
        await axios.post("http://localhost:5000/api/user/store", decodedUserInfo);

        // Store user info in sessionStorage for Welcome component
        sessionStorage.setItem('userName', decodedUserInfo.name);
        sessionStorage.setItem('userPicture', decodedUserInfo.picture);

        // Redirect to the Welcome component
        window.location.href = '/welcome';
      } catch (error) {
        console.error("Error fetching token or user info:", error);
      }
    };

    const query = new URLSearchParams(location.search);
    const code = query.get("code");

    if (code) {
      fetchToken(code);
    }
  }, [location.search]);

  return (
    <div
      style={{
        backgroundColor: "#1a1a2e",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p>Loading...</p>
    </div>
  );
};

const decodeUserInfoResponse = async (userinfoJwtToken) => {
  try {
    return jose.decodeJwt(userinfoJwtToken);
  } catch (error) {
    console.error("Error decoding JWT user info:", error);
    return null;
  }
};

export default Callback;