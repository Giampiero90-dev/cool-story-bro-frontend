import React, { useState } from "react";
import { useSelector } from "react-redux";
import StoryForm from "./StoryForm";
import { selectUserSpace } from "../../store/user/selectors";
import StoryCart from "../../components/StoryCart";

export default function MySpace() {
  const [postStory, setpostStory] = useState(false);
  const [editSpace, setEditSpace] = useState(false);

  console.log("what is edit space", postStory);

  const userSpace = useSelector(selectUserSpace);

  console.log(userSpace?.stories);

  const editButtons = editSpace === false && postStory === false;

  return (
    <div>
      <h2>{userSpace?.title}</h2>
      <p>{userSpace?.createdAt}</p>
      {editButtons ? (
        <div>
          <button onClick={(e) => setpostStory(true)}>
            Post a cool story bro
          </button>

          <button onClick={(e) => setEditSpace(true)}>Edit my space </button>
        </div>
      ) : null}
      {editButtons ? (
        <ul>
          <StoryCart stories={userSpace?.stories} />;
        </ul>
      ) : null}
      {postStory ? <StoryForm /> : null}
      {/* {postStory ? <EditForm /> : null} */}
    </div>
  );
}
