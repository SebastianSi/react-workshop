import React from 'react';
import { randomInt } from '../utils/utils';

const Post = ({ imgIndex }) => (
  <div className="post">
    <h4>Title</h4>
    <img src={`https://picsum.photos/300/300/?image=${imgIndex}`} alt="a lorem picsum picture" />
    <p>description</p>
    <div className="likes">{randomInt(100)} ♡</div>
  </div>
);

export default Post;
