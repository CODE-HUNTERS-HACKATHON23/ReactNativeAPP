import { Text, View, Button, Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
    }),
});

export default async function schedulePushNotification(props) {
    const [Nombre, Ubicacion] = props;
    await Notifications.scheduleNotificationAsync({
        content: {
            title: 'Recuerda que tienes una cita',
            body: Ubicacion,
            sound: 'SD_ALERT_35.waw',
            data: { data: 'goes here' },
        },
        trigger: { seconds: 1 },
    });
}

async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync({ projectId: 'your-project-id' })).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    return token;
}