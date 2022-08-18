import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{ editMode: boolean, updateStatus: string }>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <>
            {!this.state.editMode && <div style={{fontWeight: 'bold'}}>
                <span onDoubleClick={this.activateEditMode}>
                    {this.state.status || '--------'}
                </span>
            </div>}
            {this.state.editMode && <div>
                <input value={this.state.status}
                       onBlur={this.deactivateEditMode}
                       autoFocus
                       onChange={this.onStatusChange}/>
            </div>}
        </>
    }
}