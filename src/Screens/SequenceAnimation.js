
import React, { useEffect } from 'react';
import {Animated, Text, View,StatusBar} from 'react-native';
import styles from '../Styles/styles';


const SequenceAnimation=()=>{
 const scale= new Animated.Value(0)

 const scalevalue = scale.interpolate({
    inputRange: [0,1],
    outputRange: [-3, 2]
  });
  const spin=new Animated.Value(0)
  const spinvalue = spin.interpolate({
    inputRange: [0,1],
    outputRange: ["0deg", "360deg"]
  });

  const springval=new Animated.Value(1)



 useEffect(()=>{
     Animated.sequence(
          [
              Animated.timing(scale,{toValue:1,duration:3000,useNativeDriver:true}), //scaling
              Animated.spring(springval,{toValue:2,friction:1,tension:0.5,useNativeDriver: true }),    //spring
              Animated.timing(spin,{toValue:1,duration:3000,useNativeDriver:true})  //spin
            ])
   .start()
 },[scale])
   return(
     
 <View style={styles.container}>
   <StatusBar backgroundColor="white"/>
         <Text style={styles.smallheading}>Sequence Animation</Text>
   
   <Animated.View
   style={{height:50,width:80,backgroundColor:'red',transform:[{scaleX:scalevalue}]}}
   >
   </Animated.View>
    
   <Animated.Text
   style={{marginTop:18,fontSize:10,transform:[{scale:springval}]}}
   >
       What's up
   </Animated.Text>
   <Animated.Text
   style={{height:100,margin:8,fontSize:15,transform:[{rotate:spinvalue}]}}
   >
       Welcome here !!
   </Animated.Text>
 
 </View>
   )

  
}

export default SequenceAnimation;