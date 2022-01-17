import { StyleSheet, Dimensions } from 'react-native'
import commomStyles from './../../common/commonStyles'

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1,
        alignItems: 'center',
    },

    headerContainer: {
        padding: 5,
        flexDirection: 'column',
        backgroundColor: 'white',
        margin: 7,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 3.46,

        elevation: 4,
    },

    imageAndNameContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    nameContainer: {
        width: '75%',
        padding: 5,
    },

    logoImg: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 0,
    },

    nameLabel: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#64718C'
    },

    contactContainer: {
        width: '100%',
        marginVertical: 5,
    },

    contactArea: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5
    },

    valueLabel: {
        fontSize: 15,
        color: '#64718C',
    },

    warningContainer: {
        height: '10%',
        margin: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 2,
        borderLeftColor: '#F27F3D',
    },

    warningText: {
        width: '80%',
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        color: '#64718C',
        fontWeight: 'bold'
    },

    buttonCompleteRegister: {
        width: '20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',

    },

    personalInfoContainer: {
        flex: 1,
        padding: 5,
        backgroundColor: 'white'
    },

    infoArea: {
        width: '100%',
        padding: 2,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        borderBottomColor: '#cdcdcd',
        borderBottomWidth: 1
    },

    infoAreaText: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
    },

    label: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#64718C',
    },

    addressInfos: {
        width: '100%',
    },

    addressTitle: {
        width: '50%',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 10,
        color: '#64718C',
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },

    addressInfoRow: {
        paddingVertical: 3,
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: '#cdcdcd',
        borderBottomWidth: 1

    },

    profileButtonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    editProfileButton: {
        padding: 15,
        width: '48%',
        backgroundColor: '#f2f2f2',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    labelButton: {
        fontWeight: 'bold',
        color: 'dimgray'
    },
})

export default styles