import React,{Component} from 'react'
import { View, Text, ScrollView, Image,TouchableOpacity} from 'react-native'
import styles from './styles'
import CardAdopted from './../../components/CardLastAdoption/index'

export default class LastAdoptionsScreen extends Component{
    render(){
        return(
            <View style={styles.container}>

                <View style={styles.containerScroll}>
                    <ScrollView style={styles.scrollAdotpion}>
                         <CardAdopted/>
                         <CardAdopted/>
                         <CardAdopted/>  
                    </ScrollView>
                    
                    
                </View>
            </View>
          
        )
    }
}