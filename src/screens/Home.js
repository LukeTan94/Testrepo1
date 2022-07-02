import React from 'react';
import {View , Text ,Button } from 'react-native'

export default function Home({navigation}){
    return(
        <View>
            <Text>Home</Text>
            <Button title ="Click me" onPress={()=> {navigation.navigate('Detail')} }/>
        </View>
    )
}