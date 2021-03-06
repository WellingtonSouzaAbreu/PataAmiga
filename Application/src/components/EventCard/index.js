import React, { Component } from 'react'
import { Text, Modal, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './styles.js'

import { baseApiUrl } from '../../common/baseApiUrl.js'
import { formatDate, formatHour } from './../../common/commonFunctions.js'
import EventDetails from '../EventDetails'
import CustomImageView from './../../components/CustomImageView'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const initialState = {
    modalVisible: false,
}

export default class EventCard extends Component {
    state = { ...initialState }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }

    render() {
        const { modalVisible } = this.state


        return (
            <View style={styles.container}>
                <Modal
                    animationType='slide'
                    visible={modalVisible}
                    style={styles.modalContainer}
                    onRequestClose={() => {
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    <EventDetails {...this.props} />
                </Modal>

                    <Image style={styles.eventImage} source={{ uri: `${baseApiUrl}/publication-pictures/${this.props.imagesURL[0].imageURL}` }} />

                <TouchableOpacity style={styles.scroll} onPress={() => this.setModalVisible(true)} >
                    <View style={styles.eventInfo}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <View style={styles.infoRow}>
                            <View style={styles.infoItem}>
                                <Icon name="calendar" size={15} color='gray' style={styles.iconStyle} />
                                <Text style={styles.infoValue}>{formatDate(this.props.startDateTime)}</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Icon name="clock" size={15} color='gray' style={styles.iconStyle} />
                                <Text style={styles.infoValue}>{formatHour(this.props.startDateTime)}</Text>
                            </View>
                        </View>
                        <View style={styles.infoRow}>
                            <View style={styles.infoItem}>
                                <Icon name="map" size={15} color='gray' style={styles.iconStyle} />
                                <Text style={styles.infoValue}>{`${this.props.city} - ${this.props.district}`}</Text>
                            </View>
                        </View>
                        <View style={styles.infoRow}>
                            <View style={styles.infoItem}>
                                <Icon name="map" size={15} color='gray' style={styles.iconStyle} />
                                <Text style={styles.infoValue}>{`${this.props.address}`}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}