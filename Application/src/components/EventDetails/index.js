import React from 'react'
import { View, Text, TouchableOpacity, ScrollView,  Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

import { formatDate, formatHour } from './../../common/commonFunctions.js'

export default function EventDetails(props) {

	const sendToWhatsApp = (text) => {
		text = `
*${props.title}*

Venha para o evento do pata amiga!
O evento ocorrerá no dia ${formatDate(props.dateTime)} às ${formatHour(props.dateTime)} horas na cidade de ${props.city}, na rua ${props.address}, bairro ${props.district}

${props.description}

Contamos com a sua participação!`

		Linking.openURL(`whatsapp://send?text=${text}`);
	}

	return (
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
					<TouchableOpacity style={styles.shareButton} onPress={sendToWhatsApp}>
						<Text style={styles.shareLabel}>Compartilhar</Text>
						<Icon name="share-alt" size={20} color='#64718C' style={styles.iconStyle} />
					</TouchableOpacity>
				</View>

			</View>
			<Text style={{ fontWeight: 'bold', fontSize: 16, color: 'dimgray', marginBottom: 5 }}>Descrição</Text>
			<ScrollView style={styles.scrollDescription}>
				<Text style={styles.txtDescription}>
					{props.description}
				</Text>
			</ScrollView>
		</View>


	)

}