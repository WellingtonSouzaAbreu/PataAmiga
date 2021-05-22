import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import AboutTab1 from '../component/AboutTab1'
import AboutTab2 from '../component/AboutTab2'
import AboutTab3 from '../component/AboutTab3'

const Tab = createMaterialTopTabNavigator();

export default function AboutNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Quem somos?"
                tabBarOptions={{
                    activeTintColor: '#F28749',
                    inactiveTintColor: '#64718C',
                  
                }}
            >
                <Tab.Screen name="Quem somos?" component={AboutTab1} />
                <Tab.Screen name="O Que fazemos?" component={AboutTab2} />
                <Tab.Screen name="Como posso ajudar?" component={AboutTab3} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}