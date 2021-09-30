import { Component } from 'react'
import MUIDataTable from "mui-datatables";
import IconButton from '@material-ui/core/IconButton';

import { formatDate } from './../../common/commonFunctions.js'
import CollaboratorEditModal from './../../components/CollaboratorEditModal/index.jsx';

const initialState = {

}

class CollaboratorsTable extends Component {

    state = { ...initialState }

    convertArrayInObject = (dataArray) => {
        return {
            id: dataArray[0],
            name: dataArray[1],
            dateOfBirth: dataArray[2],
            city: dataArray[3],
            cellNumber: dataArray[4],
        }
    }

    onRowDelete = (rowsSelected) => {
        let collaboratorsIdSelected = rowsSelected.data.map(rowSelected => this.props.collaborators[rowSelected.index].id)

        console.log(collaboratorsIdSelected)
        this.props.onDelete(collaboratorsIdSelected)
    }

    render() {
        console.log('Colaborators')
        console.log(this.props.collaborators)
        return (
            <MUIDataTable
                title={"Lista de Voluntários"}
                data={[...this.props.collaborators]}
                columns={[
                    {
                        name: "id",
                        label: "id",
                        options: {
                            filter: false,
                            sort: false,
                            display: true // TODO false
                        }
                    },
                    {
                        name: "name",
                        label: "Nome",
                        options: {
                            filter: true,
                            sort: true,
                            searchable: false
                        }
                    },
                    {
                        name: "dateOfBirth",
                        label: "Nascimento",
                        options: {
                            filter: true,
                            sort: false,
                            searchable: false,
                            customBodyRender: dateOfBirth => formatDate(dateOfBirth)

                        }
                    },
                    {
                        name: "city",
                        label: "Cidade",
                        options: {
                            filter: true,
                            sort: false,
                            searchable: false
                        }
                    },
                    {
                        name: "cellNumber",
                        label: "Telefone",
                        options: {
                            filter: true,
                            sort: false,
                            searchable: false
                        }
                    },

                    {
                        name: "edit",
                        label: "Editar",
                        options: {
                            filter: true,
                            sort: false,
                            searchable: false,
                            customBodyRender: (value, tableMeta) => {
                                console.log(tableMeta)
                                let collaborator = this.convertArrayInObject(tableMeta.rowData)
                                return <CollaboratorEditModal collaborator={collaborator} onRefresh={this.props.onRefresh} />
                            }
                        }
                    },
                ]
                }
                options={{
                    filterType: 'checkbox',
                    elevation: 0,
                    filter: false,
                    print: false,
                    rowsPerPage: this.props.rowsPerPage,
                    searchPlaceholder: 'Nome...',
                    rowHover: true,
                    page: this.props.currentPage,
                    onRowsDelete: this.onRowDelete,
                    customSearch: () => true,
                    onSearchChange: (text) => this.props.onChangeSearchParams({ searchParam: text }),
                    onChangePage: (currentPage) => this.props.onChangePage({ currentPage }),
                    onChangeRowsPerPage: (rowsPerPage) => this.props.onChangeRowsPerPage({ rowsPerPage })
                    // customSearchRender: (text) => <div><input type='text'></input><button>Pesquisar</button></div>
                }}
            />
        )
    }
}

export default CollaboratorsTable