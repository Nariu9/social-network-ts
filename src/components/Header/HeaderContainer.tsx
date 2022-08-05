import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import {ReduxStateType} from '../../redux/redux-store';
import {usersAPI} from '../../api/api';

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type mapDispatchToPropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void
}
type HeaderContainerPropsType = mapStateToPropsType & mapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        usersAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                const {id, login, email} = data.data
                this.props.setAuthUserData(id, login, email)
            }
        });
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: ReduxStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)