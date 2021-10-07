import { Component } from 'react'
import MUIDataTable from "mui-datatables";
import styles from './styles.module.css'
import { formatDate } from '../../common/commonFunctions.js'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { MDBInput } from "mdbreact";

import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
} from 'mdb-react-ui-kit';


const columns = [
    {
        name: "date",
        label: "Data",
        options: {
            filter: true,
            sort: true,
            customBodyRender: (date) => formatDate(date)
        }
    },
];

const initialState = {}



class AdoptionVisitsTable extends Component {

    state = { ...initialState }

    renderVisitReport = (visitReport) => {
        return (
            <div>
                <MDBInput type="textarea" label="Observações" value={visitReport.report} className={styles.observations} />
            </div>
        )
    }

    render() {
        console.log(this.props.visits)
        return (
            <MUIDataTable
                title={"Visitas"}
                data={this.props.visits}
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
                        console.log(rowMeta)
                        return (
                            <TableRow>
                                <TableCell colSpan={colSpan} className={styles.collapse}>
                                    {this.renderVisitReport(this.props.visits[rowMeta.rowIndex])}
                                </TableCell>
                            </TableRow>
                        );
                    },
                }}
            />
        )
    }
}

export default AdoptionVisitsTable