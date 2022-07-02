import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './AppStack';



function MainNavigation(){
    return(
        <NavigationContainer>
           {AppStack()}

        </NavigationContainer>
    )
}

export default MainNavigation;