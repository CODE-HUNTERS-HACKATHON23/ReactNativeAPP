import { DefaultTheme } from "@react-navigation/native";
import { View, TouchableOpacity, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Principal from "./App/Pantallas/Principal";
import LogIn from "./App/Pantallas/LogIn/LogIn";
const cache = new Map();

export const getCachedData = async (key) => {
  if (cache.has(key)) {
    return cache.get(key);
  } else {
    const data = await AsyncStorage.getItem(key);
    cache.set(key, data);
    return data;
  }
};

export const setCachedData = async (key, data) => {
  await AsyncStorage.setItem(key, data);
  cache.set(key, data);
};

export const removeCachedData = (key) => {
  AsyncStorage.removeItem(key);
  cache.delete(key);
};
export default function App() {
  const todos = [
    {
      id: 1,
      title: 'Fullstack course',
      completed: false,
      createdAt: '2022-03-01T14:48:00.000Z',
      updatedAt: '2022-03-01T14:48:00.000Z',
      accessToken: "TFT"
    }
  ];

  async function saveTodosToStorage() {
    try {
      await setCachedData('todos', JSON.stringify(todos));
      console.log('Tareas almacenadas con éxito.');
    } catch (error) {
      console.error('Error al almacenar las tareas:', error);
    }
  }

  async function getTodosFromStorage() {
    try {
      const storedTodos = await getCachedData('todos');
      if (storedTodos) {
        const parsedTodos = JSON.parse(storedTodos);
        console.log('pantallaPrincipal')
      } else {
        console.log('Login')
      }
    } catch (error) {
      console.error('Error al recuperar las tareas:', error);
    }
  }

  async function deleteTodosFromStorage() {
    try {
      removeCachedData('todos');
      console.log('Tareas eliminadas de AsyncStorage.');
    } catch (error) {
      console.error('Error al eliminar las tareas:', error);
    }
  }
  return (
    <View style={{ flex: 1, marginLeft: 'auto', marginRight: 'auto', margin: 20 }}>
      <Text>Hola mundo</Text>
      <TouchableOpacity onPress={async () => { saveTodosToStorage() }} style={{ width: 200, height: 300, backgroundColor: '#7D7F7D' }} />
      <TouchableOpacity onPress={async () => { getTodosFromStorage() }} style={{ width: 200, height: 300, backgroundColor: '#90EE90' }} />
      <TouchableOpacity onPress={async () => { deleteTodosFromStorage() }} style={{ width: 200, height: 300, backgroundColor: '#FF0000' }} />
    </View>

  )
}