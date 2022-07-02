import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Details from '../screens/Details';
import BottomTabBarStack from './BottomTabBarStack';

const Stack = createNativeStackNavigator();

export default function AppStack(){
    return(
        <Stack.Navigator>
        <Stack.Screen name = "TabFlow" component={BottomTabBarStack} />
        <Stack.Screen name = "Detail" component={Details} />
        </Stack.Navigator>
    );


}