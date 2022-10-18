import React from "react";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const ActivateAccount = () => {
  const navigate = useNavigate();
  let { uid, token } = useParams();
  console.log({ uid, token });

  const handleClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/users/activation/",
        { uid, token }
      );
      console.log("Confirmed");
      navigate("/account_activated");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mg-top d-flex justify-content-center align-items-center">
      <Button onClick={handleClick}>Activate now</Button>
    </div>
  );
};

export default ActivateAccount;
