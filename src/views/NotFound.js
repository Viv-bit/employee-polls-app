import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Fragment>
      <Layout>
        <Card.Header
          className="text-center d-flex align-items-center justify-content-center flex-column"
          style={{ height: "350px" }}
        >
          <Card.Title style={{ fontSize: "50px", fontWeight: 600 }}>
            404
          </Card.Title>
          <Card.Subtitle className="pt-3">
            There's no POLL Question here, Go back Home.
          </Card.Subtitle>
          <Link to="/home">
            <Button className="mt-3" style={{ borderColor: "#06a158" }}>
              Home
            </Button>
          </Link>
        </Card.Header>
      </Layout>
    </Fragment>
  );
};

export default NotFound;
