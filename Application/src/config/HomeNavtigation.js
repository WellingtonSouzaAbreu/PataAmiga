import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import AboutTab1 from '../component/AboutTab1'
import LastAdoptionsScreen from '../screens/latestAdoptions'
import HomeScreen from '../screens/Home'


const Tab = createMaterialTopTabNavigator();

export default function HomeTabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Quem somos?"
                tabBarOptions={{
                    activeTintColor: '#F53669',
                    inactiveTintColor: '#777',
                    indicatorStyle: '#F53669'
                    
                }}
            >
                <Tab.Screen name="ADOTAR" component={HomeScreen} />
                <Tab.Screen name="ADOTADOS" component={LastAdoptionsScreen} />
               

            </Tab.Navigator>
        </NavigationContainer>
    )
}