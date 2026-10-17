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

      <Perfil nombre = "Jennyfer" carrera = "Redes" materia = "Movil" cuatri = "4"/>

      <Perfil nombre = "Dulcesita" carrera = "Redes" materia = "Movil" cuatri = "4"/>

      <Perfil nombre = "Karlota" carrera = "Redes" materia = "Movil" cuatri = "4"/>

      <StatusBar style="auto" />
    </View>
  );
}

/* 3 -  Zona estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
