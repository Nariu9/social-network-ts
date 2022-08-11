import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserThunkCreator, ProfileType,} from '../../redux/profile-reducer';
import {ReduxStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        this.props.getUserThunkCreator(this.props.match.params.userId)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

type mapStateToPropsType = {
    profile: null | ProfileType
}
type mapDispatchToPropsType = {
    getUserThunkCreator: (userId: string) => void
}
type PropsFromConnectType = mapDispatchToPropsType & mapStateToPropsType

type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & PropsFromConnectType

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})

const WithUrlDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserThunkCreator})(WithUrlDataContainer)