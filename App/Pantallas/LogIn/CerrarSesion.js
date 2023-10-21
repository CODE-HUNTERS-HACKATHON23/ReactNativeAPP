import { DefaultTheme } from "@react-navigation/native";
import { View, TouchableOpacity, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from "react";

export const removeCachedData = (key) => {
    AsyncStorage.removeItem(key);
};

export default function CerrarSesion(props) {
    useEffect(() => {
        deleteTodosFromStorage()
    })
    async function deleteTodosFromStorage() {
        try {
            removeCachedData('TKA');
            console.log('Tareas eliminadas de AsyncStorage.');
        } catch (error) {
            console.error('Error al eliminar las tareas:', error);
        }
    }
}