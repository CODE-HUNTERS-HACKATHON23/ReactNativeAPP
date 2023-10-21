import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SelectCountry } from 'react-native-element-dropdown';

const local_data = [
  {
    value: '1',
    label: 'cuchara(s)',
  },
  {
    value: '2',
    label: 'cápsula(s)',
  },
  {
    value: '3',
    label: 'gota(s)',
  },
  {
    value: '4',
    label: 'mililitro(s)',
  },
  {
    value: '5',
    label: 'unidad(es)',
  },
  {
    value: '6',
    label: 'gramo(s)',
  },
  {
    value: '7',
    label: 'inyección(es)',
  },
];

const SelectCountryScreen = ({ onChangeT }) => {
  const [country, setCountry] = useState('1');

  const handleCountryChange = (selectedValue) => {
    setCountry(selectedValue);
    onChangeT(selectedValue);
  };

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
      labelField="label"
      placeholder="Unidad"
      searchPlaceholder="Search..."
      onChange={handleCountryChange}
    />
  );
};

export default SelectCountryScreen;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    width: 350,
    borderBottomColor: '#7D7F7D',
    borderBottomWidth: 0.5,
    fontSize: 20
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
