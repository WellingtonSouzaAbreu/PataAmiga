import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 7,
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
        marginTop: 20,
        marginBottom: 40,
        fontSize: 17,
        color: '#64718C',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    bankInfoContainer: {
        width: '100%',
        height: 80,
        marginTop: 10,
        flexDirection: 'row',
        borderLeftWidth: 3,
        borderBottomWidth: 1,
        borderColor: '#F27F3D',
    },

    pixInfoContainer: {
        width: '100%',
        height: 60,
        marginTop: 10,
        flexDirection: 'row',
        borderLeftWidth: 3,
        borderBottomWidth: 1,
        borderColor: '#F27F3D',
    },

    iconContainer: {
        width: '20%',
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
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'space-between',
    },


    requestInput: {
        width: '100%',
        backgroundColor: '#f2f2f2',
        textAlign: 'center'
    },

    requestButton: {
        width: '100%',
        height: 47,
        backgroundColor: '#64718c',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
    }



})

export default styles