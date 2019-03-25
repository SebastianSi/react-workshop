import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';

import { addPostAction, openResetPostFormSnackbar } from '../actions/postsActions';
import TextInput from '../inputs/Text';
import SelectInput from '../inputs/Select';

const muiStyles = theme => ({
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

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Required field';
  } else if (values.title.length > 20) {
    errors.title = 'Max 20 characters allowed';
  } else if (values.title.includes('poop')) {
    errors.title = 'Invalid title (poop)';
  }

  if (!values.description) {
    errors.description = 'Required field';
  } else if (values.description.length < 20) {
    errors.description = 'Min 20 characters allowed';
  } else if (values.description.length > 500) {
    errors.description = 'Max 500 characters allowed';
  } else if (values.description.includes('poop')) {
    errors.description = 'Invalid title (poop)';
  }

  if (!values.imageIndex) {
    errors.imageIndex = 'Required field';
  } else if (values.imageIndex > 900) {
    errors.imageIndex = '900 is the maximum image limit';
  }
  // you can add some validation for 'description' and 'imageIndex'
  return errors;
};
export class PostForm extends Component {
  render() {
    const { classes, title, description, imageIndex, likes, addPost, openSnackbar } = this.props;

    return (
      <div className="post-form">
        <Field name="title" label="Title" margin="normal" variant="outlined" component={TextInput} />
        <Field
          name="description"
          multiline
          rowsMax="20"
          rows="7"
          label="Description"
          margin="normal"
          variant="outlined"
          component={TextInput}
        />
        <Field
          name="imageIndex"
          type="number"
          label="Image Index"
          margin="normal"
          variant="outlined"
          component={TextInput}
        />
        <Field name="likes" label="Likes" variant="outlined" component={SelectInput} />

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

const mapStateToProps = state => {
  const selector = formValueSelector('postForm');

  return {
    title: selector(state, 'title'),
    description: selector(state, 'description'),
    imageIndex: selector(state, 'imageIndex'),
    likes: selector(state, 'likes')
  };
};

const mapDispatchToProps = dispatch => ({
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
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: 'postForm',
    validate
  })
)(PostForm);
