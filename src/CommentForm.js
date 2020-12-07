import React, { useContext } from "react";
import AuthenticationContext from "./AuthenticationContext";
import MoodContext from "./MoodContext";

const MESSAGES = {
  happy: "I'd love to read it!",
  normal: "",
  sad: "I will read it if I have to."
};

export default function CommentForm(props) {
  const { currentUser } = useContext(AuthenticationContext);
  const { currentMood } = useContext(MoodContext);

  const canComment = !!currentUser;
  const title = canComment
    ? `Hey ${currentUser.name}, please leave your comment?`
    : "Hey visitor, please log in to comment.";
  const subtitle = MESSAGES[currentMood];

  return (
    <div className="comment-form">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <textarea disabled={!canComment} />
      <br />
      <button disabled={!canComment}>Post comment</button>
    </div>
  );
}
