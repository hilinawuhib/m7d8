import React from "react";
import { Navbar } from "react-bootstrap";
class MyNavbar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navbarbg">
          <img className="imgnav" src="./logospo.png" alt="" />
          <Navbar.Brand className="navbartext" href="#home">
            Music Chooser
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login">sign-in</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
export default MyNavbar;
