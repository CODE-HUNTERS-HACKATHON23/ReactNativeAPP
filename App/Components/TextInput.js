import React, {useState}from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
const TextInputR = ({onTextChange }) => {

  const handleTextChange = (value) => {
    onTextChange(value);
  };
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder='Nombre medicamento'
        onChangeText={handleTextChange}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 350,
    margin: 12,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7D7F7D',
    padding: 10,
  },
});

export default TextInputR;