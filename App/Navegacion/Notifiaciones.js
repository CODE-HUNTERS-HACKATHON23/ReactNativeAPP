import PushNotification from 'react-native-push-notification';

// Función para programar una notificación en una hora específica
const scheduleNotification = (hour, minute) => {
  const now = new Date();
  const notificationDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hour,
    minute,
    0
  );

  PushNotification.localNotificationSchedule({
    message: 'Es hora de recibir una notificación',
    date: notificationDate,
  });
};

// Llama a la función para programar la notificación a las 10:00 AM
scheduleNotification(10, 0);
