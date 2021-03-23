
import React from 'react';
import {Text, View,TouchableOpacity, FlatList, StatusBar} from 'react-native';
import styles from '../Styles/styles';


const MainFile=(props)=>{
       const data=[{title:"Fade Animation"},{title:"Spin Animation"},{title:"Scale Animation"},{title:"Spring Animation"},{title:"Parallel Animation"},{title:"Sequence Animation"}]
 const onAnimationClick=(index)=>{
     if(index==0)
     {
         props.navigation.navigate('FadeAnimation')
     }
     if(index==1)
     {
         props.navigation.navigate('SpinAnimation')
     }
     if(index==2)
     {
         props.navigation.navigate('ScaleAnimation')
     }
     if(index==3)
     {
        props.navigation.navigate('SpringAnimation')
        
     }
     if(index==4)
     {
        props.navigation.navigate('ParallelAnimation')
        
     }
     if(index==5)
     {
        props.navigation.navigate('SequenceAnimation')
        
     }
    

 }
 renderItems=(item)=>{
    
     return(
         <View>
             <TouchableOpacity  onPress={()=>onAnimationClick(item.index)}>
             <Text style={styles.smallheading}>{item.item.title}</Text>
             </TouchableOpacity>
         </View>
     )
 }
   return(
  <View style={styles.container}>
       <StatusBar backgroundColor="white"/>
<Text style={[styles.textheading,{marginTop:60}]}>List of Animations :</Text>

<FlatList
data={data}
renderItem={renderItems}
/>
  </View>
   )
}


export default MainFile;