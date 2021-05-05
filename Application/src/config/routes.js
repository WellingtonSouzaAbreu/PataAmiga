import React,{Component} from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../screens/Home/index.js'
import Report from '../screens/Report/index.js'
import DogInfo from '../screens/DogInfo'
import About from '../screens/About'
import DonationScreen from '../screens/Donation'
import EventScreen from '../screens/Events'
import FaqScreen from '../screens/Faq'
import LastAdoptionsScreen from '../screens/latestAdoptions'
import RegularReportScreen from '../screens/RegularReport'
import MainScreen from '../screens/NewHome'
import HomeRequestSreen from '../screens/HomeRequest'
import ProfileScreen from '../screens/Profile'


import HeaderMain from '../components/HaeaderMain'
/* import AboutTab1 from '../component/AboutTab1'
import AboutTab2 from './../component/AboutTab2'
import AboutTab3 from './../component/AboutTab3' */

const homeStack = createStackNavigator({
    Home: {
        screen: MainScreen,
        navigationOptions:({navigation}) => {
            return{
                headerTitle: () => <HeaderMain navigation={navigation}/>
            }
        }
        
        
    },
    
    DogInfo: {
        screen: DogInfo
<<<<<<< HEAD
    }, 
=======
        
    },

    About: {
        screen: About,
        navigationOptions:{
            headerTitle:'Sobre a ONG'
        }
    },

    Events: {
        screen: EventScreen,
        navigationOptions:{
            headerTitle:'Eventos'
        }
    },

    Report: {
        screen: Report,
        navigationOptions:{
            headerTitle:'Denunciar'
        }
    },

    Donation: {
        screen: DonationScreen,
        navigationOptions:{
            headerTitle:'Doações'
        }
    },

    RegularReport: {
        
        screen: RegularReportScreen,
        navigationOptions:{
            headerTitle:'Enviar Relatório '
        }
    },

    RequestAdoption: {
        screen: HomeRequestSreen,
        navigationOptions:{
            headerTitle: 'Formulário de Adoção'
        }
    },

    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            headerTitle: 'Meu Perfil'
        }
    }





    

>>>>>>> 6b3f8166a5c85c5db19e4af8a1f36133a616a127
}, { initialRouteName: 'Home' })

const menuDrawerConfig = {
    initialRouteName: 'Home',
    drawerType: 'front',
    
    drawerStyle: {
        backgroundColor: 'green'
    },
    //contentComponent: Report,     //Aqui vai o componente que irá aparecer no Drawer
    contentOptions: {
<<<<<<< HEAD
         activeTintColor: 'white',
=======
        activeTintColor: 'white',
>>>>>>> 6b3f8166a5c85c5db19e4af8a1f36133a616a127
        activeBackgroundColor: 'red',
        // inactiveTintColor: 'blue',
        // inactiveBackgroundColor: 'lightgray',
    }
}

const menuDrawerRoutes = {
    Home: {
        name: 'Home',
        screen: homeStack,
        navigationOptions: {
            title: 'INICIO'
        },
    
        
    },
    Report: {
        name: 'Report',
        screen: Report,
        navigationOptions: {
            title: 'DENUNCIAR'
        }
    },
    About: {
        name: 'About',
        screen: About,
        navigationOptions: {  
            title: 'SOBRE NÓS'
        }
    },

    Donation: {
        name: 'Donation',
        screen: DonationScreen,
        navigationOptions: {
            title: 'DOAÇÕES'
        }
    },

    Event: {
        name: 'Events',
        screen: EventScreen,
        navigationOptions: {
            title: 'EVENTOS'
        }
    },

    Faqs: {
        name: 'Faqs',
        screen: FaqScreen,
        navigationOptions: {
            title: 'PERGUNTAS FREQUENTES'
        }
    },

    LastAdopion: {
        name: 'LastAdoption',
        screen: LastAdoptionsScreen,
        navigationOptions: {
            title: 'UTIMAS ADOÇÕES'
        }
    },
    RegularReport: {
        name: 'RegularReport',
        screen: RegularReportScreen,
        navigationOptions: {
            title: 'ACOMPANHAMENTO'
        }
    },

    Main: {
        name: 'MainPage',
        screen: MainScreen,
        navigationOptions: {
            title: 'MENU'
        }
    },

    DogInfor: {
        name: 'InfoDog',
        screen: DogInfo,
        navigationOptions: {
            title: 'DOG INFO'
        }
    },


 
    


}



const menuDrawer = createDrawerNavigator(menuDrawerRoutes, menuDrawerConfig)



export default createAppContainer(menuDrawer)

// Ignora isso, vou ver depois kkj

// const aboutTabs = createMaterialTopTabNavigator({
//     AboutTab1: {
//         name: 'AboutTab1',
//         screen: AboutTab1,
//         navigationOptions: {
//             title: 'AboutTab1',
//             /* tabBarIcon: ({ tintColor }) =>
//                 <Icon name='home' size={30} color={tintColor} /> */
//         }
//     },
//     AboutTab2: {
//         name: 'AboutTab2',
//         screen: AboutTab2,
//         navigationOptions: {
//             title: 'AboutTab2',
//             /* tabBarIcon: ({ tintColor }) =>
//                 <Icon name='home' size={30} color={tintColor} /> */
//         }
//     }
// }, {
//     initialRouteName: 'AboutTab2',
//     tabBarOptions: {
//         tabBarPosition: 'top',
//         showLabel: true,
//     }
// })