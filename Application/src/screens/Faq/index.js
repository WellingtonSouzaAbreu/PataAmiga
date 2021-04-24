import React,{Component} from 'react'
import { View, Text, ScrollView, Image} from 'react-native'
import styles from './styles'


export default class FaqScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.boxContainer}>
                    <Image style={styles.imgDefine} source={require('./../../assets/imgs/question.png')}/>
                    <Text style={styles.title}>Perguntas frequentes sobre adoção</Text>
                </View>

                <ScrollView style={styles.scrollQuestionList} showsVerticalScrollIndicator={false}>
                    <View style={styles.boxQuestion}>
                        <Text style={styles.txtQuestion}>O quê preciso para adotar um cão? </Text>
                        <Text style={styles.txtAnswer}>Deve gostar de cães, ser responsável e pussuir um ambiente adequado.</Text>
                    </View>

                    <View style={styles.boxQuestion}>
                        <Text style={styles.txtQuestion}>Fiz uma adoção, e agora? </Text>
                        <Text style={styles.txtAnswer}>Você deve garantir a saúde, fornecendo abrigo 
                            e alimentação adequada higiene e vacinas, 
                            levando ao veterinário quando for necessário. 
                            Garantir sua segurança mantendo-o dentro de
                            quintal fechado.
                            Também mante-lo em um ambiente limpo, arejado e 
                            espaçoso.
                        </Text>
                    </View>

                    <View style={styles.boxQuestion}>
                        <Text style={styles.txtQuestion}>Adotei mas me arrependi, oque faço? </Text>
                        <Text style={styles.txtAnswer}>NUNCA em nenhuma circunstância abandona-lo
                            na rua ou entrega-lo a um desconhecido.
                            Devolve-lo a associação em caso de desistência.
                        </Text>
                    </View>

                    <View style={styles.boxQuestion}>
                        <Text style={styles.txtQuestion}>Quanto tempo dura o período de acompanhamento? </Text>
                        <Text style={styles.txtAnswer}>Em média de 3 a 6 meses..</Text>
                    </View>   
                    <View style={styles.boxQuestion}>
                        <Text style={styles.txtQuestion}>Quanto tempo dura o período de acompanhamento? </Text>
                        <Text style={styles.txtAnswer}>Em média de 3 a 6 meses..</Text>
                    </View>   

                    <View style={styles.boxQuestion}>
                        <Text style={styles.txtQuestion}>O quê preciso para adotar um cão? </Text>
                        <Text style={styles.txtAnswer}>Deve gostar de cães, ser responsável e pussuir um ambiente adequado.</Text>
                    </View>   

                    <View style={styles.boxQuestion}>
                        <Text style={styles.txtQuestion}>O quê preciso para adotar um cão? </Text>
                        <Text style={styles.txtAnswer}>Deve gostar de cães, ser responsável e pussuir um ambiente adequado.</Text>
                    </View> 

                </ScrollView>
                
            </View>
        )
    }
}