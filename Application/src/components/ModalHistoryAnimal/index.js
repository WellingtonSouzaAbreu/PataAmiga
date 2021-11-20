import React from 'react'
import { View,  Text, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './styles'

import { formatDate } from './../../common/commonFunctions.js'
import Slider from './../Slider'

export default function ModalContentHistory(props) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerRow}>
                    <Icon name="dog" size={20} color='dimgray' style={{ marginRight: 10 }} />
                    <Text style={styles.ainmalName}>{props.animalName}</Text>
                </View>
                <TouchableOpacity onPress={props.onCloseModal} style={styles.closeIcon} >
                    <Icon name="times-circle" size={25} color='#F28749' style={{ marginVertical: 2 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.sliderContainer}>
                <Slider {...props.imagesURL} imageSource='publication' />
            </View>
            <ScrollView style={styles.rescueDetailsScroll}>
                <View style={styles.rescueDetails}>
                    <View style={styles.infoRow}>
                        <Icon name="calendar-alt" size={18} color='dimgray' style={{ marginRight: 5 }} />
                        <Text style={styles.infoLabel}>Data do Resgate: </Text>
                        <Text style={styles.infoLabel}>{formatDate(props.dateTime)}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Icon name="first-aid" size={15} color='dimgray' style={{ marginRight: 5 }} />
                        <Text style={styles.infoLabel}>Motivo do resgate: </Text>
                        <Text style={styles.infoLabel}>{props.reasonRescue}</Text>
                    </View>
                </View>

                <ScrollView style={styles.containerHistory}>
                    <Text style={styles.historyLabel}>História</Text>
                    <Text style={styles.historyValue}>{props.history}</Text>
                </ScrollView>

            </ScrollView>
        </View>


    )

}