import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default () => (
	<View style={styles.container}>
		<Text style={{fontSize:25, color:'rgb(0,0,255)'}}>
			Tentei fugir de mim mesmo ,mas onde eu ia eu tava!!!
		</Text>
		<Text style={{fontSize:25, color:'rgb(0,0,255)'}}>
			Visite o node_modules/expo/appEntry.js e mude a rota inicial
		</Text>
	</View>
)

const styles =  StyleSheet.create({
	container:{
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})