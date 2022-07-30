import React from 'react';
import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../redux/users-reducer';
import {ReduxStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import axios from 'axios';
import {Users} from './Users';


type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type mapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (usersCount: number) => void
}
type UsersAPIContainerPropsType = mapStateToPropsType & mapDispatchToProps


class UsersContainer extends React.Component<UsersAPIContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
    }
}

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {
        follow: (userID: number) => dispatch(followAC(userID)),
        unfollow: (userID: number) => dispatch(unfollowAC(userID)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (pageNumber: number) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalUsersCount: (usersCount: number) => dispatch(setTotalUsersCountAC(usersCount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);