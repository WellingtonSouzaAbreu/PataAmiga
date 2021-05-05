import React, { Component } from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Button } from 'galio-framework';
//import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles.js'

import DogInfo from './../DogInfo'

const DATA = [
    {
        id: '1',
        raça: 'Poddle',
        age: '5 ~ 9 Meses',
        sex: 'Macho'
    },
    {
        id: '2',
        raça: 'Pastor Alemão',
        age: '10 ~ 13 Meses',
        sex: 'Femea'
    },
    {
        id: '3',
        raça: 'Chihuahua',
        age: '10 ~ 13 Meses',
        sex: 'Macho'
    },
    {
        id: '4',
        raça: 'Chihuahua',
        age: '10 ~ 13 Meses',
        sex: 'Macho'
    },

    {
        id: '5',
        raça: 'Chihuahua',
        age: '10 ~ 13 Meses',
        sex: 'Macho'
    },

]

const DogInfox = ({ raça, age, sex }) => (
    <View></View>
);


export default class HomeScreen extends Component {
    render() {

        const renderItem = ({ item }) => (
            <View style={styles.containerListCards}>
                <View style={styles.dogCard}>
                    <View style={styles.dogInfo}>
                        <View style={styles.dogImageContainer}>
                            <Image style={styles.dogImage} source={require('./../../assets/imgs/cao1.jpg')}/>
                        </View>
                        <View style={styles.infoDogContainer}>
                            <View>
                                <View style={styles.groupInfoIcon}>
                                    <Icon name="gitlab" size={20} color='#cdcdcd' style={{ marginRight: 5 }} />
                                    <Text>Vira Lata</Text>
                                </View>
                                <View style={styles.groupInfoIcon}>
                                    <Icon name="gitlab" size={20} color='#F2C879' style={{ marginRight: 5 }} />
                                    <Text>3 a 5 Messdfs</Text>
                                </View>
                                <View style={styles.groupInfoIcon}>
                                    <Icon name="meh" size={20} color='#cdcdcd' style={{ marginRight: 5 }} />
                                    <Text>Macho</Text>
                                </View>
                            </View>

                            <Button color="#F1987A" style={styles.buttonDetail} onPress={() => this.props.navigation.navigate('DogInfo')}>
                                Detalhes
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        );

        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.flatlistDogs}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

            </View>
        )

    }
}