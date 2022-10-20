import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Title from "../components/Title";
import { useNavigate, Link } from "react-router-dom";
import Loader from "../components/Spinner";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [password, setPassword] = useState("");
  const [re_password, setRePassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
      toast.success(
        "An activation email has been sent to your email address. Please check your email"
      );
    }
  }, [isError, isSuccess, user, message, navigate, dispatch]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password != re_password) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        email,
        username,
        password,
        re_password,
        first_name: firstName,
        last_name: lastName,
      };
      console.log(userData);
      dispatch(register(userData));
    }
  };

  return (
    <>
      <Title title="Register" />
      <Container>
        <Row>
          <Col className="mg-top text-center">
            <section>
              <h1>
                <FaUser /> Register
              </h1>
              <hr className="hr-text" />
            </section>
          </Col>
        </Row>
        {isLoading && <Loader />}
        <Row className="mt-3">
          <Col className="justify-content-center">
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="name"
                  value={username}
                  placeholder="Enter username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="name"
                  value={firstName}
                  placeholder="Enter first name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="name"
                  value={lastName}
                  placeholder="Enter last name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Please enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  placeholder="Please enter a password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={re_password}
                  placeholder="Please confirm your password"
                  onChange={(e) => setRePassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" className="mt-3" type="submit">
                Sign up
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            Have an account already? <Link to="/login">Login...</Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
