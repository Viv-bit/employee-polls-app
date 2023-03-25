import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import ScoreCard from "../../components/ScoreCard";
import Layout from "../../components/Layout";
import ScoreCardLabel from "../../components/ScoreCardLabel";

const LeaderBoard = () => {
  const users = useSelector(({ users }) => users);

  const sortedUsersScores = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCounter: Object.values(user.answers).length,
      questionCounter: user.questions.length,
      totalCount: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => a.totalCount - b.totalCount)
    .reverse()
    .slice(0, 3);

  const icons = ["gold", "silver", "#CD7F32"];
  return (
    <Layout>
      {sortedUsersScores.map((user, i) => {
        return (
          <Card className="mt-2 w-100" key={i}>
            <ScoreCardLabel color={icons[i]} />
            <ScoreCard user={user} key={user.id} />
          </Card>
        );
      })}
    </Layout>
  );
};

export default LeaderBoard;
