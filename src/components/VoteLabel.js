import React, { Fragment } from "react";
import styles from "../assets/css/styles.module.css";
import { BsAwardFill } from "react-icons/bs";

const VoteLabel = () => {
  return (
    <Fragment>
      <div className={styles.voteLabel}>
        <BsAwardFill className="mx-2" style={{ fontSize: "20px" }} />
        <div styles={{ float: "right" }}>Your Vote</div>
      </div>
    </Fragment>
  );
};

export default VoteLabel;
