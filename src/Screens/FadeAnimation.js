
import React, { useEffect } from 'react';
import {Animated, Text, View,StatusBar} from 'react-native';
import styles from '../Styles/styles';


const FadeAnimation=()=>{
 const Fade= new Animated.Value(0)

 useEffect(()=>{
    Animated.timing(Fade,{toValue:1,duration:3000, useNativeDriver: true }).start()
 },[Fade])
   return(
 <View style={styles.container}>
    <StatusBar backgroundColor="white"/>
         <Text style={styles.smallheading}>Fade Animation</Text>
   
     <Animated.Image
     style={{marginTop:5,height:200,width:200,opacity:Fade,}}
     source={{uri:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80"}}

     >

     </Animated.Image>
 </View>
   )

  
}

export default FadeAnimation;