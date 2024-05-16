import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./components/Login";
import Registro from "./components/Registro";
import Gameon from "./components/Gameon";


const Stack = createNativeStackNavigator();

export default props =>{

    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
            <Stack.Navigator initialRouteName="Gameon">               
               <Stack.Screen name="GAMEON" component={Gameon} />
               <Stack.Screen name="Login" component={Login}/>
               <Stack.Screen name="Registro" component={Registro}/>
              

            </Stack.Navigator>
               
            </NavigationContainer>
            
        </SafeAreaView>

    )
}