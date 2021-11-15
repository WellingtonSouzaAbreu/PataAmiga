import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MDBInput } from "mdbreact";
import { Redirect } from 'react-router-dom';

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import CustomSnackbar from '../../components/CustomSnackbar';

const initialState = {
    user: null,
    password: null,

    redirect: false,

    snackbarVisible: false,
    snackbarMessage: '',
    snackbarType: 'info'
}

class Auth extends Component {

    state = { ...initialState }

    componentDidMount = async () => {
        await this.setDefaultAxiosHeader()
    }

    setDefaultAxiosHeader = async () => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        axios.defaults.headers.common['Authorization'] = 'bearer ' + userData.token
    }

    signin = async () => {
        if (this.state.user != 'Admin') {
            this.toggleSnackbarVisibility(true, `Somente administradores podem logar no sistema!`, 'warning')
            return
        }
        await axios.post(`${baseApiUrl}/signin`, { cellNumber: this.state.user, password: this.state.password })
            .then(async res => {
                await this.toggleSnackbarVisibility(true, `Login realizado com sucesso! Redirecionando...`, 'success')
                await this.setTokenInLocalStorage(res.data)
                await this.redirectToApplication()
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Ocorreu um erro ao tentar realizar login, verifique a sua conexão com a rede!`, err.response.status == 400 ? 'warning' : 'error')
            })
    }

    setTokenInLocalStorage = async (userData) => {
        const userDataJson = JSON.stringify(userData)
        localStorage.setItem('userData', userDataJson)
    }


    redirectToApplication = async () => {
        setTimeout(() => {
            this.setState({ redirect: true })
        }, 1000)
    }

    forgotPassword = async () => {
        this.toggleSnackbarVisibility(true, `Enviando email de recuperação...`, 'success')
        await axios.post(`${baseApiUrl}/generate-recovery-password`, { user: this.state.user })
            .then((res) => {
                console.log(res.data)
                this.toggleSnackbarVisibility(true, `Mensagem de recuperação de senha enviada, verifique seu email`, 'success')
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Ocorreu um erro ao enviar mensagem de recuparação de senha para o usuário ${this.state.user}!`, err.response.status == 400 ? 'warning' : 'error')
            })
    }

    toggleSnackbarVisibility = async (visibility, message, type) => {
        if (visibility) {
            this.setState({ snackbarVisible: visibility, snackbarMessage: message, snackbarType: type })
        } else {
            this.setState({ snackbarVisible: !!visibility })
        }
    }

    render() {
        return (
            <>
                <CustomSnackbar visible={this.state.snackbarVisible} message={this.state.snackbarMessage} type={this.state.snackbarType} onClose={this.toggleSnackbarVisibility} />
                <div className={styles.container}>
                    {this.state.redirect && <Redirect to='/home' />}
                    <div className={styles.authCard}>
                        <div className={styles.titleContainer}>
                            <div className={styles.pipe}></div>
                            <h3 className={styles.title}>Entre</h3>
                        </div>
                        <div className={styles.form}>
                            <MDBInput type='text' label='Usuário' className={styles.input}
                                value={this.state.user} onChange={(e) => this.setState({ user: e.target.value })}
                            />
                            <MDBInput type='password' label='Senha' className={styles.input}
                                value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}
                            />
                            <Link to='/login' >
                                <span className={styles.forgotPassword} onClick={this.forgotPassword}>Esqueceu a senha?</span>
                            </Link>
                            <button className={styles.loginButton} onClick={this.signin}> Entrar</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Auth