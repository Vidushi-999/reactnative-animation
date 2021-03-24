import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import FadeAnimation from './Screens/FadeAnimation';
import ScaleAnimation from './Screens/ScaleAnimation';
import SpinAnimation from './Screens/SpinAnimation';
import MainFile from './Screens/Main';
import SpringAnimation from './Screens/SpringAnimation';
import ParallelAnimation from './Screens/ParallelAnimation';
import SequenceAnimation from './Screens/SequenceAnimation';



const AnimationStack = createStackNavigator();
const StackScreens = ({ navigation }) => (
    <AnimationStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
        <AnimationStack.Screen name="Main" component={MainFile} options={{ headershown: false }} />
        <AnimationStack.Screen name="FadeAnimation" component={FadeAnimation} options={{ headershown: false }} />
        <AnimationStack.Screen name="ScaleAnimation" component={ScaleAnimation} options={{ headershown: false }} />
        <AnimationStack.Screen name="SpinAnimation" component={SpinAnimation} options={{ headershown: false }} />
        <AnimationStack.Screen name="SpringAnimation" component={SpringAnimation} options={{ headershown: false }} />
        <AnimationStack.Screen name="ParallelAnimation" component={ParallelAnimation} options={{ headershown: false }} />
        <AnimationStack.Screen name="SequenceAnimation" component={SequenceAnimation} options={{ headershown: false }} />

    </AnimationStack.Navigator>
)


export default () => {


    return (

        <NavigationContainer>
            <StackScreens />
        </NavigationContainer>


    )
}