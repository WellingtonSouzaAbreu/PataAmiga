import * as React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { Input, Button  } from 'galio-framework';
import Icon from 'react-native-vector-icons/Feather'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

<<<<<<< HEAD
import HomeScreen from './src/screens/Home'
import AboutScreen from './src/screens/About'
import DonationScreen from './src/screens/Donation'
import InfoDogScreen from './src/screens/DogInfo'
import Report from './src/screens/Report'
import FaqScreen from './src/screens/Faq'
import EventScreen from './src/screens/Events'
import ProfileScreen from './src/screens/Profile'
import LastAdoptionsScreen from './src/screens/latestAdoptions'
import RegularReportScreen from './src/screens/RegularReport'
import HomeRequestSreen from './src/screens/HomeRequest'
=======
import Home from './src/screens/Home'
import About from './src/screens/About'
import Donation from './src/screens/Donation'
import DogInfo from './src/screens/DogInfo'
import Report from './src/screens/Report'
import Auth from './src/screens/Auth'
>>>>>>> b1a672dca791a7486b6e98a6b8df5599d931fabd


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
                case 'Eventos': 
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
<<<<<<< HEAD
          <Tab.Screen name="Inicio" component={LastAdoptionsScreen} />
          <Tab.Screen name="Eventos" component={FaqScreen} />
          <Tab.Screen name="Doação" component={RegularReportScreen} />
          <Tab.Screen name="Info" component={HomeRequestSreen} />
         <Tab.Screen name="evtn" component={EventScreen} />


         
=======
          <Tab.Screen name="Inicio" component={Home} />
          <Tab.Screen name="Sobre" component={About} />
          <Tab.Screen name="Doação" component={Donation} />
          <Tab.Screen name="Info" component={DogInfo} />
         <Tab.Screen name="Denuncia" component={Report} />
          <Tab.Screen name="Login" component={Auth} />
>>>>>>> b1a672dca791a7486b6e98a6b8df5599d931fabd
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
