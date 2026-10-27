
/* 1 - Zona de importaciones */
import { StatusBar, StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native'; 
//import { SafeAreaView } from 'react-native-safe-area-context';

/* 2 - Zona del main */
export default function SafeScreen() {
    return (
        <SafeAreaView style = {styles.safeArea}>
            <ScrollView contentContainerStyle = {styles.scrollContent}>

                <Text style = {styles.title}> PRACTICA EN EQUIPO </Text>
                <Text style = {styles.subtitle}> Desliza hacia abajo para ver mas </Text>

                {[...Array(15)].map((_, index) => (
                    <View key = {index} style = {styles.box}>
                        <Text> Registro de prueba {index + 1} </Text>
                    </View>
                ))};
                <StatusBar style = "auto "/>
            </ScrollView>
        </SafeAreaView>
        
        
    );
}

    /* 3 -  Zona estilos y posicionamiento */
const styles = StyleSheet.create({
    safeArea:{
        flex: 1, // Obligatorio
        backgroundColor: '#00BFFF',
    },
    scrollContent:{
        padding: 20,
        alignItems: 'center'
    },
    title:{
        fontSize: 24,
        fontWeigth:'bold',
        marginTop:10
    },
    subtitle:{
        fontSize: 16,
        color: '#666',
        marginBottom: 20
    },
    box:{
        backgroundColor: 'white',
        width: '90%',
        padding: 30,
        marginVertical: 10,
        borderRadius: 8,
        elevation: 3
    }

});
