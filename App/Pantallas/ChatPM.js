import {Text, View} from 'react-native'
import React, {Component} from 'react'

export default function ChatPM(props){
    return(
        <View style={{flex: 1}}>
            <FloatingMenu/>
            <Text>
                Chat de medico a paciente
            </Text>
        </View>
    )
}
