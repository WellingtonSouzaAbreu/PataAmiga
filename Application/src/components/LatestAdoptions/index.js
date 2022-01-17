import React,{Component} from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { View, Text, ScrollView, Image,TouchableOpacity, Alert} from 'react-native'
import axios from 'axios'

import styles from './styles.js'

import { baseApiUrl } from '../../common/baseApiUrl.js'
import AdoptedCard from '../../components/AdoptedCard/index.js'

const initialState ={
    animalAdopteds: []
}

export default class LastAdoptionsScreen extends Component{

    state = {...initialState}

    componentDidMount = async() => {
        await axios.get(`${baseApiUrl}/publication/done`)
            .then(res => this.setState({animalAdopteds: res.data}))
            .catch(err => {
                Alert.alert('Ops', 'Ocorreu um erro ao obter animais adotados!')
                console.log(err)
            })
    }
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.containerScroll}>
                    <FlatList style={styles.flatlistAdopteds}
                    data={this.state.animalAdopteds}
                    renderItem={({item}) => <AdoptedCard {...item}/>}
                    keyExtractor={item => item.id.toString()}
                    />
                </View>
            </View>
          
        )
    }
}