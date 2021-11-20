import axios from 'axios'
import React, { Component } from 'react'
import { View, Text,  FlatList, Alert, TouchableOpacity} from 'react-native'
import { Button } from 'galio-framework'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles.js'

import { baseApiUrl } from '../../common/baseApiUrl.js'
import AnimalCard from '../AnimalCard/index.js'

const initialState = {
    animals: []
}

class SelectAnimalAdopted extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.getAnimalsAdopted()
    }

    getAnimalsAdopted = async () => {
        axios.get(`${baseApiUrl}/adoption/animal-select`)
            .then(res => this.setState({ animals: res.data }))
            .catch(err => {
                console.log(err)
                Alert.alert('Ops!', err.response.data)
            })
    }


    render() {

        const WarnWithoutAdoptions = () => {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Ops! Você ainda não realizou nenhuma adoção!</Text>
                    <Text style={{ textAlign: 'center' }}>Faça uma adoção para poder enviar relatórios.</Text>
                    <TouchableOpacity>
                        <Button color='orange' onPress={this.props.onNavigateToBack}>
                            <Icon name='arrow-left' size={30} color='black' />
                        </Button>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View style={styles.container} >
                {
                    this.props.numberOfAdoptions == 0
                        ? <WarnWithoutAdoptions />
                        : <>
                            <Text style={styles.title}>De qual bichinho deseja enviar um relatório?</Text>

                            <FlatList
                                style={{ flex: 1 }}
                                data={this.state.animals}
                                renderItem={({ item }) => <AnimalCard  {...item} selectButton={true} onSelectAdoption={this.props.onSelectAdoption} />}
                                keyExtractor={item => item.id}
                            />
                        </>
                }
            </View>
        )
    }
}

export default SelectAnimalAdopted