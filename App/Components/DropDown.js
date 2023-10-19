import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { SelectCountry } from 'react-native-element-dropdown';

  const local_data = [
    {
      value: '1',
      lable: 'cuchada(s)',
    },
    {
      value: '2',
      lable: 'cápsula(s)',
    },
    {
      value: '3',
      lable: 'gota(s)',
    },
    {
      value: '4',
      lable: 'minilitro(s)',
    },
    {
      value: '5',
      lable: 'unidad(es)',
    },
    {
      value: '6',
      lable: 'gramo(s)',
    },
    {
      value: '7',
      lable: 'inyección(es)',
    },
  ];

  const SelectCountryScreen = _props => {
    const [country, setCountry] = useState('1');

    return (
      <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        inputSearchStyle={styles.inputSearchStyle}
        search
        maxHeight={200}
        value={country}
        data={local_data}
        valueField="value"
        labelField="lable"
        placeholder="Unidad"
        searchPlaceholder="Search..."
        onChange={e => {
          setCountry(e.value);
        }}
      />
    );
  };

  export default SelectCountryScreen;

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: '#7D7F7D',
      borderBottomWidth: 0.5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      marginLeft: 8,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });