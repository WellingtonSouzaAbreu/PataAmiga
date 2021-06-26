import React, { useState, } from 'react'
import { View, Modal, Text, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from './styles'

export default function ModalContentEventDetail() {
	return (
		<View style={styles.container}>
			<View style={styles.containerDetail}>
				<View style={styles.boxTitle}>
					<Text style={styles.txtTitle}>Feira de Adoção</Text>
				</View>
				<View style={styles.DetailBox}>
					<View style={styles.groupInfo}>
						<Text style={styles.groupInfoTitle}>Onde vai ser?</Text>
						<Text style={styles.groupInfoSubTitle}>Av. Geraldo Dias Fiusa Nº 5710 - Cidade Alta - Rolim de Moura-RO </Text>
					</View>
					<View style={styles.groupInfo}>
						<Text style={styles.groupInfoTitle}>Quando?</Text>
						<Text style={styles.groupInfoSubTitle}>31/06/2021 - 14Horas</Text>
					</View>
					<Text style={{ fontSize: 15, color: 'dimgray' }}>Contamos com sua participação</Text>

				</View>

			</View>
			<Text style={{ fontWeight: 'bold', fontSize: 16, color: 'dimgray', marginBottom: 5 }}>Descrição</Text>
			<ScrollView style={styles.scrollDescription}>
				<Text style={styles.txtDescription}>
					um used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
				</Text>
			</ScrollView>


		</View>


	)

}