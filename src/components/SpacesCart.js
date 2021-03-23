import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSpaces } from "../store/space/actions";
import { selectSpaces } from "../store/space/selectors";

export default function SpacesCart() {
  const dispatch = useDispatch();
  const allSpaces = useSelector(selectSpaces);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);

  return !allSpaces ? (
    <p>loading ...</p>
  ) : (
    allSpaces.map((space, key) => {
      return (
        <div
          style={{
            marginBottom: 100,
            color: space.color,
            backgroundColor: space.backgroundColor,
            width: 500,
          }}
          key={space.id}
        >
          <h2>{space.title}</h2>
          <div>
            <p>{space.description}</p>

            <Link to={`/spacedetails/${space.id}`}>
              <button style={{ fontSize: 15 }}> Visit space</button>
            </Link>
          </div>
        </div>
      );
    })
  );
}
