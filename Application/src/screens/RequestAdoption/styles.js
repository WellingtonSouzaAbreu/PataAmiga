import { StyleSheet } from 'react-native'
import commonStyles from './../../common/commonStyles.js'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    imageBrowserContainer: {
        backgroundColor: 'ghostwhite',
        height: '90%',
        padding: 0,
        borderColor: 'white',
        borderWidth: 1
    },

    browserConfirmArea: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        backgroundColor: 'ghostwhite',
        position: 'absolute',
        backgroundColor: 'transparent',
        alignSelf: 'flex-end',
        top: '83%'
    },

    checkIcon: {
        backgroundColor: 'black',
        borderRadius: 60,
        paddingHorizontal: 4,
        color: 'white'
    },

    browserFooter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // ^

    headerElement: {
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'lightblue',
        marginBottom: 20
    },

    imgElement: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',

    },

    containerUpload: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 2,
        paddingBottom: 10,
        borderRadius: 5,
    },

    formUpload: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 5,
    },

    descriptionLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
    },

    descriptionInput: {
        width: '100%',
        padding: 2,
        borderColor: '#f2f2f2',
        borderWidth: 1,
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
        height: '40%',
        marginBottom: 20,
        marginTop: 20,
        marginHorizontal: 2,
    },

    areaButtons:{
        width: '100%',
        marginTop: 30,
        marginBottom: 30,
    },

    selectImageButton: {
        width: '100%',
        height: 47,
        justifyContent: 'center',
        borderRadius: 3,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#64718C',
        marginBottom: 10,
    },

    uploadImageButton: {
        width: '100%',
        height: 47,
        justifyContent: 'center',
        borderRadius: 3,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F27F3D',
    },

    buttonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15
    },
})

export default styles