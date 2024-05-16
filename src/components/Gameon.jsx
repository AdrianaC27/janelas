import React from "react";
import{View,Text,Image,Button} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';



export default props =>{
    return(
        <View style ={{
            flex:1,  }}>
                
            <Text style={{
                fontSize:18,
                fontFamily:'Arial',
                textAlign:'center'
                
            }}>GAMEON</Text>
            <Image source={require('../Imagens/console.jpg')}/>
            <Button
                title="Iniciar"
                onPress={()=> props.navigation.navigate('Login')}    
            />
           

        </View>
    )
}