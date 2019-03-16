import React, { Component } from 'react';
import UserListItem from './UserListItem';
import UserForm from './UserForm';
import mockApi from '../utils/mockApi';
import Button from './common/Button';

class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            users: [],
            isFormOpen: false,
            isAddMode: false,
            currentUserClicked: null
        }
    }

    openUserForm = (userId, isAddMode) => {
        this.setState({
            currentUserClicked: userId,
            isFormOpen: true,
            isAddMode
        })
    };

    closeUserForm = () => {
        this.setState({
            currentUserClicked: null,
            isFormOpen: false
        })
    };

    onUserFormSubmit = (user) => {
        if (this.state.isAddMode) {
            mockApi.addUser(user).then(this.fetchUsers)
        } else {
            mockApi.updateUser(user).then(this.fetchUsers)
        }
        this.closeUserForm();
    };

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers = () => {
        mockApi.fetchUsers().then((users)=> {
            this.setState({users})
        })
    };

    renderUsersList = (users) => (
        <ul className={'users-list-container'}>
            {
                users.map((user) => (
                    <UserListItem key={user.id} user={user} openUserForm={this.openUserForm}/>
                ))
            }
        </ul>
    );

    render() {
        let { users, isAddMode, isFormOpen, currentUserClicked } = this.state;
        return (
            <div style={styles}>
                {isFormOpen ?
                    <UserForm
                        isAddMode={isAddMode}
                        userId={currentUserClicked}
                        onSubmit={this.onUserFormSubmit}
                        onCancel={this.closeUserForm}
                    /> :
                    <>
                        {!!users.length && this.renderUsersList(users)}
                        <div>
                            <Button text={'Add user'} onClick={()=> {this.openUserForm(null, true)}}/>
                        </div>
                    </>
                }
            </div>
        );
    }
}

const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 450,
    height: 700,
    borderRadius: 5
};

export default UsersList;
