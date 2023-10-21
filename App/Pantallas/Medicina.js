import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, TouchableOpacity, ScrollView, Animated } from "react-native";
import CMedicinas from '../Components/CMedicinas';
import React, { Component, useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from '../../src/constants';

const getCachedData = async (key) => {
    const storage = await AsyncStorage.getItem("TKA")
    return storage
};

async function getTodosFromStorage() {
    try {
        const storedTodos = await getCachedData('TKA');
        if (storedTodos) {
            const parsedTodos = JSON.parse(storedTodos);
            return parsedTodos
        }
    } catch (error) {
        console.error('Error al recuperar las tareas:', error);
    }
}
export default class FloatingMenu extends Component {

    state = {
        tratamiento: [],
    }
    async componentDidMount() {
        const token = await getTodosFromStorage()

        const fetchData = await fetch(
            `${API_URL}/paciente/tratamientos`, {
            method: "GET",
            headers: new Headers({
                "ngrok-skip-browser-warning": "pass",
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            }),

        })

        const json = await fetchData.json();
        this.setState({
            tratamiento: json
        })

    }
    render() {
        return (
            <View style={{ flex: 1, padding: 'auto' }} >
                <ScrollView>
                    {
                        this.state.tratamiento.map((v, i) => (
                            <CMedicinas Nombre={v.nombre} Frecuencia={v.frecuencia} Hora='08:00 pm' Fecha_inicio={v.fechaInicio} Fecha_final={v.fechaFin} key={i} />        
                        ))
                    }
                </ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.navigation.navigate('NombreUnidad')
                    }}>
                    <Ionicons name='add-outline' color='#fff' size={30} />
                </TouchableOpacity>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 'auto',
    },
    button: {
        backgroundColor: '#112E53',
        width: 80,
        height: 80,
        position: 'absolute',
        bottom: 40,
        right: 40,
        borderRadius: 80 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 13 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        padding: 'auto',
    },
    secundario: {
        backgroundColor: '#112E53',
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 50,
        right: 50,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 13 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        padding: 'auto',
    },
    menu: {
        backgroundColor: "F02A4B"
    }
})