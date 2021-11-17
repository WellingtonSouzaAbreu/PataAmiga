import { StyleSheet } from 'react-native'
import commonStyles from './../../common/commonStyles.js'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    boxFormReport: {
        width: '100%',
        padding: 5,
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        color: '#64718C',
        margin: 5,
        fontWeight: 'bold',
        marginBottom: 20,
        
    },

    containerRadioSelect: {
        width: '100%',
        height: 90,
        justifyContent: 'space-around',
        backgroundColor: '#fff',
    },

    complaintTypeLabel: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#64718c',
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
        borderLeftColor: '#F28749',
        padding: 5,
    },

    inputForm: {
        width: '100%',
        height: '70%', 
        margin: 5,
        justifyContent: 'space-between',
        padding: 0,
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },

    inputArea: {
        width: '95%',
        height: '85%',
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    smallInput: {
        borderWidth: 1,
        borderColor: 'lightgray',
        width: '100%',
        height: 50,
        marginBottom: 30,
        backgroundColor: '#fff',
        textAlign: 'center',
    },

    descriptionInput: {
        borderWidth: 1,
        borderColor: 'lightgray',
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        textAlign: 'center',
    },

    reportButton: {
        width: '95%',
        height: 47,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#64718C',
    },

    legislationArea:{
        marginHorizontal: 10,
    },

    legislationText: {
        fontSize: 15,
        color: '#64718c',
    }
})

export default styles