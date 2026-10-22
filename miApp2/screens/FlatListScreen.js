/* 1 - Zona de importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';

/* 2 - Zona del main */
export default function FlatListScreen() {
    return (
    <View style={styles.container}> 
        
        <Text> FlatList & SectionList: Edgar Omar Vera Escobar </Text>
        
        <StatusBar style="auto" />
        </View>
    );
    }

    /* 3 -  Zona estilos y posicionamiento */
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});