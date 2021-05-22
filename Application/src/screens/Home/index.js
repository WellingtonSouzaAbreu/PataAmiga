import React,{Component} from 'react'
import { View, Text, ScrollView, Image,TouchableOpacity} from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

import HomeTabNavigation from '../../config/HomeTabNavigation'

export default class Home extends Component{

    navigateToDogInfo = (id) => {
        this.props.navigation.navigate('DogInfo', {id})
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.btnGridContainer}>
                    <View style={styles.gridButton}>
                        <TouchableOpacity style={styles.buttonNavigate} onPress={() => this.props.navigation.navigate('About')}>
                            <Icon name="question" size={20} color='#64718C' style={{marginVertical: 2}}/>
                            <Text style={styles.txtButton}>Sobre nós</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNavigate} onPress={() => this.props.navigation.navigate('Events')}>
                            <Icon name="calendar" size={20} color='#64718C' style={{marginVertical: 2}}/>
                            <Text style={styles.txtButton}>Eventos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNavigate} onPress={() => this.props.navigation.navigate('Donation')}>
                            <Icon name="hand-holding-usd" size={20} color='#64718C' style={{marginVertical: 2}}/>
                            <Text style={styles.txtButton}>Doações</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.gridButton}>
                        <TouchableOpacity style={styles.buttonNavigate} onPress={() => this.props.navigation.navigate('Report')}>
                            <Icon name="bullhorn" size={20} color='#64718C' style={{marginVertical: 2}}/>
                            <Text style={styles.txtButton}>Denunciar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNavigate} onPress={() => this.props.navigation.navigate('Profile')}>
                            <Icon name="shopping-cart" size={20} color='#64718C' style={{marginVertical: 2}}/>
                            <Text style={styles.txtButton}>Loja</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonNavigate} onPress={() => this.props.navigation.navigate('RegularReport')}>
                            <Icon name="sticky-note" size={20} color='#64718C' style={{marginVertical: 2}}/>
                            <Text style={styles.txtButton}>Relatório</Text>
                        </TouchableOpacity>
                    </View>

                </View> 
                <View style={styles.containerTabNavigationHome}>
                    <HomeTabNavigation onNavigateToDogInfo={this.navigateToDogInfo}/>
                </View>
            </View>
          
        )
    }
}