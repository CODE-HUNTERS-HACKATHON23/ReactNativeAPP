import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import MenuFlotante from '../Components/MenuFlotante'
import { NavigationContainer } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Principal(props) {
    function goToScreen(routname) {
        props.navigation.navigate(routname)
    }
    return (            
        <NavigationContainer>
            <View style={{ backgroundColor: '#112E53', marginTop: 0, width: '100%', height: '13%' }} />
            <Text style={{ textAlign: 'left', fontSize: 25, marginLeft: 15, color: '#21409A', marginTop: 15 }}>Visualiza y gestiona tu salud</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 0 }}>
                <TouchableOpacity
                    style={{
                        ...style.boton,
                    }} onPress={() => goToScreen('Mapa')}>
                    <MaterialCommunityIcons name={'google-maps'} size={30} color={"#112E53"} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...style.boton
                    }} onPress={() => goToScreen('Medicina')}>
                    <MaterialCommunityIcons name={'pill'} size={30} color={"#112E53"} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...style.boton,
                    }} onPress={() => goToScreen('Citas')}>
                    <MaterialCommunityIcons name={'calendar'} size={30} color={"#112E53"} />
                </TouchableOpacity>
            </View>
            
            <MenuFlotante />
        </NavigationContainer>

    )
}
const style = StyleSheet.create({
    boton: {
        borderRadius: 10,
        borderBlockEndColor: '',
        paddingVertical: 15,
        width: '28%',
        height: '20%',
        margin: 8,
        elevation: 10,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
})