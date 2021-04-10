import React, {Component}from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { Button } from 'galio-framework';


const DATA =[
    {
        id: '1', 
        raça: 'Poddle',
        age: '5 ~ 9 Meses',
        sex: 'Macho'
    }, 
    {
        id: '2', 
        raça: 'Pastor Alemão',
        age: '10 ~ 13 Meses',
        sex: 'Femea'
    }, 
    {
        id: '3', 
        raça: 'Chihuahua',
        age: '10 ~ 13 Meses',
        sex: 'Macho'
    }, 
    {
        id: '4', 
        raça: 'Chihuahua',
        age: '10 ~ 13 Meses',
        sex: 'Macho'
    }, 

]

const DogInfo = ({ raça, age, sex }) => (
    <View></View>
  );

  

export default class HomeScreen extends Component {
    render(){
        
        const renderItem = ({ item }) => (
            <View style={styles.containerListCards}>
                <View style={styles.dogCard}>
                    <View style={styles.dogInfo}>
                        <View style={styles.dogImageContainer}>
                            <Image style={styles.dogImage} source={require('./../assets/images/cao1.jpg')}/>
                        </View>
                        <View style={styles.infoDogContainer}>
                            <View>
                                <View style={styles.groupInfoIcon}>
                                    <Icon name="gitlab" size={20} color='#cdcdcd' style={{marginRight: 5}}/>
                                    <Text>Vira Lata</Text>
                                </View>
                                <View style={styles.groupInfoIcon}>
                                    <Icon name="gitlab" size={20} color='#cdcdcd' style={{marginRight: 5}}/>
                                    <Text>3 a 5 Messdfs</Text>
                                </View>
                                <View style={styles.groupInfoIcon}>
                                    <Icon name="meh" size={20} color='#cdcdcd' style={{marginRight: 5}}/>
                                    <Text>Macho</Text>
                                </View>
                            </View>
                            
                            <Button color="#667eea" style={styles.buttonDetail}>Detalhes</Button>


                        </View>
                        
                    </View>

                </View>

            </View>
            
          );

        return(
            <View style={styles.container}>
            <FlatList
                style={styles.flatlistDogs}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
             
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD04A',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },

    dogCard: {
        alignSelf: 'stretch',
        height: 160,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        justifyContent:'center',
        alignItems: 'center',
        flex: 1,paddingHorizontal: 5
    },

    dogInfo: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center'
          
    },

    dogImageContainer: {
        width: 165,
        height: 165
    },

    dogImage: {
        width: 165,
        height: 165,
        resizeMode: 'contain'
    },

    infoDogContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 160,
        padding: 5
    },

    groupInfoIcon: {
       
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2
    },

    containerListCards: {
        padding: 10,
    },


    flatlistDogs: {
        alignSelf: 'stretch',
        flex: 1,
    },

    buttonDetail: {
        width: 140,
        height: 30,
        alignSelf: 'center'
    },
})