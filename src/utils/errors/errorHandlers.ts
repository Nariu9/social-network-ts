import {ResponseType} from '../../api/api';
import {openNotificationWithIcon} from '../../components/Notification/notifications';

export const handleServerAppError = <T>(data: ResponseType<T>) => {
    const description = data.messages.length ? data.messages[0] : 'Some error has occurred'
    openNotificationWithIcon('error', 'Error!', description)
}

export const handleServerNetworkError = (error: { message: string }) => {
    const description = error.message ? error.message : 'Some error has occurred'
    openNotificationWithIcon('error', 'Error!', description)
}