import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "../assets/css/styles.module.css";
import { GiTrophyCup } from "react-icons/gi";

const ScoreCardLabel = ({ color }) => {
  return (
    <Fragment>
      <div
        className={styles.scoreCardLabel}
        style={{
          backgroundColor: color,
          borderColor: color,
        }}
      >
        <GiTrophyCup
          style={{
            fontWeight: 700,
            fontSize: "20px",
            margin: "0",
            position: "relative",
            top: "4px",
            left: "-8px",
          }}
        />
      </div>
    </Fragment>
  );
};

ScoreCardLabel.propTypes = {
  color: PropTypes.string.isRequired,
};

export default ScoreCardLabel;
