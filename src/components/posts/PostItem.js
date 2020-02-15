import React, { useContext } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import PostContext from '../../context/post/postContext';

const PostItem = ({ post }) => {
  const postContext = useContext(PostContext);
  const { deletePost, setCurrent } = postContext;

  const { id, title } = post;

  return (
    <div className='postItem'>
      {title.length < 29 ? (
        <h3 className='row'>
          {id}) {title}
          <span className='icons' style={{ float: 'right' }}>
            <EditIcon onClick={() => setCurrent(post)} />
            <DeleteIcon
              style={{ fill: '#FD5842' }}
              onClick={() => deletePost(id)}
            />
          </span>
        </h3>
      ) : (
        <h3 className='row-sm'>
          {id}) {title}
          <span className='icons' style={{ float: 'right' }}>
            <EditIcon onClick={() => setCurrent(post)} />
            <DeleteIcon
              style={{ fill: '#FD5842' }}
              onClick={() => deletePost(id)}
            />
          </span>
        </h3>
      )}
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostItem;
