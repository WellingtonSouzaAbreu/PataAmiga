import commonStyles from '../../common/commonStyles.js'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 7
    },

    detailsContainer: {
        width: '100%',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#f2f2f2',
        justifyContent: 'space-between',
        paddingBottom: 10,
        marginBottom: 15,

    },

    titleArea: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomColor: 'gray',
        borderRightColor: 'gray',
        borderLeftColor: 'gray',
    },

    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#64718C',
        marginHorizontal: 20,
        textAlign: 'center',
    },

    details: {
        width: '100%',
        backgroundColor: '#f2f2f2',
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        // ...commonStyles.activeBorders
    },

    infoGroup: {
        marginTop: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    infoLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
        textAlign: 'center'
    },

    darkLabel: {
        marginTop: 10,
        fontSize: 16,
        color: 'dimgray'
    },


    infoValue: {
        color: '#64718C',
        textAlign: 'center'
    },

    shareButton:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },

    shareLabel:{
        color: '#64718C',
        marginRight: 5
    },

    scrollDescription: {
        width: '100%',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        borderTopColor: '#f2f2f2'
    },

    txtDescription: {
        fontSize: 15,
        color: '#64718C',
        textAlign: 'center',
        fontWeight: '600'
    }
})

export default styles