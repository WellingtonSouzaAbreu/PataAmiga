import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageBrowserContainer: {
        backgroundColor: 'rgba(0,0,0,0.1)',
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
        flex: 1,
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#F27F3D'

    },

    imgElement: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },

    containerUpload: {
        flex: 1,
        /*  width: '100%',
         height: '100%', */
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 5,
    },

    formUpload: {
        flex: 1,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',

    },

    observationsInput: {
        width: '100%',
        borderColor: '#f2f2f2',
        borderWidth: 1,
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
        marginVertical: 40,
        height: '50%'
    },

    areaButtons: {
        width: '100%',
        height: '30%',
        justifyContent: 'flex-end',
    },

    selectImageButton: {
        width: '100%',
        height: 47,
        justifyContent: 'center',
        borderRadius: 3,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#64718C',
        marginBottom: 10
    },

    uploadImageButton: {
        width: '100%',
        height: 47,
        justifyContent: 'center',
        borderRadius: 3,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#F27F3D',
        marginBottom: 5,
    },

    buttonText: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 15
    },

})

export default styles