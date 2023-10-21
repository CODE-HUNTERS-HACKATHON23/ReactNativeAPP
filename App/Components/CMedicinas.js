import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CMedicinas() {
    return (
        <View style={style.Ventana}>
            <Text style={style.Encabezado}>NombreMedicina</Text>
            <MaterialCommunityIcons name="pill" size={23} color={'#000000'} />
            <MaterialCommunityIcons name="bell" size={23} color={'#000000'} />
        </View>
    )
}

const style = StyleSheet.create({
    Ventana: {
        width: 400, 
        height: 150,
        backgroundColor: '#fff',
        elevation: 9,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        borderRadius: 15
    },
    Encabezado:{
        textAlign: 'center',
        fontSize: 23
    }
})