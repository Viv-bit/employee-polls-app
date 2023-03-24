import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Col, Row } from "react-bootstrap";
import Avatar from "./Avatar";
import styles from "../assets/css/styles.module.css";

const ScoreCard = ({ user }) => {
  const { avatarURL, name, answerCounter, questionCounter, totalCount } = user;

  return (
    <Fragment>
      <Row>
        <Col
          xs={12}
          sm={3}
          className="d-flex justify-content-center align-items-center px-0"
        >
          <Avatar
            avatarURL={
              avatarURL
                ? avatarURL
                : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            name={name}
            className={styles.scoreCardDetails}
          />
        </Col>
        <Col xs={8} sm={6} className="px-0">
          <Card.Body className="px-0">
            <div
              style={{
                borderRight: "1px solid #ccc",
                borderLeft: "1px solid #ccc",
              }}
              className="px-2"
            >
              <Card.Title
                className="pb-2"
                style={{
                  fontWeight: 600,
                  fontSize: "24px",
                }}
              >
                {name}
              </Card.Title>
              <Card.Text
                className="d-flex align-items-center justify-content-between pb-1"
                style={{ fontWeight: 600 }}
              >
                <span>Answered questions</span>
                <span className="px-2">{answerCounter}</span>
              </Card.Text>
              <hr />
              <Card.Text
                className="d-flex align-items-center justify-content-between pb-1"
                style={{ fontWeight: 600 }}
              >
                <span>Created questions</span>
                <span className="px-2">{questionCounter}</span>
              </Card.Text>
            </div>
          </Card.Body>
        </Col>
        <Col xs={4} sm={3} className="p-3">
          <Card className="text-center" style={{ marginRight: "8px" }}>
            <Card.Header>
              <Card.Title
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                  height: "22px",
                }}
              >
                Score
              </Card.Title>
            </Card.Header>
            <div className="d-flex justify-content-center align-items-center p-3">
              <div className={styles.roundedCircle}>
                <span>{totalCount}</span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

ScoreCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ScoreCard;
