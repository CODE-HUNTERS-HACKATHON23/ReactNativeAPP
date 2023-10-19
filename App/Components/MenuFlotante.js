import React, { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, TouchableOpacity, View, Animated, Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Notificacion from './Notificacion'
import ChatPM from '../Pantallas/ChatPM'
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
const FloatingMenu = (props) => {
    const [icon_1] = useState(new Animated.Value(40));
    const [icon_2] = useState(new Animated.Value(40));

    const [pop, setPop] = useState(false);
    const popIn = () => {
        setPop(true);
        Animated.timing(icon_1, {
            toValue: 130,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(icon_2, {
            toValue: 200,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }
    const popOut = () => {
        setPop(false);
        Animated.timing(icon_1, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false,
        }).start();
        Animated.timing(icon_2, {
            toValue: 40,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }
    return (
        <View style={{ flex: 1, padding: 'auto' }} >
            <Animated.View style={[styles.secundario, { bottom: icon_1 }]}>
                <TouchableOpacity onPress={async () => {
                    await Notificacion(Nombre="ELuardo", Ubicacion='Judas');
                }}>
                    <MaterialCommunityIcons name="forum" size={23} color={'#FFF'} />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.secundario, { bottom: icon_2 }]}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="file-document-multiple-outline" size={23} color={"#FFFF"} />
                </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    pop === false ? popIn() : popOut();
                }}>
                <MaterialCommunityIcons name="plus" size={25} color={"#FFFF"} />
            </TouchableOpacity>
        </View>
    )
}
export default FloatingMenu
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        padding: 'auto',
    },
    button: {
        backgroundColor: '#112E53',
        width: 80,
        height: 80,
        position: 'absolute',
        bottom: 40,
        right: 40,
        borderRadius: 80 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 13 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        padding: 'auto',
    },
    secundario: {
        backgroundColor: '#112E53',
        width: 60,
        height: 60,
        position: 'absolute',
        bottom: 50,
        right: 50,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 13 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        padding: 'auto',
    },
    menu: {
        backgroundColor: "F02A4B"
    }
})