import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logoutTC} from '../../redux/auth-reducer';
import {RootState} from '../../redux/redux-store';


type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToPropsType = {
    logoutTC: () => void
}
type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logoutTC}/>
    }
}

const mapStateToProps = (state: RootState): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {logoutTC})(HeaderContainer)