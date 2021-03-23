import React, { useState } from "react";
import StoryForm from "./StoryForm";

export default function MySpace() {
  const [postStory, setpostStory] = useState(false);
  console.log("what is edit space", postStory);

  const editButtons = postStory === false;

  return (
    <div>
      {editButtons ? (
        <button onClick={(e) => setpostStory(true)}>
          Post a cool story bro
        </button>
      ) : null}

      {postStory ? <StoryForm /> : null}
    </div>
  );
}
