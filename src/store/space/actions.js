import axios from "axios";
import { useParams } from "react-router";

const apiUrl = process.env.API_URL || "//localhost:4000";

export function spacesLists(data) {
  console.log(`DATA`, data);
  return {
    type: "spaces/fetched",
    payload: data,
  };
}

export function fetchSpaces() {
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/spaces`);
    console.log("spaces response", response.data);
    dispatch(spacesLists(response.data));
  };
}

export function spaceById(data) {
  console.log(`DATA by id`, data);
  return {
    type: "spaces/fetchedById",
    payload: data,
  };
}

export function fetchSpaceById(id) {
  // console.log("id at the action", id);
  return async function thunk(dispatch, getState) {
    const response = await axios.get(`${apiUrl}/spaces/${id}`);
    console.log("spaces by pk response", response.data);
    dispatch(spaceById(response.data));
  };
}
