import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Principal from '../Pantallas/Principal'
const Stack = createNativeStackNavigator();
export default function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Principal' component={Principal} />
        </Stack.Navigator>
    );

}
