
import { Text, ActivityIndicator, View, Image, StyleSheet, TextInput, Pressable, Alert, FlatList } from 'react-native';
import { useState, useEffect} from 'react';

export default function RegistroLibrosLeidos(){
    const [showSplash, setShowSplash] = useState(true);

    const[titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');

    const [carga, setCarga] = useState(false);

    const [libros, setLibros] = useState([]);

    const validarInput = () =>{
        if(!titulo.trim() || !autor.trim() || !genero.trim()){
            Alert.alert('Campos incompletos', 'Todos los campos son obligatorios');
            return;
        }
        if(!isNaN(genero)){
            Alert.alert('Error', 'El genero no puede ser un numero');
            return;
        }

        setCarga(true);

                

        

        setTimeout(() => {
            setCarga(false)

            setLibros((librosAnt) =>{
                const nuevoLibro ={
                    id: (librosAnt.length +1).toString(),
                    titulo: titulo,
                    autor: autor,
                    genero: genero,
                }
                return [...librosAnt, nuevoLibro]
            })
            Alert.alert('Alert', 'Libro guardado correctamente');
            setTitulo('');
            setAutor('');
            setGenero('');
        }, 4000);
            
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [])
    
    if(showSplash){
        return(
            <View style = {styles.splashContainer}>
                <Image
                    source={require('../assets/stellec.jpg')}
                    style = {styles.imgSplash}
                ></Image>
                <ActivityIndicator
                    size= 'small' color = "#000000" style = {{marginTop: 20}}
                ></ActivityIndicator>
                <Text>Repaso 2...</Text>
            </View>
            
        )
    }
    return(
        <View style = {styles.container}>
            <Image
                source={require('../assets/stell.jpg')}
                style= {styles.background}
                resizeMode='cover'
            ></Image>
            <View style= {styles.inputContainer}>
                <Text style ={styles.titulo}>CATALOGO DE LIBROS</Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={setTitulo}
                    value={titulo}
                    placeholder='Titulo'
                ></TextInput>

                <TextInput
                    style = {styles.input}
                    onChangeText={setAutor}
                    value={autor}
                    placeholder='Autor'
                ></TextInput>

                <TextInput
                    style = {styles.input}
                    onChangeText={setGenero}
                    value={genero}
                    placeholder='Genero'
                ></TextInput>

                <Pressable 
                    style = {styles.boton}
                    onPress={validarInput}
                    disabled = {carga}
                >
                    {carga ? (
                        <View style = {styles.cargaEstilo}>
                            <ActivityIndicator
                                size={'small'} color= '#fff'
                            />
                            <Text>Guardando...</Text>
                        </View>
                    ):(
                        <Text style = {styles.texto}>Agregar Libro</Text>
                    )}
                    
                </Pressable>
                </View>

                <View style = {styles.libros}>
                    <Text>Total de libros: {libros.length} </Text>
                        
                </View>
                <View style ={styles.listaCont}>
                    <FlatList
                        data = {libros}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <View style ={styles.libro}>
                                <Text>{item.titulo}</Text>
                                <Text>Autor: {item.autor}</Text>
                                <Text>Genero: {item.genero}</Text>
                            </View>
                        )}
                    ></FlatList>
                </View>
                
        </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right:0,
        width: '100%',
        height: '100%',
    },
    inputContainer:{
        backgroundColor: '#ffffffb0',
        padding: 10,
        width: '90%',
        borderRadius: 20,
        borderWidth: 1,
        paddingBottom: 30,
        margin: 2,
        
    },
    input: {
        borderWidth: 1,
        alignSelf: 'center',
        width: '90%',
        padding: 5,
        marginTop: 10,
        borderRadius: 20,
        paddingLeft: 15,
    },
    titulo:{
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
    },
    boton:{
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#b99797',
        padding: 7,
        width: '50%',
        alignSelf:'center',
        borderRadius: 20,
        borderWidth: 1,
    }, 
    texto:{
        fontWeight: 'bold',
    },
    imgSplash:{
        width: '50%',
        resizeMode: 'contain',
        height: '50%',
        borderRadius: 20,
        overflow: 'hidden',
    },
    splashContainer:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems:'center',
    },
    libros:{
        backgroundColor: '#ffffffb0',
        borderWidth: 1,
        alignSelf: 'center',
        width: '90%',
        padding: 5,
        marginTop: 10,
        borderRadius: 20,
        paddingLeft: 15,
    },
    cargaEstilo:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    libro:{
        backgroundColor: '#b99797',
        padding: 10,
        borderRadius: 15,
        marginBottom: 10,
        borderWidth:1,
    },
    listaCont:{
        backgroundColor: '#ffffffb0',
        padding: 10,
        borderRadius: 20,
        width: '90%',
        borderWidth:1,
    }
});