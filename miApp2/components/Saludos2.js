
import { Text, Image, Button, View } from 'react-native';

export const Saludos2 = () =>{
    return(
        <View>
            <Text>Hola react native: soy un componente propio. Compuesto</Text>
            <Image source={require('../assets/wave.png')}></Image>
            <Button title='Presiona para saludar'></Button>
        </View>
        
    )
}

