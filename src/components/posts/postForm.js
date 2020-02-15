import React, { useState, useContext, useEffect } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import PostContext from '../../context/post/postContext';
import EditIcon from '@material-ui/icons/Edit';

const PostForm = () => {
  const postContext = useContext(PostContext);
  const [post, setPost] = useState({ id: '', title: '', body: '' });
  const { addPost, current, clearCurrent, updatePost } = postContext;

  useEffect(() => {
    if (current !== null) {
      setPost(current);
    } else {
      setPost({
        id: '',
        title: '',
        body: ''
      });
    }
  }, [postContext, current]);

  const { id, title, body } = post;

  const onChange = e => setPost({ ...post, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addPost(post);
      setPost({ id: '', title: '', body: '' });
    } else {
      updatePost(post);
      clearCurrent();
    }
  };

  const clearALL = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2> {current ? 'Edit A Post!' : 'Add A New Post!'} </h2>
      {!current ? (
        <input
          type='text'
          name='id'
          placeholder='id'
          value={id}
          onChange={onChange}
        />
      ) : null}
      <input
        type='text'
        name='title'
        placeholder='title'
        value={title}
        onChange={onChange}
      />
      <textarea
        className='bodyInput'
        type='text'
        name='body'
        placeholder='body'
        value={body}
        onChange={onChange}
      />
      <button style={{ background: 'none', border: 'none', outline: 'none' }}>
        {!current ? (
          <AddCircleOutlineIcon
            type='submit'
            value='Add Post'
            style={{ fontSize: 75, fill: '#FD5842' }}
          />
        ) : (
          <EditIcon
            type='submit'
            value='Edit Post'
            style={{ fontSize: 75, fill: '#FD5842' }}
          />
        )}
      </button>
      {current && (
        <div>
          <button className='btn' onClick={clearALL}>
            {' '}
            CLEAR{' '}
          </button>
        </div>
      )}
    </form>
  );
};

export default PostForm;
