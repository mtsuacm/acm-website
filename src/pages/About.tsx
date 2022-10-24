import React from "react";
import NavBar from "../components/navbar.tsx";
const About = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <h1>About</h1>
          <p>
            This is the about page. It will be updated with more information
            soon.
          </p>
        </header>
      </div>
    </div>
  );
};

export default About;
