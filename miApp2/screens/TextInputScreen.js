/* 1 - Zona de importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, SafeAreaView, Switch} from 'react-native';
import { useState } from 'react';

/* 2 - Zona del main */
export default function TextInputScreen() {
    const [nombre, setNombre] = useState('')
    const [carrera, setCarrera] = useState('')
    const [semestre, setSemestre] = useState('')

    return(
        <SafeAreaView>
            <Text>REGISTRO</Text>
            <TextInput
                style={styles.input}
                onChangeText = {setNombre}
                placeholder = {"Nombre"}
                value = {nombre}
            />

            <TextInput
                style={styles.input}
                onChangeText = {setCarrera}
                placeholder = {"Carrera"}
                value = {carrera}
            />

            <TextInput
                style={styles.input}
                onChangeText = {setSemestre}
                placeholder = {"Semestre"}
                value = {semestre}
            />
            <Text>¿Asistirá al taller?</Text>
            <Switch/>
            <br></br>
            <Text>¿Requiere constancia?</Text>
            <Switch/>
            <br></br>
            <Text>¿Participará en actividades deportivas?</Text>
            <Switch/>
        </SafeAreaView>
        
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10
    }
});