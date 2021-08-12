import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Splash from './../screens/Splash'
import Complaint from '../screens/Complaint'
import DogInfo from '../screens/DogInfo'
import About from '../screens/About'
import Donation from '../screens/Donation'
import Event from '../screens/Events'
import Faq from '../screens/Faq'
// import LastAdoptions from '../screens/LatestAdoptions'
import RegularReport from '../screens/RegularReport'
import Home from '../screens/Home'
import RequestAdoption from './../screens/RequestAdoption'
import Profile from '../screens/Profile'
import Auth from './../screens/Auth'
import CompleteProfile from './../screens/Profile/CompleteProfile'
import EditProfile from './../screens/Profile/EditProfile'
import ChangePassword from './../screens/Profile/ChangePassword'
import CustomDrawer from './../components/CustomDrawer'
import HeaderMain from '../components/HeaderMain'

const homeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <HeaderMain navigation={navigation} />
            }
        }
    },

    DogInfo: {
        name: 'DogInfo',
        screen: DogInfo
    },

    /*     Animals:{
            name: 'Animals',
            screen: Animals,
            navigationOptions:{
                headerTitle:'Animals'
            }
        }, */

    About: {
        screen: About,
        navigationOptions: {
            headerTitle: 'Sobre a ONG'
        }
    },

    Events: {
        screen: Event,
        navigationOptions: {
            headerTitle: 'Eventos'
        }
    },

    Complaint: {
        screen: Complaint,
        navigationOptions: {
            headerTitle: 'Denunciar'
        }
    },

    Donation: {
        screen: Donation,
        navigationOptions: {
            headerTitle: 'Doações'
        }
    },

    RegularReport: {
        screen: RegularReport,
        navigationOptions: {
            headerTitle: 'Enviar Relatório '
        }
    },

    RequestAdoption: {
        screen: RequestAdoption,
        navigationOptions: {
            headerTitle: 'Formulário de Adoção'
        }
    },

    Profile: {
        screen: Profile,
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

const menuDrawerRoutes = {
    Home: {
        name: 'Home',
        screen: homeStack,
        navigationOptions: {
            title: 'INICIO',
            drawerIcon: ({ tintColor }) => (

                <Icon name="home" size={20} color='#F28749' style={{ marginVertical: 2 }} />
            )
        },
    },

        
    Profile: {
        name: 'Profile',
        screen: Profile,
        navigationOptions: {
            title: 'PERFIL',
            drawerIcon: ({ tintColor }) => (
                <Icon name="user" size={20} color='#F28749' style={{ marginVertical: 2 }} />
            )
        }
    },

    Complaint: {
        name: 'Complaint',
        screen: Complaint,
        navigationOptions: {
            title: 'DENUNCIAR',
            drawerIcon: ({ tintColor }) => (
                <Icon name="bullhorn" size={20} color='#F28749' style={{ marginVertical: 2 }} />
            )

        },
    },

    About: {
        name: 'About',
        screen: About,
        navigationOptions: {
            title: 'SOBRE NÓS',
            drawerIcon: ({ tintColor }) => (
                <Icon name="bullhorn" size={20} color='#F28749' style={{ marginVertical: 2 }} />
            )
        }
    },

    Donation: {
        name: 'Donation',
        screen: Donation,
        navigationOptions: {
            title: 'DOAÇÕES',
            drawerIcon: ({ tintColor }) => (
                <Icon name="hand-holding-usd" size={20} color='#F28749' style={{ marginVertical: 2 }} />
            )
        }
    },

    Event: {
        name: 'Events',
        screen: Event,
        navigationOptions: {
            title: 'EVENTOS',
            drawerIcon: ({ tintColor }) => (
                <Icon name="calendar-alt" size={20} color='#F28749' style={{ marginVertical: 2 }} />
            )
        }
    },

   /*  LastAdopion: {
        name: 'LastAdoption',
        screen: LastAdoptions,
        navigationOptions: {
            title: 'UTIMAS ADOÇÕES',
            drawerIcon: ({ tintColor }) => (
                <Icon name="dog" size={20} color='#F28749' style={{ marginVertical: 2 }} />
            )
        }
    }, */

    RegularReport: {
        name: 'RegularReport',
        screen: RegularReport,
        navigationOptions: {
            title: 'ACOMPANHAMENTO',
            drawerIcon: ({ tintColor }) => (
                <Icon name="file-alt" size={20} color='#F28749' style={{ marginVertical: 2 }} />
            )
        }
    },

    Faqs: {
        name: 'Faqs',
        screen: Faq,
        navigationOptions: {
            title: 'PERGUNTAS FREQUENTES',
            drawerIcon: ({ tintColor }) => (
                <Icon name="question-circle" size={20} color='#F28749' style={{ marginVertical: 2 }} />
            )
        }
    },
}

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

const menuDrawer = createDrawerNavigator(menuDrawerRoutes, menuDrawerConfig)


const authRouter = createSwitchNavigator(
    {
        Splash: Splash,
        Auth: Auth,
        Home: menuDrawer
    },
    {
        initialRouteName: 'Splash'
    }
)

export default createAppContainer(authRouter)
