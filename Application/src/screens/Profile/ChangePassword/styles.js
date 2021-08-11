import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    formChangeMailPassword: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'

    },

    formCard: {
        width: '100%',
        // height: '47%',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 3.46,
        elevation: 4,
        borderRadius: 5,
        marginBottom: 10

    },

    cardTitle: {
        fontSize: 17,
        marginBottom: 10,
        color: '#64718C',
        fontWeight: 'bold',
        height: 35
    },

    containerInputs: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputChange: {
        height: 50,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#cdcdcd'
    },

    saveButton: {
        width: '100%',
        height: 45,
        backgroundColor: '#64718C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        margin: 15
    },

    buttonText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold'
    },
})

export default styles