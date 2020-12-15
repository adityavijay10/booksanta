import React from 'react';
import {createDrawerNavigator} from "react-navigation-drawer";
import {AppTabNavigator} from "./AppTabNavigator";
import CustomSideBarMenu from "./CustomSideBarMenu";
import Settings from "../screens/Settings";
import MyDonations from '../screens/MyDonations'

export const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    Settings:{
        screen:Settings
    },
    MyDonations:{
        screen: MyDonations
    },
    
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:"Home"
}
)