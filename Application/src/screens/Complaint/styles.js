import { StyleSheet } from 'react-native'
import commonStyles from './../../common/commonStyles.js'

const b = { ...commonStyles.activeBorders }

const styles = StyleSheet.create({
    container: {
        // width: '100%',
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
        marginBottom: 40,
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
        height: '70%', // TODO deve ser relativo
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
        width: '100%',
        height: 40,
        marginBottom: 10,
        backgroundColor: '#fff',
        textAlign: 'center',
    },

    descriptionInput: {
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },

    reportButton: {
        width: '95%',
        height: 47,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#64718C',
        marginBottom: 15
    }
})

export default styles