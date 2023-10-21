import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CMedicinas(props) {
    const { Nombre, Frecuencia, Hora, Fecha_final } = props
    return (
        <View style={style.Ventana} onPress={() => { props.navigation.navigate('DetalleMedicina') }}>
            <View style={[style.Encabezado, { marginLeft: 'auto', marginRight: 'auto' }]}>

                <Text style={{ fontSize: 20, marginLeft: 20 }} >{Nombre}</Text>
            </View>
            <View style={[style.Encabezado, { marginLeft: 'auto', marginRight: 'auto', flexDirection: 'column', marginTop: 8 }]}>
                <Text style={{ fontSize: 20, marginLeft: 20 }} >{Frecuencia} {Hora}</Text>
            </View>
            <View style={[style.Encabezado, { marginLeft: 'auto', marginRight: 'auto' }]}>
                <Text style={{ fontSize: 20, marginLeft: 20 }} >{Fecha_final}</Text>
            </View>
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
        marginTop: 15,
        marginBottom: 15,
        borderRadius: 15
    },
    Encabezado: {
        width: '90%',
        height: '20%',
        borderRadius: 5,
        marginTop: 8,
        margin: 'auto',
        textAlign: 'center',
        justifyContent: 'left',
        flexDirection: 'row',
    },
})