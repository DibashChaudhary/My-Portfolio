import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import di from "../images/di.webp";
import { Layout } from "./Layout";

export const AboutMe = () => {
  return (
    <Layout>
    <Container id="about-me" className="mt-3">
    <div className="title text-center mt-5 mb-5">
        <span>About Me</span>
      </div>
      <Row>
        <Col md="5" className=" mb-5">
          <img src={di} alt="my" width="100%" />
        </Col>
        <Col md="7" classNameName="text-primary">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            sapiente? Id quibusdam illo ipsam dignissimos, distinctio suscipit
            veniam? Facere beatae nisi cupiditate eos harum praesentium
            doloribus iure natus illo quam.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            pariatur quas animi excepturi reprehenderit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            pariatur quas animi excepturi reprehenderit.
          </p>
        </Col>
      </Row>
    </Container></Layout>
  );
};
