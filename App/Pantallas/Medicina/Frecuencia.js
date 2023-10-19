
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React, { Component, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RadioForm from 'react-native-simple-radio-button';

export default function RadioButton(props) {
    const [value, setValue] = useState(0);
    const items = [
        { label: 'Cuando sea necesario', value: 0 },
        { label: 'Una vez al dia', value: 1 },
        { label: 'Dos veces al dia', value: 2 },
    ]
    return (
        <View style={{ flex: 1, padding: 30, alignItems: 'center' }}>
            <Text style={{ fontSize: 28, textAlign: 'center', marginTop:150}}>¿Con que frecuencia toma su medicamento?</Text>
            <View style={{marginTop: 50, flex: 1}}>

                <RadioForm radio_props={items}
                    initial={value} onPress={(value) => setValue
                    } labelStyle={{ fontSize: 20}} />
            </View>
            <TouchableOpacity
                style={{
                    ...style.boton,
                    backgroundColor: '#FFF',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onPress={() => props.navigation.navigate('Medicina')} >
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