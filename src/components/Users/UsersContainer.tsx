import React from 'react';
import {connect} from 'react-redux';
import {followThunkCreator, requestUsersTC, unfollowThunkCreator, UserType} from '../../redux/users-reducer';
import {RootState} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors';
// import {withAuthRedirect} from '../../hoc/withAuthRedirect';


type mapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type mapDispatchToPropsType = {
    requestUsersTC: (currentPage: number, pageSize: number) => void
    followThunkCreator: (userId: number) => void
    unfollowThunkCreator: (userId: number) => void
}
type UsersContainerPropsType = mapStateToPropsType & mapDispatchToPropsType


class UsersContainer extends React.Component<UsersContainerPropsType> {

    componentDidMount() {
        this.props.requestUsersTC(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsersTC(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         users={this.props.users}
                         onPageChanged={this.onPageChanged}
                         followingInProgress={this.props.followingInProgress}
                         followThunkCreator={this.props.followThunkCreator}
                         unfollowThunkCreator={this.props.unfollowThunkCreator}/>}
        </>
    }
}

/*const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/

const mapStateToProps = (state: RootState): mapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        requestUsersTC,
        followThunkCreator,
        unfollowThunkCreator
    }),
    // withAuthRedirect
)(UsersContainer)