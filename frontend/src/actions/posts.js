import axios from "axios";
import {
  FETCH_POST,
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST,
  VOTE,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";


export const getPostFromAPI = id => {
  return async (dispatch) => {
    let res = await axios.get(`${API_URL}/${id}`);
    dispatch(getPost(res.data));
  };
}

const getPost = post => {
  return {
    type: FETCH_POST,
    post
  };
}

export const sendPostToAPI = (title, description, body) => {
  return async (dispatch) => {
    let res = await axios.post(`${API_URL}`, {
      title,
      description,
      body
    });
    dispatch(addPost(res.data));
  };
}

const addPost = post => {
  return {
    type: ADD_POST,
    post
  };
}

export const updatePostInAPI = (id, title, description, body) => {
  return async (dispatch) => {
    let res = await axios.put(`${API_URL}/${id}`, {
      title,
      description,
      body
    });
    dispatch(updatePost(res.data));
  };
}

const updatePost = post => {
  return {
    type: UPDATE_POST,
    post
  };
}

export const removePostFromAPI = id => {
  return async (dispatch) => {
    await axios.delete(`${API_URL}/${id}`);
    dispatch(removePost(id));
  };
}

const removePost = postId => {
  return {
    type: REMOVE_POST,
    postId
  };
}

export const sendVoteToAPI = (id, direction) => {
  return async (dispatch) => {
    const response = await axios.post(`${API_URL}/${id}/vote/${direction}`);
    dispatch(vote(id, response.data.votes));
  };
}

const vote = (postId, votes) => {
  return {
    type: VOTE,
    postId: postId,
    votes: votes,
  };
}

export const sendCommentToAPI = (postId, text) => {
  return async (dispatch) => {
    let res = await axios.post(`${API_URL}/${params.postId}/comments`, { text });
    dispatch(addComment(postId, result.data));
  };
}

const addComment = (postId, comment) => {
  return {
    type: ADD_COMMENT,
    postId,
    comment
  };
}

export const removeCommentFromAPI = (postId, commentId) => {
  return async (dispatch) => {
    await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
    dispatch(removeComment(postId, commentId));
  };
}

const removeComment = (postId, commentId) => {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId,
  };
}
