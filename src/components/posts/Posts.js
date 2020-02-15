import React, { Fragment, useContext, useEffect } from 'react';
import PostContext from '../../context/post/postContext';
import PostItem from './PostItem';

const Posts = () => {
  const postContext = useContext(PostContext);
  const { posts, getPosts } = postContext;

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </Fragment>
  );
};

export default Posts;
