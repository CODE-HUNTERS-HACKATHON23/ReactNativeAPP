import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { View, Text } from 'react-native';
import { Controller, useForm } from 'react-hook-form';

const TextInputR = (props, { onTextChange }) => {
    const { Encabezado, require } = props
    const { handleSubmit, control, reset, watch, formState: { errors } } = useForm();
    const handleTextChange = (value) => {
        onChangeText(value);
        onTextChange(value);
    };
    return (
        <View style={{ alignItems: 'center' }}>
            <Controller
                name="Cedula"
                control={control}
                defaultValue=""
                rules={{ required: 'Este campo es requerido' }}
                render={({ field }) => <TextInput {...field} style={[styles.input, {
                    borderBottomWidth: 1,
                    borderBottomColor: '#7D7F7D',
                }]}
                    placeholder={Encabezado}
                    value={text}
                    onTextChange={handleTextChange} />}
            />
            {
                errors.Cedula && (
                    <Text style={{ color: 'red' }}>{Requerido} es requerido</Text>
                )
            }
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 350,
        margin: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#7D7F7D',
        padding: 10,

    },
});

export default TextInputR;