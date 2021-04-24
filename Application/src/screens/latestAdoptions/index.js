import React,{Component} from 'react'
import { View, Text, ScrollView, Image} from 'react-native'
import styles from './styles'


export default class LastAdoptionsScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{height: 50, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 24}}>Ultimas adoções</Text>
                </View>
                <View style={styles.containerScroll}>
                    <ScrollView style={styles.scrollAdotpion}>
                        <View style={styles.cardAdoption}>
                            <Image style={styles.imgAdoption} source={require('./../../assets/imgs/img1.jpg')}/>
                            <View style={styles.groupInfoAdoption}>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Adotado: </Text>
                                <Text style={{fontSize: 14, fontWeight: 'bold'}}>05/02/2021</Text>
                            </View>
                        </View>
                        <View style={styles.cardAdoption}>
                            <Image style={styles.imgAdoption} source={require('./../../assets/imgs/img3.jpg')}/>
                            <View style={styles.groupInfoAdoption}>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Adotado: </Text>
                                <Text style={{fontSize: 14, fontWeight: 'bold'}}>05/02/2021</Text>
                            </View>
                        </View>
                        <View style={styles.cardAdoption}>
                            <Image style={styles.imgAdoption} source={require('./../../assets/imgs/cao1.jpg')}/>
                            <View style={styles.groupInfoAdoption}>
                                <Text style={{fontSize: 16, fontWeight: 'bold'}}>Adotado: </Text>
                                <Text style={{fontSize: 14, fontWeight: 'bold'}}>05/02/2021</Text>
                            </View>
                        </View>
                    </ScrollView>
                    
                    
                </View>
            </View>
          
        )
    }
}