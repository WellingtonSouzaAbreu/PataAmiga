import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import axios from 'axios';

import styles from './styles.js'

import { baseApiUrl } from '../../common/baseApiUrl.js'
import AnimalCard from '../AnimalCard'
import { showAlert } from '../../common/commonFunctions.js';

const initialState = {
    animals: []
}

export default class Animals extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.loadAnimals()
    }

    loadAnimals = async () => {
        await axios.get(`${baseApiUrl}/animal/available-for-adoption`)
            .then(res => {
                console.log(res.data)
                this.setState({ animals: res.data })
            })
            .catch(err => {
                showAlert('Ops!', 'Ocorreu um erro ao obter animais!')
            })
    }

    render() {
        return (
            <View style={styles.container}>
                {!this.state.animals && <Text>Não possui nenhum animal disponível para adoção, volte mais tarde</Text>}
                <FlatList
                    style={styles.flatlistDogs}
                    data={this.state.animals}
                    renderItem={({ item }) => <AnimalCard {...item} onNavigateToDogInfo={this.props.onNavigateToDogInfo} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )

    }
}