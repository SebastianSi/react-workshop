import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';

// remove block of imports after connecting the 'likes' field to redux-form
import ReactDOM from 'react-dom';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {
  postFormDescriptionAction, // remove after connecting the 'description' field to redux-form
  postFormImageIndexAction, // remove after connecting the 'imageIndex' field to redux-form
  postFormLikesAction, // remove after connecting the 'likes' field to redux-form
  addPostAction,
  openResetPostFormSnackbar
} from '../actions/postsActions';
import TextInput from '../inputs/Text';
// import 'SelectInput'

const muiStyles = theme => ({
  // remove 'likes' style after connecting the 'likes' field to redux-form
  likes: {
    marginTop: 15
  },
  addButton: {
    height: 40,
    marginTop: 15,
    marginright: 15,
    backgroundColor: 'green'
  },
  resetButton: {
    height: 40,
    marginTop: 15,
    marginLeft: 15,
    backgroundColor: 'orange'
  }
});

// field level validation
// const fieldLevelValidation = (val, allValues, props) => {
//   if (!val) {
//     return 'Required - fieldLevelValidation';
//   } else if (val === 'asd') {
//     return 'Invalid - fieldLevelValidation';
//   }
//   return;
// };

const validate = values => {
  const errors = {};
  // // handle required fields all at once
  // const requiredFields = ['title', 'description', 'imageIndex', 'likes'];
  // requiredFields.forEach(field => {
  //   if (!values[field]) {
  //     errors[field] = 'Required field';
  //   }
  // });

  if (!values.title) {
    errors.title = 'Required field';
  } else if (values.title.length > 20) {
    errors.title = 'Max 20 characters allowed';
  } else if (values.title.includes('poop')) {
    errors.title = 'Invalid title';
  }
  // you can add some validation for 'description' and 'imageIndex'
  return errors;
};
export class PostForm extends Component {
  // remove after implementing the 'likes' field
  state = {
    labelWidth: 0
  };

  // remove after implementing the 'likes' field
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
      handleDescriptionChange,
      handleImageIndexChange,
      handleLikesChange,
      addPost,
      openSnackbar
    } = this.props;

    return (
      <div className="post-form">
        <Field
          // validate={fieldLevelValidation}
          name="title" // mandatory
          label="Title" // needed but not mandatory
          margin="normal" // material-ui stuff
          variant="outlined" // material-ui stuff
          component={TextInput} // mandatory
        />
        {/* replace 'TextField' with the 'Field' element and pass forward the required props
            'value' and 'onChange' can be removed, not needed anymore
            'name' and 'component' (TextField) are mandatory
            'multiline', 'rowsMax', 'rows', 'label', 'margin' and 'variant' needed material-ui props
        */}
        <TextField
          multiline
          rowsMax="20"
          rows="7"
          label="Description"
          margin="normal"
          variant="outlined"
          value={description}
          onChange={handleDescriptionChange}
        />
        {/* replace 'TextField' with the 'Field' element and pass forward the required props
            'value' and 'onChange' can be removed, not needed anymore
            'name' and 'component' (TextField) are mandatory
            'type', 'label', 'margin' and 'variant' are material-ui props
          */}
        <TextField
          type="number"
          label="Image Index"
          margin="normal"
          variant="outlined"
          value={imageIndex}
          onChange={handleImageIndexChange}
        />
        {/* replace 'TextField' with the 'Field' element and pass forward the required props
            'value' and 'onChange' can be removed, not needed anymore
            'name' and 'component' (SelectInput) are mandatory
            'label' and 'variant' are material-ui props
        */}
        <FormControl variant="outlined" className={classes.likes}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-likes">
            Likes
          </InputLabel>
          <Select
            native
            value={likes}
            onChange={handleLikesChange}
            input={<OutlinedInput name="likes" labelWidth={this.state.labelWidth} />}
            id="outlined-likes">
            <option value="" />
            <option value={1}>★☆☆☆☆</option>
            <option value={2}>★★☆☆☆</option>
            <option value={3}>★★★☆☆</option>
            <option value={4}>★★★★☆</option>
            <option value={5}>★★★★★</option>
          </Select>
        </FormControl>

        <Button
          className={classes.addButton}
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
        <Button className={classes.resetButton} variant="contained" color="primary" onClick={openSnackbar}>
          Reset Form
        </Button>
      </div>
    );
  }
}

// remove 'mapStateToProps' after connecting every field to redux-form
const mapStateToProps = state => ({
  description: state.postsReducer.descriptionInput,
  imageIndex: state.postsReducer.imageIndexInput,
  likes: state.postsReducer.likesInput
});
const mapDispatchToProps = dispatch => ({
  // remove after connecting the 'description' field to redux-form
  handleDescriptionChange: event => {
    dispatch(postFormDescriptionAction(event.target.value));
  },
  // remove after connecting the 'imageIndex' field to redux-form
  handleImageIndexChange: event => {
    dispatch(postFormImageIndexAction(event.target.value));
  },
  // remove after connecting the 'likes' field to redux-form
  handleLikesChange: event => {
    dispatch(postFormLikesAction(event.target.value));
  },
  addPost: post => {
    dispatch(addPostAction(post));
  },
  openSnackbar: () => {
    dispatch(openResetPostFormSnackbar());
  }
});

export default compose(
  withStyles(muiStyles),
  connect(
    mapStateToProps, // change to 'null' after connecting every field to redux-form
    mapDispatchToProps
  ),
  reduxForm({
    form: 'postForm',
    validate
  })
)(PostForm);
