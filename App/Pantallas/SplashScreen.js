import React, { Component } from 'react'
import { View } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { imageBackgroundStyle } from '../Estilos/General'
import { StatusBar } from 'expo-status-bar'

export default class LoginScreen extends Component {
    goToScreen(routname) {
        this.props.navigation.replace(routname)
    }
    componentDidMount() {
        setTimeout(() => {
            this.goToScreen('Principal')
        }, 5000, this)
    }
    render() {
        return (
            <View style={[imageBackgroundStyle,{flex: 1, backgroundColor: '#112E53', alignItems:'center'}]}>
                <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' />
                <Animatable.Image
                    animation={'pulse'}
                    easing={'ease-in-out'}
                    iterationCount={'infinite'}
                    style={{
                        width: 200,
                        height: 200,
                        margin: 100,
                    }}
                    source={require('../Recursos/Logo.jpeg')}
                />
            </View>
        )
    }

}