import { Component } from 'react'
import MUIDataTable from "mui-datatables";

import { formatDate } from './../../common/commonFunctions.js'
import CustomModal from './../../components/CustomModal';
import AddCollaborator from './../AddCollaborator'

const initialState = {

}

class CollaboratorsTable extends Component {

    state = { ...initialState }

    onRowDelete = (rowsSelected) => {
        let collaboratorsIdSelected = rowsSelected.data.map(rowSelected => this.props.collaborators[rowSelected.index].id)

        console.log(collaboratorsIdSelected)
        this.props.onDelete(collaboratorsIdSelected)
    }

    render() {
        console.log(this.props.collaborators)
        return (
            <MUIDataTable
                title={"Lista de Voluntários"}
                data={[...this.props.collaborators]}
                downloadOptions={{
                    filename: 'Colaboradores.csv',
                    separator: ',',
                    filterOptions: {
                        useDisplayedColumnsOnly: true,
                        useDisplayedRowsOnly: false,
                    }
                }}
                columns={
                    [
                        {
                            name: "id",
                            label: "ID",
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
                                customBodyRender: (_, tableMeta) => {
                                    const index = tableMeta.rowIndex
                                    return (
                                        <CustomModal  width={'50%'} height={'53%'} icon={'fas fa-edit'}>
                                            <AddCollaborator collaborator={this.props.collaborators[index]} edit={true} onRefresh={this.props.onRefresh} />
                                        </CustomModal>
                                    )
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
                }}
            />
        )
    }
}

export default CollaboratorsTable