import { StyleSheet } from 'react-native'
import commonStyles from './../../common/commonStyles.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    padding: 10,
  },

  logoSloganArea: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoImg: {
    width: '30%',
    height: '30%',
    resizeMode: 'contain',
    marginBottom: 20
  },

  sloganArea: {
    justifyContent: 'center',
    marginBottom: 20,
  },

  slogan: {
    fontSize: 17,
    textAlign: 'center',
    color: '#00326F',
    fontWeight: 'bold'
    // ...commonStyles.textShadow
  },

  form: {
    backgroundColor: '#00326F',
    alignSelf: 'stretch',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },

  formTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#ffffff',
    fontWeight: 'bold'
  },

  forgetPassword: {
    alignSelf: 'flex-start',
    marginVertical: 15
  },

  forgetPasswordText: {
    fontSize: 11,
    color: '#ffffff',
    alignSelf: 'flex-start',
    textDecorationLine: 'underline'
  },

  button: {
    width: '100%',
    marginTop: 20,
  },

  registerButton: {
    marginTop: 10,
    marginBottom: 30
  },

  registerButtonLabel: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14
  },

  textButton: {
    textDecorationLine: 'underline'
  }
})

export default styles