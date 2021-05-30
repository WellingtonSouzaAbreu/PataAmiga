import {StyleSheet} from 'react-native' 

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1

    },

    HeaderModal: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 15,
        paddingVertical: 10
    },

    txtNameAnimal: {
        fontSize: 18, 
        fontWeight: 'bold',
        color: 'dimgray',
    },

    modalContent: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',  
    },

    sliderContainer:{

    },

    rescueDetailsScroll: {
        padding: 10
    },

    BoxDetailsOfRescue: {
        width: '100%',
        height: 70,
        padding: 5,
        borderRadius: 3,
        borderRightWidth: 3,
        borderRightColor: '#F28749',
        borderBottomWidth: 1, 
        borderBottomColor: '#F28749',
        backgroundColor: '#ffff'
    },

    containerHistory: {
        width: '100%',
        padding: 5,
        
    },

    txtHistory: {
        color: 'dimgray',
        fontWeight: '600', 
        fontSize: 15,
        textAlign: 'justify'
    }

})
export default styles