import {createBottomTabNavigator} from "react-navigation-tabs"
import {createAppContainer} from "react-navigation"
import {Image} from "react-native"
import React from "react"

import {Feather , MaterialIcons} from "@expo/vector-icons"

import Explore from "./src/screens/Explore"
import Trips from "./src/screens/Trips"
import Saved from "./src/screens/Saved"
import Inbox from "./src/screens/Inbox"
import Profile from "./src/screens/Profile"


const bottomNav = createBottomTabNavigator({
  Explore : {
    screen : Explore,
    navigationOptions : {
      tabBarLabel : "EXPLORE",
      tabBarIcon : ({tintColor})=>{
        return <Feather name="search" size={22} color={tintColor}/>
      }
    }
  },
  Saved : {
    screen : Saved,
    navigationOptions : {
      tabBarLabel : "SAVED",
      tabBarIcon : ({tintColor})=>{
        return <Feather name="heart" size={22} color={tintColor}/>
      }
    }
  },
  Trips : {
    screen : Trips,
    navigationOptions : {
      tabBarLabel : "TRIPS",
      tabBarIcon : ({tintColor})=>{
        return <Image source={require("./assets/airbnb.png")} style={{height : 24 , width : 24 , tintColor : tintColor}}/>
      }
    }
  },
  Inbox : {
    screen : Inbox,
    navigationOptions : {
      tabBarLabel : "INBOX",
      tabBarIcon : ({tintColor})=>{
        return <MaterialIcons name="chat-bubble-outline" size={22} color={tintColor}/>
      }
    }
  },
  Profile : {
    screen : Profile,
    navigationOptions : {
      tabBarLabel : "PROFILE",
      tabBarIcon : ({tintColor})=>{
        return <MaterialIcons name="person-outline" size={26} color={tintColor}/>
      }
    }
  }
},{
  tabBarOptions : {
    activeTintColor : "red",
    inactiveTintColor : "grey",
    style : {
      backgroundColor : "#ffffff",
      borderTopWidth : 0,
      shadowOffset : {
        height : 3,
        width : 5
      },
      shadowColor : "#000000",
      shadowOpacity : 0.5,
      elevation : 5
    }
  }
})

export default createAppContainer(bottomNav)