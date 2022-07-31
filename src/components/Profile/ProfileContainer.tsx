import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {ReduxStateType} from '../../redux/redux-store';


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data)
        });
    }
    render() {
        return <Profile profile = {this.props.profile}/>
    }
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type mapStateToPropsType = {
    profile: null | ProfileType
}
type ProfileContainerPropsType = mapDispatchToPropsType & mapStateToPropsType

const mapStateToProps = (state: ReduxStateType):mapStateToPropsType  => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)