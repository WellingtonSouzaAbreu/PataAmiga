import { Component } from 'react'
import MUIDataTable from "mui-datatables";
import IconButton from '@material-ui/core/IconButton';

import AnimalDetails from "./../AnimalDetails/index.jsx";

const columns = [];
const options = {}

const initialState = {}

class AnimalsTable extends Component {

    state = { ...initialState }



    render() {
        console.log(this.props.animals)
        return (
            <MUIDataTable
                title={"Lista de Animais"}
                data={this.props.animals}
                columns={[
                    {
                        name: "id",
                        label: "Nome",
                        options: {
                            filter: true,
                            sort: true,
                            display: false
                        }
                    },
                    {
                        name: "name",
                        label: "Nome",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
                    {
                        name: "specie",
                        label: "Espécie",
                        options: {
                            filter: true,
                            sort: false,
                        }
                    },
                    {
                        name: "breed",
                        label: "Raça",
                        options: {
                            filter: true,
                            sort: false,
                        }
                    },
                    {
                        name: "sex",
                        label: "Sexo",
                        options: {
                            filter: true,
                            sort: false,
                        }
                    },
                    {
                        name: "aproximateAge",
                        label: "Idade",
                        options: {
                            filter: true,
                            sort: false,
                        }
                    },
                    {
                        name: "details",
                        label: "Mais Informações",
                        options: {
                            filter: true,
                            sort: false,
                            customBodyRender: (value, tableMeta) => <AnimalDetails idAnimal={tableMeta.rowData[0]}/> // Id do registro
                        }
                    },
                ]}
                options={{
                    filterType: 'checkbox',
                    elevation: 0,
                    filter: false,
                    print: false,
                    rowsPerPage: 8
                }}
            />
        )
    }

}

export default AnimalsTable
