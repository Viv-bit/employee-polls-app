import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Card, Tab, Tabs } from "react-bootstrap";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import PollView from "../components/PollView";

const Dashboard = () => {
  const questions = useSelector(({ questions }) => questions);
  const users = useSelector(({ users }) => users);
  const authUser = useSelector(({ authUser }) => authUser);

  const answersID = Object.keys(users[authUser].answers);
  const unansweredPoll = Object.values(questions)
    .filter((question) => !answersID.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  const answeredPoll = Object.values(questions)
    .filter((question) => answersID.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return (
    <Fragment>
      <Layout>
        <Tabs className="justify-content-between flex-nowrap">
          <Tab.Pane eventKey="unanswered" title="Unanswered Questions">
            {unansweredPoll.length === 0 ? (
              <Card className="text-center mt-3">
                <Card.Header>
                  <Card.Title>
                    No Unanswered Polls, <span>{users[authUser].name}</span> Try
                    adding one <Link to="add"></Link>
                  </Card.Title>
                </Card.Header>
              </Card>
            ) : (
              unansweredPoll.map((question) => {
                return (
                  <PollView
                    key={question.id}
                    question_id={question.id}
                    question={question}
                    author={users[question.author]}
                    unanswered={true}
                  />
                );
              })
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="profile" title="Answered Questions">
            {answeredPoll.length === 0 ? (
              <Card className="text-center mt-3">
                <Card.Header>
                  <Card.Title>
                    No Answered Polls, <span>{users[authUser].name}</span> Try
                    some polls
                  </Card.Title>
                </Card.Header>
              </Card>
            ) : (
              answeredPoll.map((question) => {
                return (
                  <PollView
                    key={question.id}
                    question_id={question.id}
                    question={question}
                    author={users[question.author]}
                    unanswered={false}
                  />
                );
              })
            )}
          </Tab.Pane>
        </Tabs>
      </Layout>
    </Fragment>
  );
};

export default Dashboard;
