
import { useState } from "react";
import { Switch, Text, View, StyleSheet } from "react-native";

export default function SwitchPregunta({pregunta, seleccion, cambiarSeleccion}){
    return(
        <View style = {styles.container}>
            <Text style= {styles.texto}>{pregunta}</Text>
            <Switch 
                value = {seleccion}
                onValueChange={cambiarSeleccion}
                thumbColor={seleccion ? '#ad5562': '#836166'}
                trackColor={{false: '#cebdc0', true: '#cebdc0'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    texto:{
        color:'#ad5562',
    }
});
