import {StyleSheet} from 'react-native'
import commomStyles from './../../common/commonStyles'
const styles = StyleSheet.create({
    container: {
        flex: 1,
         alignItems: 'center',
         padding: 1,
    },

    myNameContainer: {
        width: '95%',
        height: '23%',
        padding: 5,
        flexDirection: 'column',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 3.46,

        elevation: 4,
        justifyContent: 'space-between'
       
        
    },

    txtH1: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#64718C'
    },

    containerName: {
        width: '75%',
        padding: 5,
        
    },

    containerImgName: {
        height: '50%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    logoImg: {
        width: 80,
        height: 80,
      
        resizeMode: 'cover',
        borderRadius: 0,
        
    },

    mmyContactContainer: {
        width: '100%',
        height: '45%',
       
        
    },


    contactBox: {
        width: '100%',
        height: '45%',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5
    },  


 
    containerAlert: {
        width:'95%',
        height: '10%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 2,
        borderLeftColor: '#F27F3D'
    },

    txtAlert: {
        width: '80%',
        height: '100%',
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        color: '#64718C',
        fontWeight: 'bold'
        
    },

    btCompleteRegister: {
        width:'20%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6E6E6',
       
    },

    otherInfoContainer: {
        width: '95%',
        height: '60%',
        padding: 5,
        backgroundColor: 'white'
      
    },

    txtInfo: {
        fontSize: 15,
        color: '#64718C',
        marginRight: 15
    },

    txtInfoNameIndicador: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#64718C'
    },


    boxOtherInfos: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        borderBottomColor: '#cdcdcd',
        borderBottomWidth: 1
    

    },

    boxOtherInfosAndress: {
        width: '100%',
        height: '50%',
       
        
    },

    containerAndress: {
        width: '100%',
        borderRadius: 5,
        height: '20%',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: '#cdcdcd',
        borderBottomWidth: 1
        
    },

    containerButtonsProfile: {
        width: '100%',
        height: '12%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    btnEditProfile: {
        width: '45%',
        height: '100%',
        backgroundColor: '#f2f2f2',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
        
    },

    txtBtn: {
        fontWeight: 'bold',
        color: 'dimgray'
    },


})

export default styles