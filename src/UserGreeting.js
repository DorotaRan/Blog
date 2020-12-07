import React, { useContext } from "react";
import AuthenticationContext from "./AuthenticationContext";
import MoodContext from "./MoodContext";
const MESSAGES = {
  happy: "Great to see you!",
  normal: "",
  sad: "Have a good day, I guess..."
};

export default function UserGreeting(props) {
  const { currentUser } = useContext(AuthenticationContext);
  const { currentMood } = useContext(MoodContext);
  const message = MESSAGES[currentMood];
  return (
    <>
      <h2>Hi {currentUser ? currentUser.name : "visitor"}</h2>
      <h3>{message}</h3>
    </>
  );
}
