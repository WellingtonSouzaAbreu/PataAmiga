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

import {baseApiUrl} from './../../services/baseApiUrl.js'

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

class RemoteMonitoringTable extends Component {

    state = { ...initialState }

    remoteMonitoringInfo = (remoteMonitoring) => {
        console.log(remoteMonitoring)
        return (
            <div className={styles.containerInfos}>
                <div className={styles.carousel}>
                    <MDBCarousel showIndicators showControls fade className={styles.carouselImages}>
                        <MDBCarouselInner>
                            {remoteMonitoring.imagesURL && this.renderRemoteMonitoringImages(remoteMonitoring.imagesURL)}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
                <div className={styles.observationsContainer}>
                    <MDBInput value={remoteMonitoring.observations} type="textarea" label="Observações" disabled className={styles.observations} />
                </div>
            </div>
        )
    }

    renderRemoteMonitoringImages = (images) => {
        return images.map((imageURL, index) => {
            return (
                <MDBCarouselItem itemId={index}>
                    <MDBCarouselElement src={`${baseApiUrl}/remote-monitoring-pictures/${imageURL}`} alt='...' />
                </MDBCarouselItem>
            )
        })
    }

    render() {
        return (
            <MUIDataTable
                title={"Relatórios enviados pelo guardião"}
                data={this.props.remoteMonitorings}
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
                                    {this.remoteMonitoringInfo(this.props.remoteMonitorings[rowMeta.dataIndex])}
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