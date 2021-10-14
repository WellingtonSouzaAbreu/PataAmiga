import react, { Component } from 'react'
import { MDBInput } from "mdbreact";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { MenuItem } from "@material-ui/core";
import axios from 'axios'


import styles from './styles.module.css'

import { baseApiUrl } from '../../services/baseApiUrl';
import DatePicker from './../CustomDatePicker/index.jsx'

const initialState = {
    name: '',
    cellNumber: '',
    description: '',
    donationType: '',
    date: new Date(),
    donationReceived: false,
}

class AddDonation extends Component {

    state = { ...initialState }

    saveDonation = async () => {
        await axios.post(`${baseApiUrl}/donation`, {...this.state})
            .then(_ => {
                window.alert('Doação registrada com sucesso!')
                this.props.onRefresh(true)
            })
            .catch(err => {
                console.log(err)
                window.alert(err.response.data)
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
                    value={this.state.donationReceived}
                    onChange={(e) => this.setState({ donationReceived: e.target.value })}
                    className={styles.select}
                >
                    <MenuItem value={false}>Não recebido</MenuItem>
                    <MenuItem value={true}>Recebido</MenuItem>
                </Select>
            </FormControl>
        )
    }

    render() {
        return (
            <div className={styles.registerMoneyDonation}>
                {this.props.onDonationsReceivedCard()}
                <div className={styles.registerDonation}>
                    <div className={styles.iconDescriptionCard}>
                        <i className='bx bx-add-to-queue bx-sm'  ></i>
                        <strong>Registrar uma doação</strong>
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
                        <button className={styles.btnSubimit} onClick={this.saveDonation}>FINALIZAR</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddDonation
