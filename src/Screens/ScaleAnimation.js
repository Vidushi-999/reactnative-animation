
import React, { useEffect } from 'react';
import { Animated, Text, View, StatusBar } from 'react-native';
import styles from '../Styles/styles';


const ScaleAnimation = () => {
  const Scale = new Animated.Value(0)
  const ScaleValue = Scale.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 2]
  });


  useEffect(() => {
    Animated.timing(Scale, { toValue: 1, duration: 3000, useNativeDriver: true }).start()
  }, [Scale])
  return (

    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
      <Text style={[styles.smallheading, { marginBottom: 15 }]}>Scale Animation</Text>

      <Animated.Image
        style={{ height: 100, width: 130, transform: [{ scale: ScaleValue }] }}
        source={{ uri: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80" }}
      >

      </Animated.Image>
    </View>
  )


}

export default ScaleAnimation;