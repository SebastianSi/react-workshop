import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { postFormTitleAction } from '../actions/postsAction';

export class PostForm extends Component {
  render() {
    const {
      title,
      description,
      imageIndex,
      likes,
      handleTitleChange,
      handleDescriptionChange,
      handleImageIndexChange,
      handleLikesChange
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
        <FormControl variant="filled">
          <InputLabel>Likes</InputLabel>
          <Select native value={likes} onChange={handleLikesChange} input={<FilledInput name="likes" />}>
            <option value={null}>None</option>
            <option value={1}>★☆☆☆☆</option>
            <option value={2}>★★☆☆☆</option>
            <option value={3}>★★★☆☆</option>
            <option value={4}>★★★★☆</option>
            <option value={5}>★★★★★</option>
          </Select>
        </FormControl>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showPostForm: state.postsReducer.showPostForm
});
const mapDispatchToProps = dispatch => ({
  handleTitleChange: event => {
    dispatch(postFormTitleAction(event.target.value));
  },
  handleDescriptionChange: event => {
    console.log(event.target.value);
  },
  handleImageIndexChange: event => {
    console.log(event.target.value);
  },
  handleLikesChange: event => {
    console.log(event.target.value);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
