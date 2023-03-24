import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import LoginImage from "../assets/images/group.png";
import { setAuthUser } from "../redux/actions/authUser";

const styles = {
  cardContainer: {
    backgroundImage: "linear-gradient(-90deg, #efffff 0%, white 100%)",
    boxShadow: "0px 1px 29px 0px rgb(1 1 1 / 10%)",
  },
};

const Login = () => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  let navigate = useNavigate();
  const users = useSelector(({ users }) => users);

  const [userSelected, setUserSelected] = useState({ name: "Select User" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSelect = (e) => {
    setUserSelected({ id: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userID = userSelected.id;

    if (userID !== "") {
      localStorage.setItem("user", JSON.stringify(users[userID]));
      dispatch(setAuthUser(userID));
      navigate(state?.path || "/home");
    } else {
      alert(setErrorMessage("Please Select a User"));
    }
  };

  return (
    <Fragment>
      <Container>
        <Row className="align-items-center justify-content-center min-vh-100">
          <Col xs={12} md={6}>
            <Card style={styles.cardContainer}>
              <Card.Header className="text-center h-auto">
                <Card.Title>Welcome to Would You Rather App!</Card.Title>
                <Card.Subtitle>Please sign in to continue</Card.Subtitle>
              </Card.Header>
              <Card.Body className="px-2">
                <Card.Img src={LoginImage} alt="would-you-rather" />
                <Card.Text
                  className="py-2 text-center"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: " #10b467",
                    marginBottom: "0",
                  }}
                >
                  Sign In
                </Card.Text>
                <Form
                  onSubmit={handleSubmit}
                  className="px-2 d-flex align-items-center flex-column "
                >
                  {errorMessage ? (
                    <div className="text-danger">
                      <small>{errorMessage}</small>
                    </div>
                  ) : null}
                  <Form.Select aria-label="select user" onChange={handleSelect}>
                    <option value="">{userSelected.name}</option>
                    {users
                      ? Object.values(users).map((user) => {
                          return (
                            <option
                              key={user.id}
                              onClick={() => setUserSelected(user.id)}
                              value={user.id}
                            >
                              {user.name}
                            </option>
                          );
                        })
                      : null}
                  </Form.Select>
                  <Button
                    onClick={handleSubmit}
                    disabled={!userSelected.id}
                    className="my-2 w-100"
                    style={{
                      fontSize: "1.12rem",
                      textTransform: "none",
                      fontWeight: 600,
                      border: "none",
                    }}
                  >
                    Sign In
                  </Button>
                  <div
                    className="text-muted mt-2"
                    style={{ float: "right" }}
                  ></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
