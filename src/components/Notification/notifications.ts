import {notification} from 'antd';

type NotificationType = 'success' | 'error';

export const openNotificationWithIcon = (type: NotificationType, message: string, description: string) => {
    notification[type]({
        message,
        description,
        placement: 'bottomLeft'
    });
};