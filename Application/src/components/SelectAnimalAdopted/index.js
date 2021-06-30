import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { View, Text, Image, FlatList, Alert } from 'react-native'

import styles from './styles.js'

import { baseApiUrl } from '../../common/baseApiUrl.js'
import AnimalCard from '../AnimalCard/index.js'

const SelectAnimalAdopted = (props) => {

    const [animals, setAnimals] = useState(0);

    useEffect(() => {
        if (animals == 0) {
            getAnimalsAdopted()
        }
    })

    console.log(animals)

    const getAnimalsAdopted = async () => {
        console.log('To no s')
        axios.get(`${baseApiUrl}/adoption/animal-select`)
            .then(res => {
                setAnimals(res.data)
            })
            .catch(err => {
                console.log(err)
                Alert.alert('Ops!', 'Ocorreu um erro ao obter animais adotados.')
            })
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>De qual bichinho deseja enviar um relatório?</Text>

            <FlatList
                style={{ flex: 1 }}
                data={animals}
                renderItem={({ item }) => <AnimalCard  {...item} selectButton={true} onSelectAdoption={props.onSelectAdoption} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default SelectAnimalAdopted