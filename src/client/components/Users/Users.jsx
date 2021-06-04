import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { fetchUsers } from '../../store/actions';
import store from '../../../helpers/createStore';

const Users = (props) => {

    useEffect(() => {
        // props.fetchUsers();
    }, []);

    const renderUsers = () => {
        return props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    return (
        <div>
            Users List
            <ul>
                {renderUsers()}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

function loadData(store) {
    console.log('Loading Data ...');
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    component: connect(mapStateToProps, {fetchUsers})(Users)
}