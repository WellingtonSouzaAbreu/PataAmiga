import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },

    headerImage: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        marginVertical: 10,
    },

    title: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 15,
        color: '#64718C',
        marginHorizontal: 10
    },

    formCompleteProfile: {
        width: '100%',
        height: '60%',
        paddingHorizontal: 10,
        marginBottom: 15,
        justifyContent: 'space-between'
    },

    longInput: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#cdcdcd'
    },

    inputRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    shortInput: {
        width: '48%',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2'
    },

    saveButton: {
        width: '95%',
        height: 45,
        backgroundColor: '#64718C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    }

})

export default styles