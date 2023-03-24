import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, ProgressBar, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatDate } from "../utils/functions";
import { voteColor } from "../utils/functions";
import VoteLabel from "./VoteLabel";

const Result = ({ question, id }) => {
  const { optionOne, optionTwo, timestamp } = question;

  const users = useSelector(({ users }) => users);
  const authUser = useSelector(({ authUser }) => authUser);
  const user = users[authUser];
  let navigate = useNavigate();

  const optionOneVotes = optionOne.votes.length;
  const optionTwoVotes = optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const userVote = user.answers[id];

  const optionOnePercentage = Math.round((optionOneVotes / totalVotes) * 100);
  const optionTwoPercentage = Math.round((optionTwoVotes / totalVotes) * 100);

  let option1 = voteColor.secondary,
    option2 = voteColor.secondary;
  if (optionOneVotes > optionTwoVotes) {
    option1 = voteColor.primary;
  } else if (optionOneVotes < optionTwoVotes) {
    option2 = voteColor.primary;
  }

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <>
      <Row>
        <Col xs={12}>
          <small className="text-muted" style={{ float: "right" }}>
            {formatDate(timestamp)}
          </small>
          <Card.Title style={{ fontWeight: 600, fontSize: "25px" }}>
            Results:
          </Card.Title>
          <Card
            style={{
              color: `${option1.color}`,
              backgroundColor: `${option1.bgColor}`,
            }}
          >
            <Card.Header>
              {userVote === "optionOne" ? <VoteLabel /> : null}
              <Card.Title>
                <span>Would you rather </span>
                <span>{optionOne.text}</span>
              </Card.Title>
              <div className="pt-3 pb-2">
                <ProgressBar
                  now={optionOnePercentage}
                  label={`${optionOnePercentage}%`}
                  variant="success"
                />
              </div>
              <Card.Title
                style={{ fontSize: "14px", color: "#000" }}
                className="text-center"
              >
                <span>{optionOneVotes}</span> out of <span>{totalVotes}</span>{" "}
                votes
              </Card.Title>
            </Card.Header>
          </Card>
          <Card
            className="mt-3"
            style={{
              color: `${option2.color}`,
              backgroundColor: `${option2.bgColor}`,
            }}
          >
            <Card.Header>
              {userVote === "optionTwo" ? <VoteLabel /> : null}
              <Card.Title>
                <span>Would you rather </span>
                <span>{optionTwo.text}</span>
              </Card.Title>
              <div className="pt-3 pb-2">
                <ProgressBar
                  now={optionTwoPercentage}
                  label={`${optionTwoPercentage}%`}
                  variant="success"
                />
              </div>
              <Card.Title
                style={{ fontSize: "14px", color: "#000" }}
                className="text-center"
              >
                <span>{optionTwoVotes}</span> out of <span>{totalVotes}</span>{" "}
                votes
              </Card.Title>
            </Card.Header>
          </Card>
          <Button
            className="mt-2"
            style={{ float: "right", borderColor: "#06a158" }}
            onClick={handleClick}
          >
            Back Home
          </Button>
        </Col>
      </Row>
    </>
  );
};

Result.propTypes = {
  question: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default Result;
