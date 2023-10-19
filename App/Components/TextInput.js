import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextInputR = () => {
  const [number, onChangeNumber] = React.useState('');
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder='Nombre medicamento'
        value={text}
      />
    </SafeAreaView>
  );
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