import React, { Component } from 'react';
import UserListItem from './UserListItem';
import UserForm from './UserForm';
import mockApi from '../utils/mockApi';
import { withStyles } from '@material-ui/core/styles';
import Button from './common/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { usersAction } from '../actions/usersActions';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isFormOpen: false,
      isAddMode: false,
      currentUserClicked: null
    };
  }

  openUserForm = (userId, isAddMode) => {
    this.setState({
      currentUserClicked: userId,
      isFormOpen: true,
      isAddMode
    });
  };

  closeUserForm = () => {
    this.setState({
      currentUserClicked: null,
      isFormOpen: false
    });
  };

  onUserFormSubmit = user => {
    console.log(user);
    if (this.state.isAddMode) {
      mockApi.addUser(user).then(this.fetchUsers);
    } else {
      mockApi.updateUser(user).then(this.fetchUsers);
    }
    this.closeUserForm();
  };

  onUserDelete = userId => {
    mockApi.deleteUser(userId).then(this.fetchUsers);
    this.closeUserForm();
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    // just call 'this.props.getUsers()' without any api call, remove the fetch call
    mockApi.fetchUsers().then(users => {
      this.props.getUsers(users);
      // this.setState({ users });
    });
  };

  renderUsersList = users => (
    <ul className={'users-list-container'}>
      {users.map(user => (
        <UserListItem key={user.id} user={user} openUserForm={this.openUserForm} />
      ))}
    </ul>
  );

  render() {
    const { classes, users } = this.props;
    let { isAddMode, isFormOpen, currentUserClicked } = this.state;
    console.log('users--->', users);
    return (
      // <div className={classes.root}>
      <div>
        {isFormOpen ? (
          <UserForm
            isAddMode={isAddMode}
            userId={currentUserClicked}
            onSubmit={this.onUserFormSubmit}
            onDelete={this.onUserDelete}
            onCancel={this.closeUserForm}
          />
        ) : (
          <>
            {!!users.length && this.renderUsersList(users)}
            <div>
              <Button
                text={'Add user'}
                onClick={() => {
                  this.openUserForm(null, true);
                }}
              />
              <Link to={'/contact'}>
                {' '}
                <Button text={'Contact Page'} />{' '}
              </Link>
              <Link to={'/posts'}>
                {' '}
                <Button text={'Posts Page'} />{' '}
              </Link>
            </div>
          </>
        )}
      </div>
    );
  }
}

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 450,
    height: 700,
    borderRadius: 5
  }
});

const mapStateToProps = state => ({
  users: state.usersReducer.users
});

const mapDispatchToProps = dispatch => ({
  // remove users param
  getUsers: users => {
    dispatch(usersAction(users));
  }
});

// export default withStyles(styles)(UsersList);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
