import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '15%',

        paddingVertical: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
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