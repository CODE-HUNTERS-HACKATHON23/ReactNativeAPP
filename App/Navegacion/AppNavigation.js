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
        }
    }
})
export default createAppContainer(AppNavigation)
/*
function MyStack() {
    return (
      <Stack.Navigator>
      <Stack.Screen name='Citas' component={Citas} options={{
          headerStyle:{
              backgroundColor: '#113E53', 
            
        },
        headerTintColor: '#fff'
    }}/>
      </Stack.Navigator>
      );
  
  }
  export default function AppNavigation() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
} 
*/