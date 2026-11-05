/* 1 - Zona de importaciones */
import { StyleSheet, View, Text, FlatList, SectionList} from 'react-native';

const datosFlat = [
    {id: '1', nombre: 'Juan'},
    {id: '2', nombre: 'Maria'},
    {id: '3', nombre: 'Pedro'},
    {id: '4', nombre: 'Emilio'}
];

const datosSection = [
    {
        titulo: 'Frutas',
        data: ['Manzana', 'Platano'],
    },
    {
        titulo: 'Verduras',
        data: ['Zanahoria', 'Lechuga']
    }
];
/* 2 - Zona del main */
export default function FlatListScreen() {
    return (
    <View style={styles.container}> 
        <Text style = {styles.titulo}>Ejemplo FlatList</Text>
        <FlatList
            data = {datosFlat}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <Text style = {styles.item}>{item.nombre}</Text>
            )}
        ></FlatList>

        <SectionList
            sections={datosSection}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
                <Text style = {styles.item}>{item}</Text>
            )}
            renderSectionHeader = {({section}) => (
                <Text style = {styles.encabezado}>{section.titulo}</Text>
            )}
        ></SectionList>
    </View>
    );
}

    /* 3 -  Zona estilos y posicionamiento */
const styles = StyleSheet.create({
    container: {
    flex: 1,               
    paddingTop: 50,        
    paddingHorizontal: 20, 
    backgroundColor: '#C4F3FF', 
    },

    titulo: {
    fontSize: 20,          
    fontWeight: 'bold',    
    marginTop: 20,         
    marginBottom: 10,      
    textAlign: 'center',   
    color: 'purple',
    },

    encabezado: {
    fontSize: 16,          
    fontWeight: 'bold',    
    backgroundColor: 'gold', 
    padding: 5, 
    color: 'white'       
    },

    item: {
    fontSize: 14,       
    padding: 10,           
    borderBottomWidth: 1,  
    borderBottomColor: '#121212', 
    },
});