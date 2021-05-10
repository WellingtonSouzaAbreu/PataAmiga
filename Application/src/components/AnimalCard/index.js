import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Button } from 'galio-framework';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles.js'

import {baseApiUrl} from './../../common/baseApiUrl.js'

const AnimalCard = (props) => {
    const navigateToDogInfo = () => {
        props.onNavigateToDogInfo(props.id)
    }

    return (
        <View style={styles.dogCard}>
            <View style={styles.dogInfo}>
                <View style={styles.imageContainer}>
                    <Image style={styles.dogImage} source={{ uri: `${baseApiUrl}/animal-pictures/${props.imageURL}` }} />
                </View>
                <View style={styles.infoDogContainer}>
                    <View>
                        <View style={styles.groupInfoIcon}>
                            <Icon name="gitlab" size={20} color='#cdcdcd' style={{ marginRight: 5 }} />
                            <Text>{props.breed}</Text>
                        </View>
                        <View style={styles.groupInfoIcon}>
                            <Icon name="gitlab" size={20} color='#F2C879' style={{ marginRight: 5 }} />
                            <Text>{props.aproximateAge}</Text>
                        </View>
                        <View style={styles.groupInfoIcon}>
                            <Icon name="meh" size={20} color='#cdcdcd' style={{ marginRight: 5 }} />
                            <Text>{props.sex == 'F' ? 'Fêmea' : 'Macho'}</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={navigateToDogInfo}>
                        <Button color="#F1987A" style={styles.buttonDetail} >
                            Detalhes
                    </Button>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AnimalCard