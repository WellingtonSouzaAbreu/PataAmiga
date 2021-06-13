import { StyleSheet } from 'react-native'
import commonStyles from './../../common/commonStyles.js'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    scrollContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 10
    },

    imgContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    imgDonation: {
        resizeMode: 'contain',
        width: 150,
        height: 150,
    },
    
    title: {
        fontSize: 17,
        color: '#64718C',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    
    bankInfoContainer: {
        width: '100%',
        height: 60,
        marginTop: 10,
        flexDirection: 'row',
        borderLeftWidth: 3,
        borderBottomWidth: 1,
        borderColor: '#F27F3D',
    },

    iconContainer: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },

    infoGroup: {
        width: '75%',
        height: '100%',
        padding: 5

    },

    formRequest: {
        width: '100%',
        height: 200,
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 4,
        alignItems: 'center',
        padding: 5,
        justifyContent: 'space-around',

    },

    requestInput: {
        width: '100%',
        height: 40,
        backgroundColor: '#f2f2f2',
        textAlign: 'center'
    },

    requestButton: {
        width: '100%',
        height: 40,
        backgroundColor: '#64718c',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'

    }



})

export default styles