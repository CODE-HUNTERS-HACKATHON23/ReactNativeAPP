import React, { Component, useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import MenuFlotante from '../Components/MenuFlotante'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons'
import { LinearGradient } from 'expo-linear-gradient';
import CerrarSesion from '../Pantallas/LogIn/CerrarSesion'

const Drawer = createDrawerNavigator();

export default function Principal(props) {

    const gradientColors = ['#18BBEA', '#21409A'];
    const [icon_1] = useState(new Animated.Value(0));

    function goToScreen(routname) {
        props.navigation.navigate(routname)
    }
    function Princi() {
        const [pop, setPop] = useState(false);

        const popIn = () => {
            setPop(true);
            Animated.timing(icon_1, {
                toValue: 110,
                duration: 500,
                useNativeDriver: false,
            }).start();

        };

        const popOut = () => {
            setPop(false);
            Animated.timing(icon_1, {
                toValue: 0,
                duration: 500,
                useNativeDriver: false,
            }).start();

        };
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'center', fontSize: 25, marginLeft: 15, color: '#21409A', marginTop: 10, marginBottom: 15 }}>Visualiza y gestiona tu salud</Text>
                <View style={{ flex: 1, flexDirection: 'columns', justifyContent: 'center', marginTop: 0, marginLeft: 'auto', marginRight: 'auto', top: 120 }}>
                    <TouchableOpacity
                        style={{
                            ...style.boton,
                        }} onPress={() => goToScreen('Mapa')}>
                        <Ionicons name='map-outline' size={30} />
                    </TouchableOpacity>
                    <Text style={style.txt}>Mapas de salud</Text>
                    <TouchableOpacity
                        style={{
                            ...style.boton
                        }} onPress={() => goToScreen('Medicina')}>
                        <Ionicons name='heart-half-outline' color='#000000' size={30} />
                    </TouchableOpacity>
                    <Text style={style.txt}>Gestion de medicamentoss</Text>
                    <TouchableOpacity
                        style={{
                            ...style.boton,
                        }} onPress={() => goToScreen('Citas')}>
                        <Ionicons name='calendar-outline' color='#000000' size={30} />
                    </TouchableOpacity>
                    <Text style={style.txt}>Agenda de citas</Text>
                </View>
                <View style={{ padding: 'auto' }}>
                    <Animated.View style={[style.buttonGradient, { bottom: icon_1, left: 325, paddingTop: 380 }]}>
                        <LinearGradient
                            colors={gradientColors}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            style={style.secundario}
                        >
                            <TouchableOpacity onPress={()=> {props.navigation.navigate('Folder')}}>
                                <Ionicons name='folder' color='#fff' size={25} />
                            </TouchableOpacity>
                        </LinearGradient>
                    </Animated.View>

                    <LinearGradient
                        colors={gradientColors}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={[style.button, { position: 'absolute' }]}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                pop === false ? popIn() : popOut();
                            }}
                        >
                            <Ionicons name='add-outline' color='#fff' size={30} />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>

        )
    }
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                headerTitleAlign: 'center', headerStyle: {
                    height: 130, backgroundColor: '#21409A'
                }, headerTitle: '', headerTintColor: '#fff',
            }
            }>
                <Drawer.Screen name='Principal' component={Princi} />
                <Drawer.Screen name='Cerrar Sesión' component={CerrarSesion} />
            </Drawer.Navigator>

        </NavigationContainer >
    )
}
const style = StyleSheet.create({
    boton: {
        borderRadius: 10,
        borderBlockEndColor: '',
        paddingVertical: 15,
        width: 280,
        height: 160,
        margin: 10,
        elevation: 10,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontSize: 20,
        textAlign: 'center'
    },
    button: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 40,
        right: 40,
        borderRadius: 100 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 13 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        padding: 'auto',
    },
    buttonGradient: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secundario: {
        width: 80,
        height: 80,
        position: 'absolute',
        bottom: 50,
        right: 50,
        borderRadius: 80 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 13 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 8,
        padding: 'auto',
    }
})