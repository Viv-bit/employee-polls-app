import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import styles from "../assets/css/styles.module.css";

const Layout = ({ children }) => {
  return (
    <main>
      <Container>
        <div className={styles.layoutContainer}>
          <div className="d-flex flex-column justify-content-center w-100 px-2 pb-3">
            {children}
          </div>
        </div>
      </Container>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
