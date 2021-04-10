import React, { Component } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Feather'

import AboutTab1 from './AboutTab1'
import AboutTab2 from './AboutTab2'
import AboutTab3 from './AboutTab3'


const Tab = createMaterialTopTabNavigator();


export default class AboutNavigation extends   Component{
    render(){
        return(
            <Tab.Navigator
                initialRouteName= "Quem somos?"
                tabBarOptions={{
                    activeTintColor: '#5DC7C7',
                    inactiveTintColor: '#777',
                  }}


            >
                <Tab.Screen name="Quem somos?" component={AboutTab1} />  
                <Tab.Screen name="O Que fazemos?" component={AboutTab2}/> 
                <Tab.Screen name="Como posso ajudar?" component={AboutTab3}/>
               
            </Tab.Navigator>
        )
    }

}