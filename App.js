import React, { useState } from 'react'
import {View,Text,StyleSheet,TouchableOpacity, SafeAreaView} from 'react-native'
import Page from './Page'
import Page2 from './Page2';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App=()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen
          name="FirstPage"
          component={Page}
          options={{
            title: 'First Page', 
            headerStyle: {
              backgroundColor: '#f4511e', 
            },
            headerTintColor: '#fff', 
            headerTitleStyle: {
              fontWeight: 'bold', 
            },
          }}
        />
        <Stack.Screen
          name="SecondPage"
          component={Page2}
          options={{
            title: 'Second Page', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
 
}
export default App
const styles=StyleSheet.create({
  main:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'

  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'orange',
    height:60,
    width:100,
    borderRadius:10,
    elevation:1


  },
  text:{
   
    fontSize:15,
    fontWeight:'900',
    color:'white'

  }

})