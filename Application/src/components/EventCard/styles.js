import { Dimensions, StyleSheet } from 'react-native'
import commonStyles from './../../common/commonStyles.js'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '73%',
        backgroundColor: 'white',
        // marginBottom: 10,

        shadowColor: "#000", // TODO 
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
        height: '50%', // TODO Regular tamanho da imagem
    },
    
    eventInfo: {
        paddingHorizontal: 10,
        // height: '50%', // TODO Regular tamanho da descrição
    },
    
    scroll:{
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