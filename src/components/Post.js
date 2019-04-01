import React from 'react';
import withLogs from './hocs/withLogs'

const Post = ({ title, description, imgIndex, likesNumber }) => (
  <div className="post">
    <h4>{title}</h4>
    <img src={`https://picsum.photos/300/300/?image=${imgIndex}`} alt="lorem picsum" />
    <p>{description}</p>
    <div className="likes">{likesNumber} ♡</div>
  </div>
);

export default withLogs(Post);
