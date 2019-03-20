import React from 'react';

const Post = ({ imgIndex, likesNumber }) => (
  <div className="post">
    <h4>Title</h4>
    <img src={`https://picsum.photos/300/300/?image=${imgIndex}`} alt="lorem picsum" />
    <p>description</p>
    <div className="likes">{likesNumber} ♡</div>
  </div>
);

export default Post;
