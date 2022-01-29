import React, { useState } from 'react'
import {View,Text,StyleSheet,TouchableOpacity, SafeAreaView} from 'react-native'

const Page=({navigation})=>{
    
        const [imageurl,setimageUrl]=useState(null)
        const getImage=()=>{
          fetch('https://dog.ceo/api/breeds/image/random', {
            method: 'GET'
            //Request Type 
        })
        .then((response) => response.json())
        
        .then((responseJson) => {
          
            if(responseJson.status=="success"){

                navigation.navigate('SecondPage',{imageUrl:responseJson.message})
            //  setimageUrl(responseJson.message)
              console.log(responseJson.message)
      
            }
            
        })
        //If response is not in json then in error
        .catch((error) => {
            //Error 
            console.error(error);
        });
        }
        return(
          <SafeAreaView style={styles.main}>
            <TouchableOpacity style={styles.button} onPress={getImage}>
            <Text style={styles.text}>FETCH</Text>
            </TouchableOpacity>
            
          </SafeAreaView>
        )
      
    
}
export default Page
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