import React, { Component } from 'react'
import { View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { imageBackgroundStyle } from '../Estilos/General'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'


export default class LoginScreen extends Component {
    goToScreen(routname) {
        this.props.navigation.replace(routname)
    }
    componentDidMount() {
        setTimeout(() => {
            this.getTodosFromStorage()
        }, 5000, this)
    }
    getCachedData = async (key) => {
            const data = await AsyncStorage.getItem(key);
            return data;
    };
    getTodosFromStorage = async () => {
        try {
            const storedTodos = await this.getCachedData('TKA');
            if (storedTodos) {
                const parsedTodos = JSON.parse(storedTodos);
                this.props.navigation.navigate('Principal')
            } else {
                this.props.navigation.navigate('LogIn')
            }
        } catch (error) {
            console.error('Error al recuperar las tareas:', error);
        }
    }

    render() {
        return (
            <LinearGradient
                colors={['#18BBEA', '#21409A']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1 }}
            >
                <View style={[imageBackgroundStyle, { flex: 1, alignItems: 'center', width: '100%', marginTop: 'auto' }]}>
                    <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' />
                    <Animatable.Image
                        animation={'pulse'}
                        easing={'ease-in-out'}
                        iterationCount={'infinite'}
                        style={{
                            width: 300,
                            height: 300,
                            marginTop: 'auto',
                            marginBottom: 'auto'
                        }}
                        source={require('../Recursos/Logo.png')}
                    />
                </View>
            </LinearGradient>
        )
    }

}