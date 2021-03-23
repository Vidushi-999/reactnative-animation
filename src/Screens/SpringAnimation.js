
import React, { useEffect } from 'react';
import {Animated, Text, View,StatusBar} from 'react-native';
import styles from '../Styles/styles';


const SpringAnimation=()=>{
 const Spring= new Animated.Value(0.2)



 useEffect(()=>{
    Animated.spring(Spring,{toValue:1.1,friction:1,useNativeDriver:true}).start()
 },[Spring])
   return(
     
 <View style={styles.container}>
   <StatusBar backgroundColor="white"/>
         <Text style={styles.smallheading}>Spring Animation</Text>
   
         <Animated.Image
   style={{height:150,width:180,transform:[{scale:Spring}]}}
   source={{uri:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"}}
   >

   </Animated.Image>
 </View>
   )

  
   }

export default SpringAnimation;