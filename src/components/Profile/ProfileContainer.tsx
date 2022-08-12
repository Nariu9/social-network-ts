import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfileThunkCreator, ProfileType,} from '../../redux/profile-reducer';
import {ReduxStateType} from '../../redux/redux-store';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        this.props.getUserProfileThunkCreator(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return <Profile profile={this.props.profile} />
    }
}

type mapStateToPropsType = {
    profile: null | ProfileType
    isAuth: boolean
}
type mapDispatchToPropsType = {
    getUserProfileThunkCreator: (userId: string) => void
}
type PropsFromConnectType = mapDispatchToPropsType & mapStateToPropsType

type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & PropsFromConnectType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const WithUrlDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfileThunkCreator})(WithUrlDataContainer)