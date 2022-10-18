import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Spinner";
import { getProperties, reset } from "../features/properties/propertySlice";
import Property from "../components/Property";
import { toast } from "react-toastify";
import Title from "../components/Title";

const Properties = () => {
  const { properties, isLoading, isError, message } = useSelector(
    (state) => state.properties
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProperties());
    if (isError) {
      toast.error(message);
    }
  }, [dispatch]);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Title title="Our properties catalog" />
      <Container>
        <Row>
          <Col className="mg-top text-center">
            <h1>Our Catalog of properties</h1>
            <hr className="hr-text" />
          </Col>
        </Row>
        {
          <>
            <Row className="mt-3">
              {properties.map((property) => (
                <Col key={property.id} sm={12} xs={12} md={6} lg={4} xl={3}>
                  <Property property={property} />
                </Col>
              ))}
            </Row>
          </>
        }
      </Container>
    </>
  );
};

export default Properties;
