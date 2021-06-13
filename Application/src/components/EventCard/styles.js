import { Dimensions, StyleSheet } from 'react-native'
import commonStyles from './../../common/commonStyles.js'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height * 0.50,
        backgroundColor: 'white',
        marginBottom: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 3.46,
        elevation: 4,
        borderRadius: 5,
    },
    
    title: {
        color: '#64718C',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 2,
    },
    
    eventImage: {
        resizeMode: 'cover',
        width: '100%',
        height: '60%',
    },
    
    eventInfo: {
        paddingHorizontal: 10,
        height: '40%',
    },
    
    scroll:{
        flex: 1
    },
    
    
    infoRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
    },
    
    iconStyle: {
        marginRight: 7,
    },
    
    infoItem: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    
    infoValue: {
        marginRight: 20,
        color: '#64718C',
    }
    
})

export default styles