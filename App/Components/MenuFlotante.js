import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Animated, Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";

const Stack = createNativeStackNavigator();

const FloatingMenu = (props) => {
    const [icon_1] = useState(new Animated.Value(0));

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

    const gradientColors = ['#18BBEA', '#21409A'];

    return (
        <View style={{ flex: 1, padding: 'auto'}}>
            <Animated.View style={[styles.buttonGradient, { bottom: icon_1, left: 325, paddingTop: 380}]}>
                <LinearGradient
                    colors={gradientColors}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.secundario}
                >
                    <TouchableOpacity onPress={async () => {
                        await Notificacion(Nombre = "ELuardo", Ubicacion = 'Judas');
                    }}>
                        <Ionicons name='folder' color='#fff' size={25} />
                    </TouchableOpacity>
                </LinearGradient>
            </Animated.View>

            <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={[styles.button, {position: 'absolute'}]}
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
    );
};

export default FloatingMenu;

const styles = StyleSheet.create({
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
});
