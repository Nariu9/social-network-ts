import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    updateUserStatusThunkCreator,
} from '../../redux/profile-reducer';
import {RootState} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId ?? this.props.authorizedUserId
        if (!userId) {
            this.props.history.push('/login')
        }
        this.props.getUserProfileThunkCreator(Number(userId))
        this.props.getUserStatusThunkCreator(Number(userId))
    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateUserStatusThunkCreator}/>
    }
}

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = {
    getUserProfileThunkCreator: (userId: number) => void
    getUserStatusThunkCreator: (userId: number) => void
    updateUserStatusThunkCreator: (status: string) => void
}
type PropsFromConnectType = mapDispatchToPropsType & mapStateToPropsType

type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & PropsFromConnectType

const mapStateToProps = (state: RootState) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id
})

export default compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            getUserProfileThunkCreator,
            getUserStatusThunkCreator,
            updateUserStatusThunkCreator
        }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)