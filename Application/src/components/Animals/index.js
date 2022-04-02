import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles.js'

import { baseApiUrl } from '../../common/baseApiUrl.js'
import AnimalCard from '../AnimalCard'
import { showAlert } from '../../common/commonFunctions.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
            <View style={styles.container} >
                <TouchableOpacity onPress={this.loadAnimals} style={styles.refreshButton}>
                    <Icon name='refresh' size={22} />
                </TouchableOpacity>
                {!this.state.animals && <Text>Não possui nenhum animal disponível para adoção, volte mais tarde</Text>}
                {this.state.animals
                    && this.state.animals.map(animal => <AnimalCard {...animal} onNavigateToDogInfo={this.props.onNavigateToDogInfo} />) /*  TODO FlatList parou de funcionar */
                }
            </View>
        )

    }
}

