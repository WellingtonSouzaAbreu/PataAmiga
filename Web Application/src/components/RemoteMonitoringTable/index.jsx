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
        name: "data",
        label: "Data",
        options: {
            filter: true,
            sort: true,
        }
    },
];


const data = [
    { data: "15/08/1998", }
];

const initialState = {
}

const RemoteMonitoringInfo = () => {
    return (
        <div className={styles.containerInfos}>
            <div className={styles.carousel}>
                <MDBCarousel showIndicators showControls fade className={styles.carouselImages}>
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId={0}>
                            <MDBCarouselElement src='https://ichef.bbci.co.uk/news/1024/branded_portuguese/F1F2/production/_118283916_b19c5a1f-162b-410b-8169-f58f0d153752.jpg' alt='...' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={1}>
                            <MDBCarouselElement src='https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=680&h=453&crop=1' alt='...' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={2}>
                            <MDBCarouselElement src='https://images.trustinnews.pt/uploads/sites/5/2019/10/tribunais-vao-tratar-animais-de-estimacao-cada-vez-mais-como-criancas-2-1024x687.jpeg' alt='...' />
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </div>
            <div className={styles.observationsContainer}>
                <MDBInput type="textarea" label="Observações" disabled className={styles.observations} />
            </div>

        </div>


    )
}
class RemoteMonitoringTable extends Component {

    state = { ...initialState }


    render() {
        return (
            <MUIDataTable
                title={"Relatórios enviados pelo guardião"}
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
                                <TableCell colSpan={colSpan} className={styles.collapse}>
                                    <RemoteMonitoringInfo />
                                </TableCell>
                            </TableRow>
                        );
                    },
                }}
            />
        )
    }
}

export default RemoteMonitoringTable