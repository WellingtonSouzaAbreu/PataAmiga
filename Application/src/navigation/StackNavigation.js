

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from '../views/HomeScreen'

const Routes = createStackNavigator ({
    home: {
        screen: HomeScreen,
    }
},{
    iinitialRouteName: HomeScreen
})

export default createAppContainer(Routes)