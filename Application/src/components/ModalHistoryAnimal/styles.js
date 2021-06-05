import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 15,
        paddingVertical: 10
    },

    headerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    animalName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'dimgray',
    },

    closeIcon: {
        width: 25,
        height: '100%'
    },

    modalContent: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
    },

    rescueDetailsScroll: {
        padding: 10
    },

    rescueDetails: {
        width: '100%',
        height: 70,
        padding: 5,
        borderRadius: 3,
        borderRightWidth: 3,
        borderRightColor: '#F28749',
        borderBottomWidth: 1,
        borderBottomColor: '#F28749',
        backgroundColor: '#ffff'
    },

    infoRow: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center'
    },

    infoLabel: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#64718C'
    },

    containerHistory: {
        width: '100%',
        padding: 5,

    },

    historyLabel: {
        color: 'dimgray',
        fontSize: 20,
        fontWeight: 'bold',
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1
    },

    historyValue: {
        marginTop: 5,
        color: 'dimgray',
        fontWeight: '600',
        fontSize: 15,
        textAlign: 'justify'
    }

})
export default styles