import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import LastAdoptions from '../screens/latestAdoptions'
import Animals from '../screens/Animals'


const Tab = createMaterialTopTabNavigator();

export default function HomeTabNavigation(props) {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Quem somos?"
                tabBarOptions={{
                    activeTintColor: '#F27F3D',
                    inactiveTintColor: '#64718C',
                    indicatorStyle: '#F53669',
                    pressColor : '#F27F3D',
                    tabStyle : {
                   
                    }
                    
                    
                }}
            >
                <Tab.Screen name="ADOTAR" component={() => <Animals onNavigateToDogInfo={props.onNavigateToDogInfo}/>} />
                <Tab.Screen name="ADOTADOS" component={LastAdoptions} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}