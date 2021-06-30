import React, { Component } from 'react'
import { Text, View, FlatList, Image, Alert } from 'react-native'
import axios from 'axios';

import styles from './styles.js'

import {baseApiUrl} from '../../common/baseApiUrl.js'
import AnimalCard from '../../components/AnimalCard'

const initialState = {
    animals: []
}

const animalsOfflineData = [
    {
        id: '1',
        breed: 'Poddle',
        aproximateAge: '5 ~ 9 Meses',
        sex: 'Macho'
    },
    {
        id: '2',
        breed: 'Pastor Alemão',
        aproximateAge: '10 ~ 13 Meses',
        sex: 'Fêmea'
    },
    {
        id: '3',
        breed: 'Pit Bull',
        aproximateAge: '10 ~ 13 Meses',
        sex: 'Macho'
    },
    {
        id: '4',
        breed: 'Chihuahua',
        aproximateAge: '10 ~ 13 Meses',
        sex: 'Macho'
    },

    {
        id: '5',
        breed: 'Pintcher',
        aproximateAge: '10 ~ 13 Meses',
        sex: 'Macho'
    },
]

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