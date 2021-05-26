import { StyleSheet } from 'react-native'

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

    imgDonation:{
        resizeMode: 'contain',
        width: 150,
        height: 150,
    },

    containerInfoBank: {
        width: '100%',
        padding: 5,
        borderRadius: 4,
        height: 200,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
     
        
    },

    txtTitle: {
        fontSize: 17,
        color: '#64718C',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    containerInfoDonate : {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        borderRightWidth: 3,
        borderRightColor: '#F27F3D',
        borderBottomColor: '#F27F3D',
        borderBottomWidth: 1,

    },

    iconContainer: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    infos: {
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

    inputRequest: {
        width: '100%',
        height: 40,
        backgroundColor: '#f2f2f2',
        textAlign: 'center'
    },

    btRequest: {
        width: '100%',
        height: 40,
        backgroundColor: '#64718c',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center'

    }

    
    
})

export default styles