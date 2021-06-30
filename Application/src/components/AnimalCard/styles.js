import {Dimensions, StyleSheet}  from 'react-native'
import commonStyles from './../../common/commonStyles.js'

const styles = StyleSheet.create({

    dogCard: {
        width: '98%',
        backgroundColor: '#ffffff',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 180,
        paddingHorizontal: 5,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 5,
    },

    dogInfo: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        
        
    },

    imageContainer: {
        flex: 1,
    },

    dogImage: {
        width: '100%',
        height: '96%',
        resizeMode: 'contain'
    },

    infoDogContainer: {
        height: '100%',
        width: '50%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10,
        
    },

    previewInfos: {
        width: '100%',
        height: '70%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        
    },

    txtPreviewInfo: {
        color: '#68788C'
    },

    groupInfoIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2
    },

    buttonDetail: {
        width : '100%',
        height: 30,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F28749',
        
        

        
    }
})

export default styles