import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome5'

// import Animals from '../screens/Animals/index.js'
import Report from '../screens/Report/index.js'
import DogInfo from '../screens/DogInfo'
import About from '../screens/About'
import DonationScreen from '../screens/Donation'
import EventScreen from '../screens/Events'
import FaqScreen from '../screens/Faq'
import LastAdoptionsScreen from '../screens/LatestAdoptions'
import RegularReportScreen from '../screens/RegularReport'
import Home from '../screens/Home'
import HomeRequestSreen from '../screens/HomeRequest'
import ProfileScreen from '../screens/Profile'
import AuthScreen from './../screens/Auth'
import CompleteProfile from './../screens/Profile/CompleteProfile'
import EditProfile from './../screens/Profile/EditProfile'
import ChangePassword from './../screens/Profile/ChangePassword'
import Animals from './../screens/Animals' // Vinculado somente para poder navegar no AnimalCard
import CustomDrawer from '../components/CustomDrawer/CustomDrawer'
import HeaderMain from '../components/HaeaderMain'

/* import AboutTab1 from '../component/AboutTab1'
import AboutTab2 from './../component/AboutTab2'
import AboutTab3 from './../component/AboutTab3' */

const homeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions:({navigation}) => {
            return{
                headerTitle: () => <HeaderMain navigation={navigation}/>
            }
        }
    },
    
    DogInfo: {
        name: 'DogInfo',
        screen: DogInfo
    }, 


    Animals:{
        name: 'Animals',
        screen: Animals,
        navigationOptions:{
            headerTitle:'Animals'
        }
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
    },
    CompleteProfile: {
        screen: CompleteProfile,
        navigationOptions: {
            headerTitle: 'Informações Complementares'
        }
    },

    EditProfile: {
        screen: EditProfile,
        navigationOptions: {
            headerTitle: 'Editar Perfil'
        }

    },

    ChangePassword: {
        screen: ChangePassword,
        navigationOptions: {
            headerTitle: 'Alterar Senha'
        }

    },



}, { initialRouteName: 'Home' })

const menuDrawerConfig = {
    initialRouteName: 'Home',
    drawerType: 'front',
    
    drawerStyle: {
        backgroundColor: 'green'
    },
    contentComponent: CustomDrawer,     //Aqui vai o componente que irá aparecer no Drawer
    contentOptions: {
        activeTintColor: '#FFFF',
        activeBackgroundColor: '#64718C',
        inactiveTintColor: '#64718C',
        // inactiveBackgroundColor: 'lightgray',
    }
}

const menuDrawerRoutes = {
    Home: {
        name: 'Home',
        screen: homeStack,
        navigationOptions: {
            title: 'INICIO',
            drawerIcon: ({ tintColor }) => (
                
                <Icon name="home" size={20} color='#F28749' style={{marginVertical: 2}}/>
              )
        },
        
    },
    Report: {
        name: 'Report',
        screen: Report,
        navigationOptions: {
            title: 'DENUNCIAR',
            drawerIcon:({tintColor}) => (
                <Icon name="bullhorn" size={20} color='#F28749' style={{marginVertical: 2}}/>
            )
            
        },
        
        
    },
    
    About: {
        name: 'About',
        screen: About,
        navigationOptions: {  
            title: 'SOBRE NÓS',
            drawerIcon:({tintColor}) => (
                <Icon name="bullhorn" size={20} color='#F28749' style={{marginVertical: 2}}/>
            )
        }
    },

    Donation: {
        name: 'Donation',
        screen: DonationScreen,
        navigationOptions: {
            title: 'DOAÇÕES',
            drawerIcon:({tintColor}) => (
                <Icon name="hand-holding-usd" size={20} color='#F28749' style={{marginVertical: 2}}/>
            )
        }
    },

    Event: {
        name: 'Events',
        screen: EventScreen,
        navigationOptions: {
            title: 'EVENTOS',
            drawerIcon:({tintColor}) => (
                <Icon name="calendar-alt" size={20} color='#F28749' style={{marginVertical: 2}}/>
            )
        }
    },


    LastAdopion: {
        name: 'LastAdoption',
        screen: LastAdoptionsScreen,
        navigationOptions: {
            title: 'UTIMAS ADOÇÕES',
            drawerIcon:({tintColor}) => (
                <Icon name="dog" size={20} color='#F28749' style={{marginVertical: 2}}/>
            )
        }
    },
    RegularReport: {
        name: 'RegularReport',
        screen: RegularReportScreen,
        navigationOptions: {
            title: 'ACOMPANHAMENTO',
            drawerIcon:({tintColor}) => (
                <Icon name="file-alt" size={20} color='#F28749' style={{marginVertical: 2}}/>
            )
        }
    },

  
    Faqs: {
        name: 'Faqs',
        screen: FaqScreen,
        navigationOptions: {
            title: 'PERGUNTAS FREQUENTES',
            drawerIcon:({tintColor}) => (
                <Icon name="question-circle" size={20} color='#F28749' style={{marginVertical: 2}}/>
            )
        }
    },
    
    Auth: {
        name: 'Auth',
        screen: AuthScreen,
        navigationOptions: {
            title: 'AUTH'
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