import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import PostForm from '../PostForm';
import Post from '../Post';
import { randomInt } from '../../utils/utils';
import { togglePostFormAction } from '../../actions/postsAction';

const muiStyles = () => ({
  button: {
    height: 40
  }
});

export class Posts extends Component {
  render() {
    const { classes, showPostForm, togglePostForm } = this.props;

    return (
      <div className="posts-container">
        <h1>Posts page</h1>

        <div className="post-form-container">
          <h2>Post form</h2>
          <Button className={classes.button} variant="contained" color="primary" onClick={togglePostForm}>
            {showPostForm ? 'Hide Form' : 'Show Form'}
          </Button>
          {showPostForm && <PostForm />}
        </div>

        <h2>Posts</h2>
        <div className="posts">
          {Array(12)
            .fill(randomInt())
            .map((item, index) => (
              <Post key={item + index} imgIndex={randomInt()} />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showPostForm: state.postsReducer.showPostForm
});
const mapDispatchToProps = dispatch => ({
  togglePostForm: () => {
    dispatch(togglePostFormAction());
  }
});

export default compose(
  withStyles(muiStyles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Posts);
