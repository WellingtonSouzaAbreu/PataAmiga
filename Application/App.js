import * as React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { Input, Button  } from 'galio-framework';
import Icon from 'react-native-vector-icons/Feather'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/views/HomeScreen'
import AboutScreen from './src/views/AboutScreen'
import DonationScreen from './src/views/DonationScreen'
import InfoDogScreen from './src/views/InfoDogScreen'
import Report from './src/views/ReportScreen'
import Login from './src/views/Login'


const Tab = createBottomTabNavigator();
export default function App() {
  return (
<NavigationContainer>
        <Tab.Navigator
          initialRouteName= "Inicio"
          screenOptions={({ route }) => ({
          
            tabBarIcon: ({ color, size }) => {
              let iconName;
              switch (route.name) {
                case 'Inicio':
                  iconName = 'home'
                  break;
                case 'Sobre': 
                  iconName = 'info'
                  break; 
                case 'Doação': 
                  iconName= 'dollar-sign'
                  break;
                case 'Info': 
                  iconName= 'gift'
                  break;
                case 'Denuncia':
                  iconName= 'alert-circle'
                  break;
                case 'Login' : 
                  iconName= 'gift'
                  break;
              }
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}

            tabBarOptions={{
              activeTintColor: '#50C7C7',
              inactiveTintColor: '#777',
              showLabel: true, 
              animationEnabled: true,
              lazyLoad: true,
              keyboardHidesTabBar: true
              
           
          }}>
          <Tab.Screen name="Inicio" component={HomeScreen} />
          <Tab.Screen name="Sobre" component={AboutScreen} />
          <Tab.Screen name="Doação" component={DonationScreen} />
          <Tab.Screen name="Info" component={InfoDogScreen} />
         <Tab.Screen name="Denuncia" component={Report} />
          <Tab.Screen name="Login" component={Login} />
       

         
        </Tab.Navigator>
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#F2F2F2',
      paddingHorizontal: 8
    },

    

})
