import React from "react";
import{View,Text,Image, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';





export default props =>{

    return(           
        
        <View style ={{
            flex:1,            
            justifyContent: 'center',
             }}>

                
            <Image source={require('../Imagens/tela3.jpg')}/>           
            
                    <Text
                    style={{
                    fontSize:23,
                    fontFamily:'Arial',}}
                        >Registrar</Text>
                    <Image style={{
                        marginLeft: 40,
                            }} 
                        source={require('../Imagens/google.png')}/>
            
                    <Image style={{
                    marginLeft: 180,
                    marginTop: -50,}}
                    source ={require('../Imagens/facebook.png')}/>
            
                     <Image style={{
                    marginLeft: 300,
                    marginTop: -50,}}

                    source={require('../Imagens/twitter.png')}/>                         

        </View>
                )
            }

            const styles = StyleSheet.create({
    
                
                    email:{
                    height: 5,
                    margin:5,
                    padding: 10,
            
                },
                
                
            })
                     