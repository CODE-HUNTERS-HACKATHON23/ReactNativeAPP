import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import AppNavigationStack from './AppNavigationStack'

const Drawer = createDrawerNavigator();

export default function AppNavigationDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="AppNavigationStack" component={AppNavigationStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}