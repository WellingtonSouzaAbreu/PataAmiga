import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, FlatList, Alert } from 'react-native'
import axios from 'axios';
import Icon from 'react-native-vector-icons/Feather'

import styles from './styles.js'

import { baseApiUrl } from './../../common/baseApiUrl.js'
import EventCard from '../../components/EventCard'

const initialState = {
    events: []
}

export default class EventScreen extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await axios(`${baseApiUrl}/publication/event`)
            .then(res => this.setState({ events: res.data }))
            .catch(err => Alert.alert('Erro', 'Não foi possível obter os eventos!'))
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicIator={false}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Image style={styles.headerImage} source={require('./../../assets/imgs/events2.png')} />
                        <Text style={styles.headerText}>Confira aqui nossos proximos eventos</Text>
                    </View>
                    <View style={styles.line}></View>
                    <FlatList
                        style={styles.flatlistEvents}
                        data={this.state.events}
                        renderItem={({ item }) => <EventCard {...item} />}
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        )
    }
}