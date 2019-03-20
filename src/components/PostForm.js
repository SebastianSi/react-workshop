import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import {
  postFormTitleAction,
  postFormDescriptionAction,
  postFormImageIndexAction,
  postFormLikesAction,
  addPostAction
} from '../actions/postsAction';

const muiStyles = theme => ({
  likes: {
    marginTop: 15
  },
  button: {
    height: 40,
    marginTop: 15
  }
});
export class PostForm extends Component {
  state = {
    labelWidth: 0
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
  }

  render() {
    const {
      classes,
      title,
      description,
      imageIndex,
      likes,
      handleTitleChange,
      handleDescriptionChange,
      handleImageIndexChange,
      handleLikesChange,
      addPost
    } = this.props;

    return (
      <div className="post-form">
        <TextField label="Title" value={title} onChange={handleTitleChange} margin="normal" variant="outlined" />
        <TextField
          multiline
          rowsMax="20"
          rows="7"
          label="Description"
          value={description}
          onChange={handleDescriptionChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          type="number"
          label="Image Index"
          value={imageIndex}
          onChange={handleImageIndexChange}
          margin="normal"
          variant="outlined"
        />
        <FormControl variant="outlined" className={classes.likes}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}>
            Likes
          </InputLabel>
          <Select
            native
            value={likes}
            onChange={handleLikesChange}
            input={<OutlinedInput name="likes" labelWidth={this.state.labelWidth} />}>
            <option value={null}>None</option>
            <option value={1}>★☆☆☆☆</option>
            <option value={2}>★★☆☆☆</option>
            <option value={3}>★★★☆☆</option>
            <option value={4}>★★★★☆</option>
            <option value={5}>★★★★★</option>
          </Select>
        </FormControl>

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={() => {
            addPost({
              title,
              description,
              imageIndex,
              likes
            });
          }}>
          Add Post
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.postsReducer.titleInput,
  description: state.postsReducer.descriptionInput,
  imageIndex: state.postsReducer.imageIndexInput,
  likes: state.postsReducer.likesInput
});
const mapDispatchToProps = dispatch => ({
  handleTitleChange: event => {
    dispatch(postFormTitleAction(event.target.value));
  },
  handleDescriptionChange: event => {
    dispatch(postFormDescriptionAction(event.target.value));
  },
  handleImageIndexChange: event => {
    dispatch(postFormImageIndexAction(event.target.value));
  },
  handleLikesChange: event => {
    dispatch(postFormLikesAction(event.target.value));
  },
  addPost: post => {
    dispatch(addPostAction(post));
  }
});

export default compose(
  withStyles(muiStyles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PostForm);
