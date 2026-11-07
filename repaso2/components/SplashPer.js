
import { Text, ActivityIndicator,View, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react';

export default function SplashPer(){
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [])
    
    if(showSplash){
        return(
            <View>
                <ActivityIndicator></ActivityIndicator>
                <Text>Bienvenido!</Text>
            </View>
            
        )
    }
}
