import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default  function Botones(props){
    const { tipologo, Ruta } = props
    return (
        <TouchableOpacity
            style={{
                ...style.boton,
                backgroundColor: '#FFF',
                alignItems: 'center',
                justifyContent: 'center'
            }} onPress={()=> goToScreen('Citas')} >
            <MaterialCommunityIcons name={tipologo} size={30} color={"#112E53"} />
        </TouchableOpacity >
    )
    function goToScreen(routname)
    {
        props.navigation.navigate(routname)
    }
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
    },
})