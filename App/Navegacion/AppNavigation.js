import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import SplashScreen from '../Pantallas/SplashScreen'
import Principal from '../Pantallas/Principal'
import Medicina from '../Pantallas/Medicina'
import Mapa from '../Pantallas/Mapa'
import Citas from '../Pantallas/Citas'
import Frecuencia from '../Pantallas/Medicina/Frecuencia'
import Nombre_Unidad from '../Pantallas/Medicina/NombreUnidad'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetalleMedicina from '../Pantallas/Medicina/DetelleMedicina'
import Register from '../Pantallas/LogIn/Register'
import { LinearGradient } from 'expo-linear-gradient'
import LogIn from '../Pantallas/LogIn/LogIn'
import Vermas from '../Pantallas/Vermas'
import Folder from '../Pantallas/Folder'
const Stack = createNativeStackNavigator();
const AppNavigation = createStackNavigator({
    Splash: {
        screen: SplashScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Principal: {
        screen: Principal,
        navigationOptions: {
            headerShown: false,
        }
    },
    LogIn: {
        screen: LogIn,
        navigationOptions: {
            headerShown: false,
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerShown: false
        }
    },
    DetalleMedicina: {
        screen: DetalleMedicina,
    },
    Medicina: {
        screen: Medicina,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#113E53',
            },
            headerTintColor: '#fff',
        }
    },
    Mapa: {
        screen: Mapa,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#113E53',
            },
            headerTintColor: '#fff',
        }
    },
    Citas: {
        screen: Citas,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#113E53',
            },
            headerTintColor: '#fff',
        }
    },
    Frecuencia: {
        screen: Frecuencia,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#113E53',
            },
            headerTintColor: '#fff',
        }
    },
    NombreUnidad: {
        screen: Nombre_Unidad,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#113E53',
            },
            headerTintColor: '#fff',
            headerTitle: 'Añadir Medicamento'
        }
    },
    Vermas: {
        screen: Vermas
    },
    Folder:{
        screen: Folder,
    }
})
export default createAppContainer(AppNavigation)
