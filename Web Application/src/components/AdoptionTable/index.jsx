import { Component } from 'react'
import MUIDataTable from "mui-datatables";
import { formatDate } from '../../common/commonFunctions.js'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import AdoptionDetails from '../AdoptionDetails/index.jsx';

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
        name: "adoptedDay",
        label: "Adotado em",
        options: {
            filter: true,
            sort: false,
            //customBodyRender: (startDateTime) => formatDate(startDateTime),
        }
    },
    {
        name: "guardianAnimal",
        label: "Adotado por",
        options: {
            filter: true,
            sort: false,
        }
    },

    {
        name: "volunter",
        label: "Colaborador",
        options: {
            filter: true,
            sort: false,
        }
    },


];


const data = [
    { name: "Jurubinha", adoptedDay: "15/08/1998", guardianAnimal: "Lucas Martins", volunter: "José Silva"}  
];




   const initialState = {

}



class AdoptionsTable extends Component {

    state = { ...initialState }

    render() {
        return (
            <MUIDataTable
                title={"Lista de Animais Adotados"}
                data={data}
                columns={columns}
                options={{
                    filterType: 'checkbox',
                    elevation: 0,
                    filter: false,
                    print: false,
                    rowsPerPage: 8,
                    elevation: 0,
                    expandableRows: true,
                        expandableRowsHeader: true,
                        expandableRowsOnClick: true,
                        renderExpandableRow: (rowData, rowMeta) => {
                            const colSpan = rowData.length + 1;
                            return (
                            <TableRow>
                                <TableCell colSpan={colSpan}>
                                    <AdoptionDetails/>
                                </TableCell>
                            </TableRow>
                            );
                        },
                }}
            />
        )
    }
}

export default AdoptionsTable