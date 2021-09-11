import { Component } from 'react'
import MUIDataTable from "mui-datatables";
import IconButton from '@material-ui/core/IconButton';

import { formatDate } from './../../common/commonFunctions.js'
import CollaboratorEditModal from './../../components/CollaboratorEditModal/index.jsx';

const columns = [
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
            customBodyRender: () => <CollaboratorEditModal />
        }
    },
];

const initialState = {

}

class CollaboratorsTable extends Component {

    state = { ...initialState }

    /* openCollaboratorEditModal = () => {
        return (
            <CollaboratorEditModal />
        )
    } */

    render() {
        return (
            <MUIDataTable
                title={"Lista de Voluntários"}
                data={this.props.collaborators}
                columns={columns}
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

export default CollaboratorsTable