/* 1 - Zona de importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludos2 } from './components/Saludos2';
import { Perfil } from './components/Perfil';

/* 2 - Zona del main */
export default function App() {
  return (
    <View style={styles.container}> 

      <Perfil style = {styles.tarjeta1} nombre = "Jennyfer" carrera = "Redes" materia = "Movil" cuatri = "4"/>

      <Perfil style = {styles.tarjeta2} nombre = "Dulcesita" carrera = "Redes" materia = "Movil" cuatri = "4"/>

      <Perfil style = {styles.tarjeta3} nombre = "Karlota" carrera = "Redes" materia = "Movil" cuatri = "4"/>

      <StatusBar style="auto" />
    </View>
  );
}

/* 3 -  Zona estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tarjeta1: {backgroundColor: 'pink'},
  tarjeta2: {backgroundColor: 'red'},
  tarjeta3: {backgroundColor: 'yellow'},
});
