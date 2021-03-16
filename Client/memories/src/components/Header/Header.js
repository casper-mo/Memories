import React from "react";
import { Navbar } from "react-bootstrap";
import memories from "../../assets/images/memories.png";
import styles from "./header.styles.css";
const Header = () => {
  return (
    <Navbar expand="md" className={styles.navbar}>
      <h1> MEMORIES</h1>
      <Navbar.Brand as="div">
        <img src={memories} height="60" alt="memories " />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
