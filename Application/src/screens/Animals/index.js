import React, { Component } from 'react'
import { Text, View, FlatList, Image, Alert } from 'react-native'
import axios from 'axios';

import styles from './styles.js'

import {baseApiUrl} from '../../common/baseApiUrl.js'
import AnimalCard from '../../components/AnimalCard'

const initialState = {
    animals: []
}

export default class Animals extends Component {

    state = {...initialState}

    componentDidMount = async() => {
        await axios.get(`${baseApiUrl}/animal`)
            .then(res => {
                console.log(res.data)
                this.setState({animals: res.data})
            })
            .catch(err => {
                console.log(err.response.data)
                Alert.alert('Erro', 'Não foi possível obter o animais')
            })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.flatlistDogs}
                    data={this.state.animals} 
                    renderItem={({item}) => <AnimalCard {...item} onNavigateToDogInfo={this.props.onNavigateToDogInfo}/>}
                    keyExtractor={item => item.id}
                />

            </View>
        )

    }
}