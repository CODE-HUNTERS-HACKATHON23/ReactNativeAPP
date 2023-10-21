import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProximaCita = (props) => {
    const { Hora, Fecha, NombreDoctor, NombreUnidad } = props
    return (
        <TouchableOpacity style={[style.General]} >
            <View style={[style.Encabezado, { marginLeft: 'auto', marginRight: 'auto' }]}>
                <Text style={style.Texto} >Proxima cita</Text>
            </View>
            <View style={{ marginBottom: '30%', backgroundColor: '#FF', marginTop: 20 }}>
                <View style={{ flexDirection: 'row', margin: 'auto' }}>
                    <Text style={[style.TextoP, { marginLeft: 10 }]}>{Hora}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={[style.TextoP, { marginLeft: 10 }]}>{Fecha}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={[style.TextoP, { marginLeft: 10 }]}>{NombreDoctor}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={[style.TextoP, { marginLeft: 10 }]}>{NombreUnidad}</Text>
                </View>
            </View>
        </TouchableOpacity>

    )
};
export default ProximaCita;

const style = StyleSheet.create({
    General: {
        height: '30%',
        width: '80%',
        backgroundColor: '#fff',
        alignItems: 'left',
        marginTop: '10%',
        borderRadius: 15,
        elevation: 18,
    },
    Encabezado: {
        backgroundColor: '#1888EA',
        width: '90%',
        height: '20%',
        borderRadius: 5,
        marginTop: 8,
        margin: 'auto',
        textAlign: 'center',
        justifyContent: 'center'
    },
    Texto: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
    TextoP: {
        color: '#7D7F7D',
        textAlign: 'center',
        fontSize: 20
    },
    vermas: {
        width: '25%',
        height: '5%',
        backgroundColor: '#113E53',
        borderRadius: 10,
        marginTop: 760,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 30,
        justifyContent: 'center',
        elevation: 5
    }
})