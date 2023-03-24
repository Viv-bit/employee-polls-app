import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, Button, Row, Col } from "react-bootstrap";
import styles from "../assets/css/styles.module.css";
import Avatar from "../components/Avatar";

const PollView = ({ question, unanswered, author }) => {
  const { optionOne, id } = question;

  const [pollView, setPollView] = useState(false);

  const handleViewPoll = (e) => {
    e.preventDefault();
    setPollView(true);
  };

  const buttonText = unanswered ? "View Poll" : "Results";

  if (pollView === true) {
    return <Navigate to={`/questions/${id}`} />;
  }

  return (
    <Fragment>
      <Card className="mt-3">
        <Card.Header>
          <Card.Title className="mb-0">
            <span></span>
            {author.name} <span>asks:</span>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col
              sm={4}
              className="text-center d-flex justify-content-center align-items-center"
            >
              <Avatar
                avatarURL={
                  author.avatarURL
                    ? author.avatarURL
                    : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                }
                name={author?.name}
                className={styles.avatar}
              />
            </Col>
            <Col sm={8}>
              <Card.Title className="mb-auto" style={{ fontWeight: 600 }}>
                Would you Rather
              </Card.Title>
              <Card.Body className="text-center card-body px-0 pb-0">
                <Card.Text>...{optionOne.text.slice(0, 25)}...?</Card.Text>
                <Button
                  onClick={handleViewPoll}
                  className="align-self-end w-100"
                  style={{
                    borderColor: unanswered ? "#10b467" : "#06a158",
                    color: unanswered ? "#06a158" : "#ffffff",
                    backgroundColor: unanswered ? "#ffffff" : "#10b467",
                  }}
                >
                  {buttonText}
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

PollView.propTypes = {
  question: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  unanswered: PropTypes.bool.isRequired,
};

export default PollView;
