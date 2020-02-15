import React from 'react';
import Posts from '../posts/Posts';
import PostForm from '../posts/postForm';

export const Home = () => {
  return (
    <div className='container '>
      <h1>Bunnies project tARGIL 4</h1>
      <div className='miniContainer'>
        <div className='grid-3'>
          <div className='card'>
            <div>
              <PostForm />
            </div>
          </div>
          <div className='middleItem'>
            <div className='middleImage'></div>
          </div>
          <div className='card list'>
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
