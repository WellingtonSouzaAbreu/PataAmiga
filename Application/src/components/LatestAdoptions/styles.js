import { StyleSheet } from 'react-native'
import commonStyles from './../../common/commonStyles.js'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        paddingBottom: 5,
        paddingHorizontal: 4
    },

    containerScroll: {
        width: '100%',
        flex: 1,
        // ...commonStyles.activeBorders
    }
})
export default styles