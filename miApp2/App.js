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

      <Text>Hola mundo RN!</Text>
      <Image source={require("./assets/wave.png")} ></Image>

      <Text>---------------------------------------</Text>
      <Saludo></Saludo>
      <Saludo/>

      <Text>---------------------------------------</Text>
      <Saludos2></Saludos2>
      <Saludos2/>
    
      <Text>---------------------------------------</Text>
      <Perfil></Perfil>

      <Text> </Text>

      <Perfil/>


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
