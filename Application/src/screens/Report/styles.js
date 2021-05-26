import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },

    boxElement: {
        width: '100%',
        height: 150,

    },

    boxFormReport: {
        width: '100%',
        padding: 5,
        alignItems: 'center'
    },

    containerRadioSelect: {
        width: '100%',
        height: 90,
        justifyContent: 'space-around',
        backgroundColor: '#fff'
    },

    radioContainer: {
        width: '100%',
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
      
    },
    radioComponent: {
        borderLeftWidth: 4,
        borderBottomColor: '#F28749',
        borderBottomWidth: 1,
        borderLeftColor: '#F28749'
    },

    inputForm: {
        width : '100%',
        height: 250,
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        justifyContent:'space-around'
        
    },

    inputAndress: {
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        textAlign: 'center'
    },

    inputDetailsReport: {
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        textAlign: 'center'
    },

    btnReport: {
        width: '100%',
        height: 40,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#64718C'
    },

    scrollReport: {
        width: '100%',
        height: '100%'
    }
})

export default styles