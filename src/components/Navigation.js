import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, NavItem, Container, Button } from "react-bootstrap";
import styles from "../assets/css/styles.module.css";
import Avatar from "./Avatar";
import { sayGreetings } from "../utils/functions";
import { handleSetAuthUser } from "../redux/actions/authUser";

const Navigation = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const authenticatedUser = useSelector(
    ({ authenticatedUser }) => authenticatedUser
  );
  const users = useSelector(({ users }) => users);
  const handleLogout = () => {
    dispatch(handleSetAuthUser());
    navigate("/");
  };

  return (
    <>
      <Container>
        <Navbar>
          <Nav className="justify-content-between w-100 mt-3 px-6">
            <div className={styles.navRight}>
              <NavItem>
                <Nav.Link name="home" as={NavLink} to="/home">
                  Home
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link name="new poll question" as={NavLink} to="/add">
                  New Question
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link name="leader board" as={NavLink} to="/leaderboard">
                  Leader Board
                </Nav.Link>
              </NavItem>
            </div>
            <div className={styles.navLeft}>
              <NavItem>
                <Navbar.Text className="text-mute">
                  {sayGreetings()}
                </Navbar.Text>
                <Navbar.Text>{users[authenticatedUser]?.name}</Navbar.Text>
                <Avatar
                  width={40}
                  height={40}
                  avatarURL={
                    users[authenticatedUser]?.avatarURL
                      ? users[authenticatedUser].avatarURL
                      : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                  }
                  name={users[authenticatedUser]?.name}
                />
              </NavItem>
              <NavItem>
                <Nav.Link>
                  <Button onClick={handleLogout} variant="light">
                    Logout
                  </Button>
                </Nav.Link>
              </NavItem>
            </div>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
};

export default Navigation;
