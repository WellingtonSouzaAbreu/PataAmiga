import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import styles from './styles.js'

export default class AboutTab3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>Como posso ajudar?</Text>
                    <Text style={styles.text}>Nos ajude a divulgar nosso trabalho, quanto mais pessoas conhecerem mais cães terão um novo lar a salvo.</Text>
                    <Text style={styles.title}>Ajude com doações</Text>
                    <Text style={styles.text}>Como somos uma organização sem fins lucrativos, dependemos muito de doações, precisamos de:
                        ração, remédios, panos velhos para os cães e doações em dinheiro de qualquer valor.
                        Toda ajuda é bem vinda!
                    </Text>
                    <Text style={styles.title}>Denuncie</Text>
                    <Text style={styles.text}>Nos ajude a combater o abandono e maus tratos contra os animais.
                        Sua ligação pode salvar uma vida.
                    </Text>
                </ScrollView>
            </View>
        )
    }
}