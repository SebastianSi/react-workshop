import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Post from '../Post';
import Button from '@material-ui/core/Button';
import PostForm from '../PostForm';
import { withStyles } from '@material-ui/core/styles';
import { randomInt } from '../../utils/utils';

// import 'togglePostFormAction' action

const muiStyles = theme => ({
  button: {
    height: 40
  }
});

export class Posts extends Component {
  render() {
    //  the 'showPostForm' flag and 'togglePostForm' function should be on props
    const { classes } = this.props;

    return (
      <div className="posts-container">
        <h1>Posts page</h1>

        <div className="post-form-container">
          <h2>Post form</h2>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => {
              // call 'togglePostForm' function here but without the wrap arrow function
            }}>
            {// replace 'true' with the 'showPostForm' flag
            true ? 'Hide Form' : 'Show Form'}
          </Button>
          {// replace 'true' with the 'showPostForm' flag
          true && <PostForm />}
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
  // subscribe to store to get 'showPostForm' flag
});
const mapDispatchToProps = dispatch => ({
  // create a function called 'togglePostForm' which dispatches the 'togglePostFormAction'
});

export default compose(
  withStyles(muiStyles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Posts);
