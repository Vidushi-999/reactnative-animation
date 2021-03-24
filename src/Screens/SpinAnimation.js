
import React, { useEffect } from 'react';
import { Animated, Text, View, StatusBar } from 'react-native';
import styles from '../Styles/styles';


const SpinAnimation = () => {
  const Spin = new Animated.Value(0)
  const SpinValue = Spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  })

  useEffect(() => {
    Animated.timing(Spin, { toValue: 1, duration: 3000, useNativeDriver: true }).start()
  }, [Spin])
  return (

    <View style={styles.container}>
      <StatusBar backgroundColor="white" />
      <Text style={styles.smallheading}>Spin Animation</Text>

      <Animated.Image
        style={{ height: 150, width: 180, marginTop: 8, borderRadius: 20, transform: [{ rotate: SpinValue }] }}
        source={{ uri: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80" }}
        resizeMode="cover"
      >

      </Animated.Image>
    </View>
  )


}


export default SpinAnimation;