import React from 'react';
import { View, Text, Button } from 'react-native';

const PantallaCombinada = ({ navigation }) => {
  return (
    <View>
      {/* Contenido de la Pantalla 1 */}
      <View style={{ backgroundColor: 'lightblue', padding: 20 }}>
        <Text>Contenido de la Pantalla 1</Text>
        <Button
          title="Ir a Pantalla 2"
          onPress={() => navigation.navigate('Pantalla2')}
        />
      </View>

      {/* Contenido de la Pantalla 2 */}
      <View style={{ backgroundColor: 'lightgreen', padding: 20 }}>
        <Text>Contenido de la Pantalla 2</Text>
      </View>
    </View>
  );
};

export default PantallaCombinada;