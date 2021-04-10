import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import { Text, View, StyleSheet, Image, ScrollView} from 'react-native'




export default class AboutTab1 extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.txtStatic}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Text>
                <Image style={styles.AboutImg1} source={require('./../assets/images/img2.jpg')}/>
                <Text style={styles.txtStatic}>Lorem ipsum dolor sit amet, consectetur adipiscing elit  Lorem ipsum dolor sit amet, consectetur adipiscing elit,</Text>
                <ScrollView horizontal={true} style={styles.aboutScroll}>
                 <Image style={styles.AboutImgScroll} source={require('./../assets/images/img1.jpg')}/>
                 <Image style={styles.AboutImgScroll} source={require('./../assets/images/img2.jpg')}/>
                 <Image style={styles.AboutImgScroll} source={require('./../assets/images/img3.jpg')}/>
                 <Image style={styles.AboutImgScroll} source={require('./../assets/images/img1.jpg')}/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        
    },

    txtStatic: {
        fontSize: 17,
        color: 'gray',
        textAlign: 'center'
    },  

    AboutImg1: {
        height: 180,
        width: 380,
        marginVertical: 10,
        resizeMode: 'cover'
       
    },

    aboutScroll: {
        marginVertical: 15,
        alignSelf: 'stretch',
        

    },

    AboutImgScroll: {
        width: 110,
        height: 110,
        margin: 5
    },
})