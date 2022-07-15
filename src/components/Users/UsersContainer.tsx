import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {ReduxStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    users: UserType[]
}
type mapDispatchToProps = {
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    setUsers:(users:UserType[])=>void
}
export type UsersPropsType = mapStateToPropsType & mapDispatchToProps

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch:Dispatch): mapDispatchToProps => {
    return {
        follow:(userID:number)=> dispatch(followAC(userID)),
        unfollow:(userID:number)=> dispatch(unfollowAC(userID)),
        setUsers:(users:UserType[])=> dispatch(setUsersAC(users))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer;