import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export class PostForm extends Component {
  handleTitleChange = val => {
    console.log(val);
  };
  handleDescriptionChange = val => {
    console.log(val);
  };
  handleImageIndexChange = val => {
    console.log(val);
  };
  handleLikesChange = val => {
    console.log(val);
  };

  render() {
    const { title, description, imageIndex, likes } = this.props;

    return (
      <div className="post-form">
        <TextField label="Title" value={title} onChange={this.handleTitleChange} margin="normal" variant="outlined" />
        <TextField
          multiline
          rowsMax="20"
          rows="7"
          label="Description"
          value={description}
          onChange={this.handleDescriptionChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          type="number"
          label="Image Index"
          value={imageIndex}
          onChange={this.handleImageIndexChange}
          margin="normal"
          variant="outlined"
        />
        <FormControl variant="filled">
          <InputLabel htmlFor="filled-age-native-simple">Likes</InputLabel>
          <Select native value={likes} onChange={this.handleLikesChange} input={<FilledInput name="likes" />}>
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

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
