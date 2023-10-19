import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextInputNumeric = () => {
  const [number, onChangeNumber] = React.useState('1');
  const [text, onChangeText] = React.useState('1');
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        keyboardType='Numeric'
        placeholder='Nombre medicamento'
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#7D7F7D',
    padding: 10,
    marginLeft: 'au'
  },
});

export default TextInputNumeric;