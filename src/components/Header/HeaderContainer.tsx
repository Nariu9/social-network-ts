import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthDataThunkCreator} from '../../redux/auth-reducer';
import {ReduxStateType} from '../../redux/redux-store';


type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToPropsType = {
    getAuthDataThunkCreator: ()=>void
}
type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
       this.props.getAuthDataThunkCreator()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthDataThunkCreator})(HeaderContainer)