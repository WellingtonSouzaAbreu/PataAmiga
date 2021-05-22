import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    boxContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 180,
        borderBottomColor: '#F28749',
        borderBottomWidth: 2
    },
    imgDefine: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },

    title: {
        fontSize: 19,
        color: 'dimgray',
        fontWeight: 'bold'
    },

    scrollQuestionList: {
        width: '100%',  
    },

    boxQuestion: {
        padding: 3,
        margin: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        
    },
    txtQuestion: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'dimgray'
        

    },

    txtAnswer: {
        fontSize: 16, 
        textAlign: 'center',
        color: '#64718C'
        

    }
})

export default styles