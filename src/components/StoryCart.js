import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserStories } from "../store/user/selectors";
import { getUserWithStoredToken, deleteStory } from "../store/user/actions";

export default function StoryCart(props) {
  console.log(props);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteStory(id));
  };

  return (
    <div>
      {props.stories?.map((story, index) => {
        return (
          <div key={index}>
            <h3>{story.name}</h3>;
            <button onClick={() => onDelete(story.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}
