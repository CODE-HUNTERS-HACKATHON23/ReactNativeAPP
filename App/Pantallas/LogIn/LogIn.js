import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image, Alert } from 'react-native'
import React, { Component, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useForm, Controller } from 'react-hook-form';
import { API_URL } from '../../../src/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setCachedData = async (key, data) => {
    await AsyncStorage.setItem(key, data);
};

const validateFormSchema = {
    name: {
        required: 'Por favor ingresa un nombre.',
        min: {
            limit: 7,
            message: limit => `El límite es de ${limit} carácteres.`
        }
    },
    email: {
        required: 'Por favor debe ingresar su correo electrónico',
        isEmail: true,
    }
}
export default function LogIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    async function saveTodosToStorage(ruta) {
        try {
            console.log(ruta)
            await setCachedData('TKA', JSON.stringify(ruta));
            console.log('Tareas almacenadas con éxito.');
        } catch (error) {
            console.error('Error al almacenar las tareas:', error);
        }
    }
    const { values, setFieldValue, errors, handleSubmit } = useForm({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validateFormSchema,
    })
    const onSubmit = async () => {
        const data = await fetch(
            `${API_URL}/auth/login`, {
            method: "POST",
            headers: new Headers({
                "ngrok-skip-browser-warning": "pass",
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                contrasena: password,
                correo: email
            })
        })
        const json = await data.json();

        if (!json || !json.accessToken) {
            Alert.alert("Las credenciales no son validas");
            console.log('Las credenciales de acceso son invalidas')
            return;
        }
        else {
            console.log(json.accessToken)
            saveTodosToStorage(json.accessToken)
            props.navigation.navigate('Principal')
        }
    }
    return (
        <LinearGradient
            colors={['#18BBEA', '#21409A']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
        >
            <View style={style.Container} >
                <ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'left', paddingTop: 30, marginLeft: 15 }}>
                        <Image
                            source={require('../../Recursos/Logo2.jpg')}
                            style={{ width: 60, height: 60, borderRadius: 10, }} />
                        <Text style={style.Text}>IENESTAR NIC</Text>
                    </View>
                    <View style={{ marginLeft: 50, marginRight: 50, marginTop: 8, marginBottom: 8 }} >
                        <TextInput placeholder="Correo Electronico"
                            onChangeText={(value) => setEmail(value)} style={style.TxtInput} />
                    </View>
                    <View style={{ marginLeft: 50, marginRight: 50, marginTop: 8, marginBottom: 8 }} >
                        <TextInput placeholder="Contraseña de usuario"
                            onChangeText={(value) => setPassword(value)}
                            secureTextEntry={true} style={style.TxtInput} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 'auto', marginRight: 'auto' }}>
                        <LinearGradient
                            colors={['#18BBEA', '#21409A']}
                            start={{ x: 0, y: 1 }}
                            end={{ x: 1, y: 0 }}
                            style={style.btnI}
                        >
                            <TouchableOpacity onPress={async () => { onSubmit() }} >
                                <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 8, color: '#fff' }} >Iniciar Sesion</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    <View style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, textAlign: 'center'}}>
                        <TouchableOpacity onPress={() => {props.navigation.navigate('Register')}}>
                            <Text style={{ fontSize: 18 }}>¿No tienes cuenta? <Text style={{ textDecorationLine: 'underline', color: '#E11581' }}>Registrate</Text></Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={{ fontSize: 18 }}>¿Haz olvidado tu contraseña? <Text style={{ textDecorationLine: 'underline', color: '#21409A' }}>Reestablecela</Text></Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    )
}
const style = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
        padding: 'auto',
        marginTop: 300,
        width: '80%',
        height: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 30,
        elevation: 15,
        textAlign: 'left'
    },
    Text: {
        fontSize: 30,
        marginLeft: 10,
        paddingTop: 30,
        color: '#21409A'
    },
    TxtInput: {
        fontSize: 20,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#7D7F7D',
    },
    btnI: {
        width: 310,
        height: 40,
        borderRadius: 10,
        marginTop: 60

    }
})
