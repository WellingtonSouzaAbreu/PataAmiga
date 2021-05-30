import React, {useState, } from 'react'
import { View, Modal, Text, TouchableOpacity,ScrollView, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './styles'

import {formatDate, formatHour} from './../../common/commonFunctions.js'

export default function EventDetails(props) {

  console.log(props)
    return(
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
              <View style={styles.titleArea}>
                 <Text style={styles.title}>{props.title}</Text>
              </View>
              <View style={styles.details}>
                  <View style={styles.infoGroup}>
                    <Text style={styles.infoLabel}>Onde vai ser?</Text>
                    <Text style={styles.infoValue}>{`${props.city} - ${props.district}`}</Text>
					<Text style={styles.infoValue}>{props.address}</Text>
                  </View> 
                  <View style={styles.infoGroup}>
                    <Text style={styles.infoLabel}>Quando?</Text>
                    <Text style={styles.infoValue}>{formatDate(props.dateTime)} - {formatHour(props.dateTime)}</Text>
                  </View> 
                  <Text style={styles.darkLabel}>Contamos com sua participação</Text>
              </View>
               
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'dimgray', marginBottom:5}}>Descrição</Text>
            <ScrollView style={styles.scrollDescription}>
                <Text style={styles.txtDescription}> 
                    {props.description}
                </Text>
            </ScrollView>

            
        </View>
            
       
    )
    
}