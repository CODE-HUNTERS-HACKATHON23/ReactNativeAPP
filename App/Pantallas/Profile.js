import React, {Component} from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'

export default function Profile(props) {
    return (
        <View style={{flex: 1}}>
            <Text>perfil del usuario</Text>
            <TouchableOpacity style={style.vermas} onPress={()=>{props.navigation.navigate('AppNavigationDrawer')}}>
                <Text style={style.Texto}>Ver mas</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    vermas: {
        width: '50%',
        height: '5%',
        backgroundColor: '#113E53',
        borderRadius: 10,
        marginTop: 30,
        justifyContent: 'center',
        elevation: 5,
    }, 
    Texto: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
  }
  })