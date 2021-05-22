import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    
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

    titleCard: {
        color: '#64718C',
        fontWeight: 'bold',
        fontSize: 15
    },

    subTitleCard: {
        marginRight: 3,
        fontSize: 14,
        color: 'dimgray'
    },

    imgEvent: {
        resizeMode: 'cover',
        width: '100%',
        height: '70%',  

    },

    eventDescription: {
        paddingHorizontal: 10,
       
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