import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { Text, View, StyleSheet} from 'react-native'




export default class AboutTab3 extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.txtTitle}>Como posso ajudar?</Text>
                <Text style={styles.txtText}>Nos ajude a divulgar nosso trabalho, quanto mais pessoas conhecerem mais cães terão um novo lar a salvo.</Text>
                <Text style={styles.txtTitle}>Ajude com doações</Text>
                <Text style={styles.txtText}>Como somos uma organização sem fins lucrativos, dependemos muito de doações, precisamos de:  
ração, remédios, panos velhos para os cães e doações em dinheiro de qualquer valor.
Toda ajuda é bem vinda.</Text>
                <Text style={styles.txtTitle}>Denuncie</Text>
                <Text style={styles.txtText}>Nos ajude a combater o abandono e maus tratos contra os animais. 
Sua ligação pode salvar uma vida.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },

    txtTitle: {
        fontSize: 19,
        color: 'grey',
        fontWeight: '600',
        textAlign: 'center'
    },

    txtText: {
        fontSize: 17,
        color: 'gray',
        textAlign: 'center',
        marginVertical: 10
    },
})