import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import Ionicons from '@expo/vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
export default function Folder(props) {
    const gradientColors = ['#18BBEA', '#21409A']
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={style.container}
            >
                <TouchableOpacity onPress={() => { props.navigation.navigate('Register') }} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                    <Fontisto name="injection-syringe" size={40} color="white" />
                    <Text style={{fontSize: 30, color: 'white'}}>Tarjeta de vacunacion</Text>
                </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
                colors={['#E11581', '#21409A']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={style.container}
            >
                <TouchableOpacity onPress={() => { props.navigation.navigate('Register') }} style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1}}>
                <MaterialCommunityIcons name="file-document" size={40} color="white" />
                <Text style={{fontSize: 30, color: 'white'}}>Historial clinico</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        elevation: 8,
        flex: 1,
    }

})