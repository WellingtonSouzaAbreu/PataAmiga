import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }, 

    boxTitle: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomWidth: 2,
        borderRightWidth: 2, 
        borderLeftWidth: 2,
        borderBottomColor: 'gray', 
        borderRightColor: 'gray', 
        borderLeftColor: 'gray', 
      
        
    },
    txtTitle: {
        fontWeight: 'bold',
         fontSize: 20,
         color: '#64718C',
         marginHorizontal: 20,
         textAlign: 'center',
         
        
         
    },

    containerDetail: {
        width: '100%',
        alignItems: 'center',
        height: 220,
        borderRadius: 15,
        backgroundColor: '#f2f2f2',
        justifyContent: 'space-between',
        paddingBottom: 10,
        marginBottom: 15,
  
    },

    DetailBox: {
        width: '98%',
        height: '65%',
        backgroundColor: '#f2f2f2',
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },

    groupInfo: {
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center'
    },

    groupInfoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#64718C',
        textAlign: 'center'
    },

    groupInfoSubTitle: {
        color: '#64718C',
         textAlign: 'center'
    },

    scrollDescription: {
        width: '100%',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        borderTopColor: '#f2f2f2'
    },

    txtDescription: {
        fontSize: 15,
        color: '#64718C',
        textAlign: 'center',
        fontWeight: '600'
    },


    
})
export default styles