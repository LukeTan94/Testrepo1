import React from 'react';
import {View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImageConst from '../const/ImageConst';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import BottomTabBar from './BottomTabBar';

const Tab = createBottomTabNavigator();


//initasling the object of bottom tab bar
export default function BottomTabBarStack(){
    const tabs =[{
        id:0,
        activeIcon : ImageConst.home,
        inactiveIcon: ImageConst.home,
        name: 'Home',
        component : Home
    },
    {
        id:1,
        activeIcon : ImageConst.user,
        inactiveIcon: ImageConst.user,
        name: 'Profile',
        component : Profile
    },
    {
        id:2,
        activeIcon : ImageConst.settings,
        inactiveIcon: ImageConst.settings,
        name: 'Setting',
        component : Setting
    },

    ]
    return(
   <Tab.Navigator
   tabBar={props => <BottomTabBar {...props} />}
   name ={"TabFlow"}
   screenOptions={{headerShown:false,}}
   >
    {
        tabs.map((item,index) =>(
            <Tab.Screen key ={index}
            initialParams={{
                activeIcon:item.activeIcon,
                inactiveIcon: item.inactiveIcon
            }}
            name = {item.name}
            component ={item.component}
            />

           
        ))
    }

   </Tab.Navigator>
    )
}
   
