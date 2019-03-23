import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import { closeResetPostFormSnackbar } from '../actions/postsAction';

const muiStyles = theme => ({
  close: {
    padding: 0
  }
});

class ResetSnackbar extends Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, open, closeSnackbar } = this.props;

    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          open={open}
          onClose={closeSnackbar}
          message={<span id="message-id">Are you sure you want to reset the form?</span>}
          action={[
            <Button
              key="undo"
              color="primary"
              size="small"
              onClick={(event, reason) => {
                closeSnackbar(event, reason, false);
              }}>
              UNDO
            </Button>,
            <Button
              key="continue"
              color="secondary"
              size="small"
              onClick={(event, reason) => {
                closeSnackbar(event, reason, true);
              }}>
              CONTINUE
            </Button>
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  open: state.postsReducer.openResetPostFormSnackbar
});
const mapDispatchToProps = dispatch => ({
  closeSnackbar: (event, reason, undoFlag) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(closeResetPostFormSnackbar(undoFlag));
  }
});

export default compose(
  withStyles(muiStyles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ResetSnackbar);
