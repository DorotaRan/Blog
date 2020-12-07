import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import UserGreeting from "./UserGreeting";
import UserSelector from "./UserSelector";
import MoodSelector from "./MoodSelector";
import CommentForm from "./CommentForm";
import AuthenticationContext from "./AuthenticationContext";
import MoodContext from "./MoodContext";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentMood, setCurrentMood] = useState("normal");
  return (
    <div className="App">
      <MoodContext.Provider
        value={{ currentMood, onCurrentMoodChange: setCurrentMood }}
      >
        <AuthenticationContext.Provider
          value={{
            currentUser,
            onLogin: setCurrentUser,
            onLogout: () => setCurrentUser(null)
          }}
        >
          <Header />
          <Article title="Vaccinations do not hurt!" />
          <Article title="Coal Energy- Biggest Contributor to Global Warming" />
          <Article title="Bucket list holiday destinations" />
          <Article title="Covid-19 - are we winning or not?" />
        </AuthenticationContext.Provider>
      </MoodContext.Provider>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Like it or not blog</h1>
      <UserGreeting />
      <UserSelector />
      <MoodSelector />
    </header>
  );
}

function Article({ title }) {
  return (
    <article>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <CommentForm />
    </article>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
