import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import ProximaCita from '../Components/ProximaCita';
import { LinearGradient } from 'expo-linear-gradient';

const Citas = (props) => {
  const { Hora, Fecha, NombreDoctor, NombreUnidad } = props
  const bol = 'a'
  function mostrar() {
    return (
      <ProximaCita Hora='00:00' Fecha='ff/mm/yy' NombreDoctor='Paco' NombreUnidad='Velez Paiz' />
    )
  }
  useEffect(() => {
    mostrar()
  })
  return (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <ProximaCita Hora='00:00' Fecha='ff/mm/yy' NombreDoctor='Paco' NombreUnidad='Velez Paiz' />
      <LinearGradient
        colors={['#18BBEA', '#21409A']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={style.vermas}>
        <TouchableOpacity onPress={() => { props.navigation.navigate('Vermas') }}>
          <Text style={style.Texto}>Ver mas</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  )
};
export default Citas;


const style = StyleSheet.create({
  vermas: {
    width: '50%',
    height: '5%',
    backgroundColor: '#113E53',
    borderRadius: 10,
    marginTop: 30,
    justifyContent: 'center',
    elevation: 5
  },
  Texto: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  }
})