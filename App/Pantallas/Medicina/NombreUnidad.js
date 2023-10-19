
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React, { Component, useState } from 'react'
import TextInputR from "../../Components/TextInput";
import DropDown from '../../Components/DropDown'

export default function Nombre_Unidad(props) {

    return (
        <View style={{ flex: 1, padding: 30, alignItems: 'center' }}>
            <Text style={{ fontSize: 28, textAlign: 'center', marginTop: 150 }}>¿Cual es la presentacion de este medicamento?</Text>
            <View style={{ marginTop: 50, flex: 1 }}>
                <TextInputR />
                <DropDown />
            </View>
            <TouchableOpacity
                style={{
                    ...style.boton,
                    backgroundColor: '#FFF',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onPress={() => props.navigation.navigate('Frecuencia')} >
                <Text>Siguiente</Text>
            </TouchableOpacity >

        </View>
    )
}
const style = StyleSheet.create({
    boton: {
        borderRadius: 10,
        paddingVertical: 15,
        width: '78%',
        height: '10%',
        margin: 8,
        elevation: 10,
    },
})