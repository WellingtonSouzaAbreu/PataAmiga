import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome5'

// import Animals from '../screens/Animals/index.js'
import Complaint from '../screens/Complaint/index.js'
import DogInfo from '../screens/DogInfo'
import About from '../screens/About'
import DonationScreen from '../screens/Donation'
import EventScreen from '../screens/Events'
import FaqScreen from '../screens/Faq'
import LastAdoptionsScreen from '../screens/LatestAdoptions'
import RegularReportScreen from '../screens/RegularReport'
import Home from '../screens/Home'
import RequestAdoption from './../screens/RequestAdoption'
import ProfileScreen from '../screens/Profile'
import Auth from './../screens/Auth'
import CompleteProfile from './../screens/Profile/CompleteProfile'
import EditProfile from './../screens/Profile/EditProfile'
import ChangePassword from './../screens/Profile/ChangePassword'
import Animals from './../screens/Animals' // Vinculado somente para poder navegar no AnimalCard
import CustomDrawer from '../components/CustomDrawer/CustomDrawer'
import HeaderMain from '../components/HaeaderMain'

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

    Complaint: {
        screen: Complaint,
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
        screen: RequestAdoption,
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
    initialRouteName: 'Auth',
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
    Complaint: {
        name: 'Complaint',
        screen: Complaint,
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
        screen: Auth,
        navigationOptions: {
            title: 'AUTH'
        }
    },

}

const menuDrawer = createDrawerNavigator(menuDrawerRoutes, menuDrawerConfig)

export default createAppContainer(menuDrawer)
