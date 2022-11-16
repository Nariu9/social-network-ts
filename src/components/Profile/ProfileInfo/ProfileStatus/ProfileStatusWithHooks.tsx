import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string,
    isOwner: boolean
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => props.isOwner && setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status.trim())
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && deactivateEditMode()
    }

    return <>
        {!editMode && <div>
            <span onDoubleClick={activateEditMode} style={{wordWrap: 'break-word'}}>
                    <i>{props.status || '--------'}</i>
                </span>
        </div>}
        {editMode && <div>
            <input value={status}
                   onBlur={deactivateEditMode}
                   autoFocus
                   onChange={onStatusChange}
                   onKeyDown={onPressEnter}/>
        </div>}
    </>
}