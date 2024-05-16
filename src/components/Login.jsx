import React from "react";
import{View,Text,Image, TextInput, Button,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
  
    

export default props =>{
    const [text, onChangeText] = React.useState('Useless Text');

     return(
        <View >
                
            <Image source={require('../Imagens/tela2.jpg')}/>

            
            
           
            <Icon name="at" size={20}color="grey"/>
            <TextInput
                style = {style.input}   
                onChangeText = {onChangeText}
                value={text}                
                
                placeholder="E-mail"
                maxLength={50}/>
                

        
         <Icon name="lock-closed" size={20}color="grey"/>
             
             <TextInput
                style = {style.input} 
                 onChangeText = {onChangeText}
                 value={text}        
                 placeholder="Senha"
                 maxLength={50}/>   
            
             <Button 
                title="LOGIN"
                onPress={()=> props.navigation.navigate('Registro')}    
            /> 

            <Text>Ou faca login com ... </Text>  
            <Image
                style={{
                marginLeft: 40,
                
                }} 
                    source={require('../Imagens/google.png')}/>
            <Image  style={{
                marginLeft: 180,
                marginTop: -50,}}
            source={require('../Imagens/facebook.png')}/>
            <Image style={{
                marginLeft: 300,
                marginTop: -50,
                }}
                     source={require('../Imagens/twitter.png')}/>

            <Text>Novo no App? Faça seu registro.</Text>
       
            </View>
            )
        }
        
        const style = StyleSheet.create(
            {
                input: {
                    color:'grey',          
                    
                    borderBottomWidth:1,
                    borderCurve:'circular',
                    
                }
            },
            
            
        )

                
        


                     
           
           
                 

        
        

        
        
