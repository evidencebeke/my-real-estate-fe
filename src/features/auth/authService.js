import axios from "axios";

const REGISTER_URL = "http://localhost:8000/api/v1/users/";
const LOGIN_URL = "http://localhost:8000/api/v1/auth/jwt/create";
const ACTIVATE_URL = "http://localhost:8000/api/v1/auth/users/acttivation";

const register = async (userData) => {
  config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(REGISTER_URL, userData, config);
  return response.data;
};
const login = async (userData) => {
  config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post(LOGIN_URL, userData, config);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  }
};

const logout = () => {
  localStorage.removeItem("user");
};
