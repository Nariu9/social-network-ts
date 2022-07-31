import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {ReduxStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2'
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        });
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

type mapStateToPropsType = {
    profile: null | ProfileType
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
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

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainer)