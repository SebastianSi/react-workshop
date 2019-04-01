import React from 'react';
import PropTypes from 'prop-types';
import withLogs from './hocs/withLogs'

const Post = ({ title, description, imgIndex, likesNumber }) => (
  <div className="post">
    <h4>{title}</h4>
    <img src={`https://picsum.photos/300/300/?image=${imgIndex}`} alt="lorem picsum" />
    <p>{description}</p>
    <div className="likes">{likesNumber} ♡</div>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgIndex: PropTypes.string.isRequired,
  likesNumber: PropTypes.string
};

Post.defaultProps = {
  title: 'Default Title'
};

export default withLogs(Post);
