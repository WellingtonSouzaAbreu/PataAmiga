import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },

    elementBox: {
        height: 150,
        alignSelf: 'stretch',
        backgroundColor: '#DCDCDC',
        justifyContent: 'center',
        alignItems: 'center',
    },

    donationImage: {
        width: '100%',
        height: 120,
        resizeMode: 'contain'
    },

    boxInfoBancaria: {
        width: '100%',
        height: 160,
        backgroundColor: '#ffffff',
        marginTop: 10,
        paddingVertical: 10,
        alignItems: 'center'
    },

    boxRequest: {
        width: '100%',
        height: 300,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10
    }
})

export default styles