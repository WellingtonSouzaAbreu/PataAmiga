import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'

import styles from './styles.js'

export default class AboutTab1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView  showsVerticalScrollIndicator={false}>
                    <Text style={styles.txtStatic}>Pegamos os animais, cuidamos e procuramos um novo lar para eles</Text>
                    <Image style={styles.AboutImg1} source={require('./../../assets/imgs/img2.jpg')} />
                    <Text style={styles.txtStatic}>Pegamos os cães, cuidamos e procuramos um novo lar, Pegamos os cães, cuidamos e procuramos lar</Text>
                    <ScrollView horizontal={true} style={styles.aboutScroll}
                        showsHorizontalScrollIndicator={false}
                    >
                        <Image style={styles.AboutImgScroll} source={require('./../../assets/imgs/img1.jpg')} />
                        <Image style={styles.AboutImgScroll} source={require('./../../assets/imgs/img2.jpg')} />
                        <Image style={styles.AboutImgScroll} source={require('./../../assets/imgs/img3.jpg')} />
                        <Image style={styles.AboutImgScroll} source={require('./../../assets/imgs/img1.jpg')} />
                    </ScrollView>
                </ScrollView>
            </View>
        )
    }
}