import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
            setStatus(e.currentTarget.value)
    }

    return <>
        {!editMode && <div style={{fontWeight: 'bold'}}>
                <span onDoubleClick={activateEditMode}>
                    {status || '--------'}
                </span>
        </div>}
        {editMode && <div>
            <input value={status}
                   onBlur={deactivateEditMode}
                   autoFocus
                   onChange={onStatusChange}/>
        </div>}
    </>
}