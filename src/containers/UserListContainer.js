import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getUsers} from "../actions";

const UserListContainer = ({getUsers, users}) => {

    useEffect(() => {
        getUsers();
    }, []);
    return (

        <div>
            {users.users.map(u =>
                <h6 key={u.id}>{u.name}</h6>
            )}
        </div>
    )

}


const mapStateToProps = (state => ({users: state.users}))

export default connect(
    mapStateToProps,
    {getUsers}
)(UserListContainer);
