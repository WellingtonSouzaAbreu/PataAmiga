import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
         alignItems: 'center',
         padding: 1,
    },

    boxTxtSugestion: {
        width: '100%',
        height: 120,
        backgroundColor: '#DCDCDC',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        

    },

    boxInfoName: {
        width: '95%',
        height: 150,
        backgroundColor: 'white',
        marginTop: -50,
        position: 'relative',
        borderRadius: 10,
        padding: 5,
        alignItems: 'center'
    },

    txtTitle: {
        fontSize: 20,
        margin: 5,
        textAlign: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },

    txtInfo: {
        fontSize: 18,
        textAlign: 'center',
        padding: 5
    },

    containerInfos: {
        width: '95%',
        height: 300, 
        
    },

    boxInfo1: {
        width: '100%',
        height: 150,
        
        borderRadius: 5
    },

    titleBox: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        padding: 5,
        backgroundColor: 'white'
    },

    contentBoxInfo: {
        width: '100%',
        height: 110,
        backgroundColor: 'white'
    },
})

export default styles