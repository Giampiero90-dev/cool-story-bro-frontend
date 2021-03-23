import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postStory } from "../../store/user/actions";

export default function StoryForm() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://source.unsplash.com/1600x900/?"
  );

  const dispatch = useDispatch(postStory());

  const onFormSubmit = (e) => {
    e.preventDefault();
    //   dispatch(addProduct(name, description, history));
    dispatch(postStory(name, content, imageUrl));
  };

  return (
    <div>
      <h2>Post a cool story bro</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          <label style={{ marginRight: 20 }}>Name</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label style={{ marginRight: 20 }}>Content</label>
          <textarea
            type="textarea"
            value={content}
            name="description"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label style={{ marginRight: 20 }}>Image Url</label>
          <input
            type=""
            value={imageUrl}
            name="description"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
