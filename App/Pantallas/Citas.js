import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProximaCita from '../Components/ProximaCita';
const Citas = (props) => {
  const { Hora, Fecha, NombreDoctor, NombreUnidad } = props
  return (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <ProximaCita Hora='00:00' Fecha='ff/mm/yy' NombreDoctor='Paco' NombreUnidad='Velez Paiz' />
      <TouchableOpacity style={style.vermas}>
        <Text style={style.Texto}>Ver mas</Text>
      </TouchableOpacity>
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