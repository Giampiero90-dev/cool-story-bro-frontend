import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectSpaces } from "../../store/space/selectors";
import { fetchSpaceById } from "../../store/space/actions";

export default function SpaceDetailsPage() {
  const dispatch = useDispatch();
  const space = useSelector(selectSpaces);

  const { id } = useParams();
  // console.log("id no component", id);

  useEffect(() => {
    dispatch(fetchSpaceById(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>{space.title}</h1>
      <p>{space.description}</p>
      <div>
        {!space.stories ? (
          <p>Loading...</p>
        ) : (
          space.stories.map((story) => {
            return (
              <div>
                <h3>{story.name}</h3>
                <p>{story.content}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
