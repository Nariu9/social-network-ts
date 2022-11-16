import {ResponseType} from '../../api/api';
import {showToast} from '../helpers/showToast';

export const handleServerAppError = <T>(data: ResponseType<T>) => {
    const description = data.messages.length ? data.messages[0] : 'Some error has occurred'
    showToast('error', description)
}

export const handleServerNetworkError = (error: { message: string }) => {
    const description = error.message ? error.message : 'Some error has occurred'
    showToast('error', description)
}