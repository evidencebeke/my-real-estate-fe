import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Spinner";
import Title from "../components/Title";
import { activate, reset } from "../features/auth/authSlice";

const ActivateAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  let { uid, token } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/");
      dispatch(reset());
    }
  }, [isError, isSuccess, message, navigate, dispatch]);

  const handleClick = async () => {
    const userData = { uid, token };
    dispatch(activate(userData));
    toast.success("Your account has been activated. You can now login");
  };

  return (
    <>
      {isLoading && <Loader />}
      <Container>
        <div className="mg-top d-flex justify-content-center align-items-center">
          <Button variant="outline-success" onClick={handleClick}>
            Activate now
          </Button>
        </div>
      </Container>
    </>
  );
};

export default ActivateAccount;
