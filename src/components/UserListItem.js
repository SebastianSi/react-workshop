import React from 'react';
import Button from "./common/Button";


function UserListItem(props) {
    let { user } = props;
    return (
        <li style={{padding: 10}}>
            <span style={{cursor: 'pointer'}}>name: <b>{user.name}</b> </span>
            <Button text={'Edit'} onClick={()=>{props.openUserForm(user.id)}}/>
        </li>
    );
}

export default UserListItem;
