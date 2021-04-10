import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { Text, View, StyleSheet, Image} from 'react-native'




export default class AboutTab2 extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.txtStatic}>Nós resgatamos cães abandonados e vitimas de maus tratos.</Text>
                <Image style={styles.imgAboutDo} source={require('./../assets/images/abt1.jpg')}/>
                <Text style={styles.txtStatic}>Cuidamos deles até ficarem saudáveis e então procuramos um novo lar para eles.</Text>
                <Image style={styles.imgAboutDoVetor} source={require('./../assets/images/dogVe.png')}/>
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

    txtStatic: {
        textAlign: 'center',
        fontSize: 17,
        color: 'gray'
    },

    imgAboutDo: {
        height: 180,
        width: 380,
        marginVertical: 10,
        resizeMode: 'cover'
    },

    imgAboutDoVetor: {
        width: 150,
        height: 150
    },
    
})