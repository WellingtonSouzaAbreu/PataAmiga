import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:  'center',
    
    },

    headerElement: {
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: 'lightblue',
        borderWidth: 1,
        marginBottom: 10
    },

    eventImageBanner: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
 

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 2
       
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
    },

    containerScroll: {
        width: '100%',
        flex: 1,
        padding: 10,
 

    },

    cardContainer: {
        width: '100%',
        height: 300,
        backgroundColor: 'white',
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 3.46,
        elevation: 4,
        borderRadius: 5
    },

    imgEvent: {
        resizeMode: 'cover',
        width: '100%',
        height: '70%',  

    },

    eventDescription: {
        paddingHorizontal: 10
    },

    
    infoLocationDate: {
        width: '100%',
        flexDirection: 'column',
        height: '25%'

    },

    groupInfo: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3
       
        
    },


    info1: {
        width: '40%',
        alignItems: 'center',
        flexDirection: 'row',
       
    },
   
})

export default styles