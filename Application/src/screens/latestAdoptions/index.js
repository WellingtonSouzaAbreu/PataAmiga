import React,{Component} from 'react'
import { View, Text, ScrollView, Image} from 'react-native'
import styles from './styles'
import { Button } from 'galio-framework';

export default class LastAdoptionsScreen extends Component{
    render(){
        return(
            <View style={styles.container}>

                <View style={styles.containerScroll}>
                    <ScrollView style={styles.scrollAdotpion}>
                        <View style={styles.cardAdoption}>
                            <Image style={styles.imgAdoption} source={require('./../../assets/imgs/img1.jpg')}/>
                            <View style={styles.groupInfoAdoption}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Adotado: </Text>
                                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>05/02/2021</Text>
                                </View>
                                <Button color="#F1987A" style={styles.btMoreInfo}>História</Button>
                            </View>
                        </View>
                        <View style={styles.cardAdoption}>
                            <Image style={styles.imgAdoption} source={require('./../../assets/imgs/img1.jpg')}/>
                            <View style={styles.groupInfoAdoption}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Adotado: </Text>
                                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>05/02/2021</Text>
                                </View>
                                <Button color="#F1987A" style={styles.btMoreInfo}>História</Button>
                            </View>
                        </View>
                        <View style={styles.cardAdoption}>
                            <Image style={styles.imgAdoption} source={require('./../../assets/imgs/img1.jpg')}/>
                            <View style={styles.groupInfoAdoption}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Adotado: </Text>
                                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>05/02/2021</Text>
                                </View>
                                <Button color="#F1987A" style={styles.btMoreInfo}>História</Button>
                            </View>
                        </View>
                       
                    </ScrollView>
                    
                    
                </View>
            </View>
          
        )
    }
}