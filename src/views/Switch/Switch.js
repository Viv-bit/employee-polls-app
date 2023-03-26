import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import styles from "../../assets/css/styles.module.css";
import Question from "../../components/Question";
import Result from "../../components/Result";
import Layout from "../../components/Layout";
import NotFound from "../NotFound";

const Switch = () => {
  const authenticatedUser = useSelector(
    ({ authenticatedUser }) => authenticatedUser
  );
  const questions = useSelector(({ questions }) => questions);
  const users = useSelector(({ users }) => users);

  let params = useParams();

  const { question_id } = params;
  const question = questions[question_id];
  const author = users[question?.author];
  const authUserAnswers = users[authenticatedUser].answers;
  const answeredPoll = authUserAnswers.hasOwnProperty(question_id)
    ? true
    : false;

  if (question === undefined) {
    return <NotFound />;
  } else {
    return (
      <>
        <Layout>
          <Card className="mt-3">
            <Card.Header>
              <Card.Title className="mb-0">
                {answeredPoll ? (
                  <Fragment>
                    <span></span>Asked by <span>{author?.name}</span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <span></span>
                    {author?.name} <span>asks:</span>
                  </Fragment>
                )}
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
                      author?.avatarURL
                        ? author.avatarURL
                        : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                    }
                    name={author?.name}
                    className={styles.avatar}
                  />
                </Col>
                <Col sm={8}>
                  {answeredPoll ? (
                    <Result id={question_id} question={question} />
                  ) : (
                    <Question id={question_id} question={question} />
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Layout>
      </>
    );
  }
};

export default Switch;
