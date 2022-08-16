import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfileThunkCreator, ProfileType,} from '../../redux/profile-reducer';
import {ReduxStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {RouteComponentProps, withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        this.props.getUserProfileThunkCreator(userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

type mapStateToPropsType = {
    profile: null | ProfileType
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
})

const WithUrlDataContainer = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfileThunkCreator})(WithUrlDataContainer)