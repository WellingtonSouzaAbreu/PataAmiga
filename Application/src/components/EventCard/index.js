import React, {Component}from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { Input, Button } from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './styles.js'

export default class CardEvent extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.eventImage} source={require('./../../assets/imgs/img2.jpg')} />
                <View style={styles.eventDescription}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <View style={styles.publicationInfo}>
                        <View style={styles.infoRow}>
                                <Icon name="calendar" size={14} color='black' style={{ marginRight: 5 }} />
                                <Text>{this.props.dateTime}</Text>
                            <View style={styles.infoItem}>
                                <Icon name="clock" size={14} color='black' style={{ marginRight: 5 }} />
                                <Text>{this.props.dateTime}</Text>
                            </View>
                        </View>
                        <View style={styles.infoRow}>
                            <Icon name="map" size={14} color='black' style={{ marginRight: 5 }} />
                            <Text style={{ marginRight: 3 }}>{`${this.props.city} - ${this.props.district}`}</Text>
                        </View>
                        <View style={styles.infoRow}>
                            <Icon name="map" size={14} color='black' style={{ marginRight: 5 }} />
                            <Text style={{ marginRight: 3 }}>{`${this.props.address}`}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}