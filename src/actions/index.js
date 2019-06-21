import axios from "axios";
export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=abcdefg";

export function fetchPosts() {
  const res = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: res
  };
}

export function createPost(props, callback) {
  console.log(props);
  const res = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, props)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: res
  };
}

export function fetchPost(id) {
  const res = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: res
  };
}

export function deletePost(id) {
  const res = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: DELETE_POST,
    payload: res
  };
}
