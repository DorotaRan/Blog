import React from "react";
const MoodContext = React.createContext({
  currentMood: null,
  onCurrentMoodChange: () => {}
});

export default MoodContext;
