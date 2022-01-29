import React, { useState } from 'react'
import {View,Text,StyleSheet,TouchableOpacity, SafeAreaView,Image} from 'react-native'

const Page2=({navigation,route})=>{
    console.log(route)
    
       // const [imageurl,setimageUrl]=useState(route.params.imageUrl)
       
        return(
          <SafeAreaView style={styles.main}>
           <Image source={{uri:route.params.imageUrl}} style={{height:'100%',width:'100%',resizeMode:'contain'}}/>
          </SafeAreaView>
        )
      
    
}
export default Page2
const styles=StyleSheet.create({
    main:{
      flex:1,
     
  
    },
   
  
  })