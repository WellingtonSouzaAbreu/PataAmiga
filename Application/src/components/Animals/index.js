import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import axios from 'axios';

import styles from './styles.js'

import {baseApiUrl} from '../../common/baseApiUrl.js'
import AnimalCard from '../AnimalCard'
import { showAlert } from '../../common/commonFunctions.js';

const initialState = {
    animals: []
}

export default class Animals extends Component {

    state = {...initialState}

    componentDidMount = async() => {
        await axios.get(`${baseApiUrl}/animal`)
            .then(res => {
                this.setState({animals: res.data})
            })
            .catch(err => {
                showAlert('Ops!', 'Ocorreu um erro ao obter animais!')
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