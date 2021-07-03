import { StyleSheet } from 'react-native'
import commonStyles from './../../common/commonStyles.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#EEE8AA',
    padding: 10
  },

  logoSloganArea: {
    flex: 1,
    width: '100%'
  },

  logoImg: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain'
  },

  sloganArea: {
    flex: 1,
    justifyContent: 'center',
  },

  slogan: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    ...commonStyles.textShadow
  },

  form: {
    backgroundColor: '#ffffff',
    alignSelf: 'stretch',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },

  formTitle: {
    fontSize: 18,
    marginBottom: 10
  },

  button: {
    width: '100%'
  },

  registerButton: {
    marginTop: 10,
    marginBottom: 30
  },

  textButton: {
    textDecorationLine: 'underline'
  }
})

export default styles