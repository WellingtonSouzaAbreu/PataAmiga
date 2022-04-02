import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, FlatList, Alert } from 'react-native'
import axios from 'axios';

import styles from './styles.js'

import { baseApiUrl } from './../../common/baseApiUrl.js'
import EventCard from '../../components/EventCard'
import { showAlert } from '../../common/commonFunctions.js';

const initialState = {
    events: []
}

export default class EventScreen extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await axios(`${baseApiUrl}/publication/event`)
            .then(res => this.setState({ events: res.data }))
            .catch(err => showAlert('Erro', 'Não foi possível obter os eventos!'))
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>

                    <Text style={styles.headerText}>Confira aqui nossos proximos eventos</Text>
                </View>
                <View style={styles.line}></View>
                {!this.state.events.length && <Text style={styles.headerText}>Não possui eventos próximos</Text>}
                <FlatList
                    style={styles.flatlistEvents}
                    data={this.state.events}
                    renderItem={({ item }) => <EventCard {...item} />}
                    keyExtractor={item => item.id.toString()}
                >
                </FlatList>
            </View>
        )
    }
}