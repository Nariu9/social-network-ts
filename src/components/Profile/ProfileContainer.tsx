import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
    getUserProfileThunkCreator,
    getUserStatusThunkCreator, saveMainPhotoTC,
    updateUserStatusThunkCreator,
} from '../../redux/profile-reducer';
import {RootState} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId ?? this.props.authorizedUserId
        if (!userId) {
            this.props.history.push('/login')
        }
        this.props.getUserProfileThunkCreator(Number(userId))
        this.props.getUserStatusThunkCreator(Number(userId))
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateUserStatusThunkCreator}
                        saveMainPhoto={this.props.saveMainPhotoTC}/>
    }
}

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = {
    getUserProfileThunkCreator: (userId: number) => void
    getUserStatusThunkCreator: (userId: number) => void
    updateUserStatusThunkCreator: (status: string) => void
    saveMainPhotoTC: (photo: File) => void
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
            updateUserStatusThunkCreator,
            saveMainPhotoTC
        }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)