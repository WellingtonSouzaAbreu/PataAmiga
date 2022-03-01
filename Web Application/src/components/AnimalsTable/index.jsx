import { Component } from 'react'
import MUIDataTable from "mui-datatables";

import CustomModal from './../CustomModal'
import AddAnimal from './../AddAnimal'
import AnimalDetailsContent from "./../AnimalDetailsContent/index.jsx";

const initialState = {}

class AnimalsTable extends Component {

    state = { ...initialState }

    onRowDelete = (rowsSelected) => {
        console.log(rowsSelected)
        let animalsIdSelected = rowsSelected.data.map(rowSelected => this.props.animals[rowSelected.index].id)

        console.log(animalsIdSelected)
        this.props.onDelete(animalsIdSelected)
    }

    render() {
        console.log(this.props.animals)
        return (
            <MUIDataTable
                title={"Lista de Animais"}
                data={this.props.animals}
                downloadOptions={{
                    filename: 'Animais.csv',
                    separator: ',',
                    filterOptions: {
                        useDisplayedColumnsOnly: false,
                        useDisplayedRowsOnly: true,
                    }
                }}
                columns={[
                    {
                        name: "id",
                        label: "ID",
                        options: {
                            filter: true,
                            sort: true,
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
                            customBodyRender: (_, tableMeta) => (
                                <CustomModal width={'80%'} height={'80%'} icon={'fas fa-info'}>
                                    <AnimalDetailsContent idAnimal={tableMeta.rowData[0]} /> {/* Id do registro */}
                                </CustomModal>
                            )
                        }
                    },
                    {
                        name: "edit",
                        label: "Editar",
                        options: {
                            filter: true,
                            sort: false,
                            customBodyRender: (_, tableMeta) => {
                                const index = tableMeta.rowIndex
                                return (
                                    <CustomModal width={'80%'} height={'80%'} icon={'fas fa-edit'}>
                                        <AddAnimal idAnimal={this.props.animals[index].id} edit={true} onRefresh={this.props.onRefresh} />
                                    </CustomModal>
                                )
                            }
                        }
                    },
                ]}
                options={{
                    filterType: 'checkbox',
                    elevation: 0,
                    filter: false,
                    print: false,
                    rowsPerPage: 8,
                    onRowsDelete: this.onRowDelete
                }}
            />
        )
    }

}

export default AnimalsTable
