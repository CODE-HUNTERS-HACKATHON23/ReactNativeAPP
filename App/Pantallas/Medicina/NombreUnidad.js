
import { StyleSheet, TouchableOpacity, View, Text, ScrollView } from "react-native";
import React, { Component, useState } from 'react'
import TextInputR from "../../Components/TextInput";
import DropDown from '../../Components/DropDown'
import TextInputNumeric from '../../Components/TextInputNumeric'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RadioForm from 'react-native-simple-radio-button';
import { API_URL } from '../../../src/constants';
import { LinearGradient } from "expo-linear-gradient";
export default function Nombre_Unidad(props) {
    const [value, setValue] = useState(0);
    const items = [
        { label: 'Cuando sea necesario', value: 0 },
        { label: 'Una vez al dia', value: 1 },
        { label: 'Dos veces al dia', value: 2 },]
    const [textInputValue, setTextInputValue] = useState('');
    const [Unidad, setUnidad] = useState('');
    const [Dosis, setDosis] = useState('');

    const handleTextChange = (text) => {
        setTextInputValue(text);
    };
    const handleDosis = (text) => {
        setDosis(text);
    };
    const handleCountryChange = (selectedCountry) => {
        setUnidad(selectedCountry.label);
    };

    const submit = async () => {
        const token = await AsyncStorage.getItem("TKA")
        console.log("token", JSON.parse(token))
        const fetchData = await fetch(
            `${API_URL}/paciente/tratamientos`, {
            method: "POST",
            headers: new Headers({
                "ngrok-skip-browser-warning": "pass",
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${JSON.parse(token)}`
            }),
            body: JSON.stringify({
                dosis: Dosis,
                fechaInicio: new Date().toISOString(),
                fechaFin: new Date().toISOString(),
                unidadTratamiento: Unidad,
                nombre: textInputValue,
                frecuencia: items.find(v => v.value == value).label
            })
        })

        const data = await fetchData.json();

        props.navigation.replace("Medicina", null, null, Math.random().toString())
    }
    return (
        <LinearGradient
            colors={['#18BBEA', '#21409A']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1, alignItems: 'center' }}
        >
            <View style={{ elevation: 9, width: 380, height: 730, top: 30, marginBottom: 15, backgroundColor: '#fff', borderRadius: 15 }}>
                <ScrollView style={{ flex: 1, padding: 30, }}>
                    <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 20 }}>¿Cual es la presentacion de este medicamento?</Text>
                    <View style={{ marginTop: 50 }}>
                        <TextInputR onTextChange={(t) => handleTextChange(t)} value={textInputValue} />
                        <DropDown onChangeT={handleCountryChange} />
                        <TextInputNumeric onChange={handleDosis} />
                    </View>
                    <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 20 }}>¿Con que frecuencia toma su medicamento?</Text>
                    <View style={{ marginTop: 50, flex: 1 }}>
                        <RadioForm radio_props={items}
                            initial={value} onPress={(value) => setValue
                            } labelStyle={{ fontSize: 20 }} />
                    </View>
                    <LinearGradient
                        colors={['#18BBEA', '#21409A']}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={style.boton}
                    >
                        <TouchableOpacity
                            style={{
                                
                            }} onPress={() => submit()} >
                            <Text style={{color: '#fff', fontSize: 23}}>Crear</Text>
                        </TouchableOpacity >
                    </LinearGradient>
                </ScrollView>
            </View>
        </LinearGradient>

    )
}
const style = StyleSheet.create({
    boton: {
        marginTop: '10%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
        paddingVertical: 15,
        width: '78%',
        height: 50,
        margin: 8,
        elevation: 7,
        alignItems: 'center'
        
    },
})