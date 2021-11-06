import { Component } from 'react'
import { MDBInput } from "mdbreact";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { MenuItem } from "@material-ui/core";
import axios from 'axios'
import classNames from "classnames";

import styles from './styles.module.css'

import { baseApiUrl } from '../../services/baseApiUrl';
import CustomSnackbar from '../CustomSnackbar';
import DatePicker from './../CustomDatePicker/index.jsx'

const initialState = {
    name: '',
    cellNumber: '',
    description: '',
    donationType: '',
    date: new Date(),
    donationReceived: false,

    snackbarVisible: false,
    snackbarMessage: '',
    snackbarType: 'info',

    editMode: false,
}

class AddDonation extends Component {

    state = { ...initialState }

    componentDidMount = () => {
        if (this.props.edit && !this.state.editMode) {
            this.setState({ ...this.props.donation, editMode: true })
        }
    }

    saveDonation = async () => {
        const donation = {
            name: this.state.name,
            cellNumber: this.state.cellNumber,
            description: this.state.description,
            donationType: this.state.donationType,
            date: this.state.date,
            donationReceived: this.state.donationReceived,
        }

        await axios.post(`${baseApiUrl}/donation`, donation)
            .then(_ => {
                this.toggleSnackbarVisibility(true, `Doação cadastrada com sucesso!`, 'success')
                this.props.onRefresh(true)
            })
            .catch(err => {
                console.log(err)
                this.toggleSnackbarVisibility(true, err.response ? err.response.data : `Erro ao cadastrar doação!`, err.response.status == 400 ? 'warning' : 'error')
            })
    }

    changeDate = (date) => {
        this.setState({ date })
    }

    selectTypeOfDonation = () => {
        return (
            <FormControl className={styles.select} >
                <InputLabel id="demo-simple-select-helper-label">Tipo de doação</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={this.state.donationType}
                    onChange={(e) => this.setState({ donationType: e.target.value })}
                    className={styles.select}
                >
                    <MenuItem value={'money'}>Dinheiro</MenuItem>
                    <MenuItem value={'portion'}>Ração</MenuItem>
                    <MenuItem value={'medicines'}>Remédios</MenuItem>
                    <MenuItem value={'others'}>Outros</MenuItem>
                </Select>
            </FormControl>
        )
    }

    selectStateOfDonation = () => {
        return (
            <FormControl className={styles.select} >
                <InputLabel id="demo-simple-select-helper-label">Estado da doação</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={!!this.state.donationReceived}
                    onChange={(e) => this.setState({ donationReceived: e.target.value })}
                    className={styles.select}
                >
                    <MenuItem value={false}>Não recebido</MenuItem>
                    <MenuItem value={true}>Recebido</MenuItem>
                </Select>
            </FormControl>
        )
    }

    toggleSnackbarVisibility = (visibility, message, type) => {
        if (visibility) {
            this.setState({ snackbarVisible: visibility, snackbarMessage: message, snackbarType: type })
        } else {
            this.setState({ snackbarVisible: !!visibility })
        }
    }

    render() {
        return (
            <div className={classNames(styles.registerMoneyDonation, this.props.edit && styles.wii)}> {/* TODO classNames não funcionam */}
                <CustomSnackbar visible={this.state.snackbarVisible} message={this.state.snackbarMessage} type={this.state.snackbarType} onClose={this.toggleSnackbarVisibility} />
                {!this.props.edit && this.props.onDonationsReceivedCard()}
                <div className={classNames(styles.registerDonation, this.props.edit && styles.wii)}>
                    <div className={styles.iconDescriptionCard}>
                        <i className='bx bx-add-to-queue bx-sm'  ></i>
                        <strong>{this.props.edit ? 'Editar adoção' : 'Registrar uma doação'} </strong>
                    </div>
                    <div className={styles.formRegisterDonation}>
                        <DatePicker label={'Data'}
                            value={this.state.date} onChangeDate={this.changeDate}
                        />
                        {this.selectTypeOfDonation()}
                        {this.selectStateOfDonation()}
                        <MDBInput label="Nome" outline
                            value={this.state.name} onChange={e => this.setState({ name: e.target.value })}
                        />
                        <MDBInput label="Telefone" outline
                            value={this.state.cellNumber} onChange={e => this.setState({ cellNumber: e.target.value })}
                        />
                        <MDBInput type="textarea" label="Descrição" className={styles.descriptionInput}
                            value={this.state.description} onChange={e => this.setState({ description: e.target.value })}
                        />
                        <button className={styles.btnSubimit} onClick={this.saveDonation}>{this.props.edit ? 'Salvar alterações' : 'FINALIZAR'}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddDonation
