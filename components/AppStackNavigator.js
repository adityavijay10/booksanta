import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'

import RecieverDetailsScreen from "../screens/RecieverDetailsScreen"
import BookDonateScreen from "../screens/BookDonateScreen"
import { createDrawerNavigator } from 'react-navigation-drawer';

const StackNavigator=createStackNavigator({
    BookDonateList:{
      screen:BookDonateScreen,  
    },
    RecieverDetails:{
        screen:RecieverDetailsScreen,  
       
    },
},
{
    initialRouteName:"BookDonateList"
}

)