import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        backgroundColor: 'white',
    },

    formCompleteProfile: {
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 100,
        justifyContent: 'center',
    },

    longInput: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#cdcdcd'
    },

    containerShortInput: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    shortInput: {
        width: '48%',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#cdcdcd'
    },

    buttonArea: {
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
        marginBottom: 10
    },

    saveButton: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        backgroundColor: '#64718C',
        borderRadius: 2
    }

})

export default styles