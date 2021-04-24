import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../screens/Home/index.js'
import Report from '../screens/Report/index.js'
import DogInfo from '../screens/DogInfo'
import About from '../screens/About'
/* import AboutTab1 from '../component/AboutTab1'
import AboutTab2 from './../component/AboutTab2'
import AboutTab3 from './../component/AboutTab3' */

const homeStack = createStackNavigator({
    Home: {
        screen: Home,
    },
    DogInfo: {
        screen: DogInfo
    },
}, { initialRouteName: 'Home' })

const menuDrawerConfig = {
    initialRouteName: 'Home',
    drawerType: 'front',
    drawerStyle: {
        backgroundColor: 'green'
    },
    //contentComponent: Report,     //Aqui vai o componente que irá aparecer no Drawer
    contentOptions: {
         activeTintColor: 'white',
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
            title: 'Home'
        }
    },
    Report: {
        name: 'Report',
        screen: Report,
        navigationOptions: {
            title: 'Report'
        }
    },
    About: {
        name: 'About',
        screen: About,
        navigationOptions: {  
            title: 'About'
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