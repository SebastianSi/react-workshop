import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import { postFormTitleAction } from '../actions/postsAction';

const muiStyles = theme => ({
  likes: {
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
    // console.log(event.target.value);
  },
  handleImageIndexChange: event => {
    // console.log(event.target.value);
  },
  handleLikesChange: event => {
    // console.log(event.target.value);
  }
});

export default compose(
  withStyles(muiStyles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PostForm);
