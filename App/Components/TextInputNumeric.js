import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';

const NumericTextInput = ({ onChange }) => {
  const [value, setValue] = useState('1'); // Establece '1' como valor predeterminado

  const handleTextChange = (text) => {
    if (/^\d*$/.test(text)) {
      if (text.length <= 2) {
        if (text.length === 2 && text[0] === '0') {
          setValue(text[1]);
        } else{
          setValue(text);
        }
      }
    }
    onChange(text);
  };
  useEffect(() => {
    onChange(value);
  }, []);

  return (
    <View style={{ flexDirection: 'row', marginTop: 15 }}>
      <Text style={{ top: 8, left: 23, fontSize: 20}}>
        Ingrese las unidades
      </Text>
      <TextInput
        keyboardType="numeric"
        value={value}
        onChangeText={handleTextChange}
        placeholder="1"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#7D7F7D',
          width: 50,
          marginLeft: 120,
        }}
      />
    </View>
  );
};

export default NumericTextInput;
