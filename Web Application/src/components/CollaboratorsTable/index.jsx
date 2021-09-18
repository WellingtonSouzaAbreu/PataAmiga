import { Component } from 'react'
import MUIDataTable from "mui-datatables";
import IconButton from '@material-ui/core/IconButton';

import { formatDate } from './../../common/commonFunctions.js'
import CollaboratorEditModal from './../../components/CollaboratorEditModal/index.jsx';

const columns = []
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
        return (
            <MUIDataTable
                title={"Lista de Voluntários"}
                data={this.props.collaborators}
                columns={[
                    {
                        name: "id",
                        label: "id",
                        options: {
                            filter: false,
                            sort: false,
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
                        name: "dateOfBirth",
                        label: "Nascimento",
                        options: {
                            filter: true,
                            sort: false,
                            customBodyRender: dateOfBirth => formatDate(dateOfBirth)
                        }
                    },
                    {
                        name: "city",
                        label: "Cidade",
                        options: {
                            filter: true,
                            sort: false,
                        }
                    },
                    {
                        name: "cellNumber",
                        label: "Telefone",
                        options: {
                            filter: true,
                            sort: false,
                        }
                    },

                    {
                        name: "edit",
                        label: "Editar",
                        options: {
                            filter: true,
                            sort: false,
                            customBodyRender: (value, tableMeta) => {
                                console.log(tableMeta)
                                let collaborator = this.convertArrayInObject(tableMeta.rowData)
                                return <CollaboratorEditModal collaborator={collaborator} onRefresh={this.props.onRefresh}/>
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
                    rowsPerPage: 8,
                    onRowsDelete: this.onRowDelete
                }}
            />
        )
    }
}

export default CollaboratorsTable