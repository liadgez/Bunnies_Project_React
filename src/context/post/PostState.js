import React, { useReducer } from 'react';
import axios from 'axios';
import PostContext from './postContext';
import postReducer from './postReducer';
import {
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  GET_POSTS
} from '../types';

const PostState = props => {
  const initialState = {
    posts: [],
    current: null
  };
  const [state, dispatch] = useReducer(postReducer, initialState);

  // Get Posts
  const getPosts = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({ type: GET_POSTS, payload: res.data });
    } catch (error) {
      return error;
    }
  };

  // Add post
  const addPost = async post => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        post,
        config
      );
      dispatch({ type: ADD_POST, payload: res.data });
    } catch (error) {
      return error;
    }
  };

  // Delete post
  const deletePost = async id => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      dispatch({ type: DELETE_POST, payload: id });
    } catch (error) {
      return error;
    }
  };

  // Set Current
  const setCurrent = post => {
    dispatch({ type: SET_CURRENT, payload: post });
  };

  //Clear current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Edit post
  const updatePost = async post => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        post,
        config
      );
      dispatch({ type: UPDATE_POST, payload: res.data });
    } catch (error) {
      return error;
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        current: state.current,
        addPost,
        deletePost,
        setCurrent,
        clearCurrent,
        updatePost,
        getPosts
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
export default PostState;
