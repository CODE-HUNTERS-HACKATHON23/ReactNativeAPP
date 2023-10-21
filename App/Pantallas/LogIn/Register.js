import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import Ionicons from '@expo/vector-icons/Ionicons'
export default function Register() {
  const { handleSubmit, control, reset, watch, formState: { errors } } = useForm();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [nombreMadre, setNombreMadre] = useState('');
  const [nombrePädre, setNombrePadre] = useState('');
  const [numeroInss, setNumeroInss] = useState('');
  const [profesion, setProfesion] = useState('');
  const [sexo, setSexo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipoSangre, setTipoSangre] = useState('');

  const handleTextChange = (value) => {
    setApellido(value)
  };
  const handleTextnameChange = (value) => {
    setNombre(value)
  };
  const radioButtonsData = [
    {
      id: '1',
      label: 'Male',
      value: 'option1',
      color: 'red',
      selected: true,
    },
    {
      id: '2',
      label: 'Female',
      value: 'option2',
      color: 'red',
      selected: false,
    },
  ];
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = radioButtonsArray => {
    console.log(radioButtonsArray);
    setRadioButtons(radioButtonsArray);
  };
  return (
    <LinearGradient
      colors={['#E11581', '#21409A']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >
      <View style={[Styles.Container, { paddingTop: 30 }]}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name='chevron-back-outline' color='#000000' size={30} />
          <Text style={{ fontSize: 30, marginLeft: 50, color: '#21409A', marginLeft: 20 }}>Registro</Text>
        </View>
        <Text style={{ fontSize: 20, marginLeft: 50, color: '#E11581' }}>Paso 1 de 2</Text>
        <ScrollView>
          <View>
            <TextInput
              placeholder='Nombre'
              value={nombre}
              onTextChange={handleTextnameChange}
            />
          </View>
          <View>
            <TextInput
              placeholder='Apellido'
              value={apellido}
              onTextChange={handleTextChange}
            />
          </View>
          <View >
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              layout="row"
            />
          </View>
        </ScrollView>
      </View>
    </LinearGradient >
  )
}

const Styles = StyleSheet.create({
  Container: {
    height: '90%',
    width: 450,
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 7,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  Txt: {
    fontSize: 20,
    color: '#21409A'
  }
})