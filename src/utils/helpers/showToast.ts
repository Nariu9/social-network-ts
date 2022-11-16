import {toast} from 'react-toastify';

type ToastType = 'success' | 'error'

export const showToast = (type: ToastType, content: string) => {
    if (type === 'success') {
        return toast.success(content, {
            position: 'bottom-left',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    } else if (type === 'error') {
        return toast.error(content, {
            position: 'bottom-left',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    }
}