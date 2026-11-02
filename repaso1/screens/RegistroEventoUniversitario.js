import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { TextInput, Text, StyleSheet, SafeAreaView, Pressable, Alert } from 'react-native'
import SwitchPregunta from '../components/SwitchPregunta'

export default function RegistroEventoUniversitario(){

    const [ nombre, setNombre ] = useState('')
    const [ carrera, setCarrera ] = useState('')
    const [ semestre, setSemestre ] = useState('')

    const [ taller, setTaller ] = useState(false)
    const [ constancia, setConstancia ] = useState(false)
    const [ actividad, setActividad ] = useState(false)
    
    const validarRegsitro = () => {
        if(!nombre.trim() || !carrera.trim() || !semestre.trim() ){
            Alert.alert('Campos incompletos', 'Debes llenar todos los campos.');
            return;
        }
        if (isNaN(semestre)){
            Alert.alert('Error', 'El semestre debe ser un numero');
            return;
        }

        Alert.alert('Registro enviado', `Nombre: ${nombre} \nCarrera: ${carrera} \nSemestre ${semestre} \n\nTaller: ${taller ? 'Si' : 'No'} \nConstancia: ${constancia ? 'Si' : 'No'} \nDeportes: ${actividad ? 'Si': 'No'}` );
    }

    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.titulo}>REGISTRO DE EVENTO UNIVERSITARIO</Text>

            <TextInput
                style = {styles.input}
                placeholder='Nombre'
                value= {nombre}
                onChangeText={setNombre}
                placeholderTextColor={'#ad5562'}
            />
            <TextInput
                style = {styles.input}
                placeholder='Carrera'
                value= {carrera}
                onChangeText={setCarrera}
                placeholderTextColor={'#ad5562'}
            />
            <TextInput
                style = {styles.input}
                placeholder='Semestre'
                value= {semestre}
                onChangeText={setSemestre}
                placeholderTextColor={'#ad5562'}
            />

            <Text style ={styles.subtitulo}>OPCIONES</Text>
            
            <SwitchPregunta 
                pregunta={'¿Asistirá al taller?'}
                seleccion = {taller}
                cambiarSeleccion={setTaller}
            />

            <SwitchPregunta
                pregunta={'¿Requiere constancia?'}
                seleccion = {constancia}
                cambiarSeleccion={setConstancia}
            />

            <SwitchPregunta
                pregunta={'¿Participará en actividades deportivas?'}
                seleccion = {actividad}
                cambiarSeleccion={setActividad}
            />

            <Pressable style={styles.boton} onPress={validarRegsitro}>
                <Text style = {styles.texto}>Enviar Regsitro</Text>
            </Pressable>
            <StatusBar style="auto" />
        </SafeAreaView>
        
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        borderColor: '#ad5562',
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        
    },
    titulo:{
        margin: 20,
        fontWeight: 700,
        fontSize: 20,
        color: '#ad5562'
    },
    subtitulo:{
        marginTop: 25,
        fontWeight: 700,
        fontSize: 17,
        marginBottom: 10,
        color: '#ad5562',
    },
    boton:{
        marginTop: 25,
        borderWidth: 1,
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        borderColor: '#ad5562',
        backgroundColor:'#ad55623c'
    },
    texto: {
        color: '#ad5562',
        fontWeight: 700,
    }
});
