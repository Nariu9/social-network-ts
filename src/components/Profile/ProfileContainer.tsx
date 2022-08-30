import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator,
    ProfileType,
    updateUserStatusThunkCreator,
} from '../../redux/profile-reducer';
import {RootState} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '24944'
        this.props.getUserProfileThunkCreator(userId)
        this.props.getUserStatusThunkCreator(userId)
    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateUserStatusThunkCreator}/>
    }
}

type mapStateToPropsType = {
    profile: null | ProfileType
    status: string
}
type mapDispatchToPropsType = {
    getUserProfileThunkCreator: (userId: string) => void
    getUserStatusThunkCreator: (userId: string) => void
    updateUserStatusThunkCreator: (status: string) => void
}
type PropsFromConnectType = mapDispatchToPropsType & mapStateToPropsType

type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & PropsFromConnectType

const mapStateToProps = (state: RootState): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
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