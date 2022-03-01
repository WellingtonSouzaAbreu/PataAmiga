import { Component } from 'react'
import MUIDataTable from "mui-datatables";
import IconButton from '@material-ui/core/IconButton';

import { formatDate } from '../../common/commonFunctions.js'
import EventDetails from "../EventDetails";
import CustomModal from '../CustomModal';
import AddEvent from '../AddEvent/index.jsx';

class EventTable extends Component {

    onRowDelete = (rowsSelected) => {
        let publicationsIdSelected = rowsSelected.data.map(rowSelected => this.props.publications[rowSelected.index].id)

        console.log(publicationsIdSelected)
        this.props.onDelete(publicationsIdSelected)
    }

    render() {
        return (
            <MUIDataTable
                title={"Lista de Publicações"}
                data={this.props.publications}
                columns={
                    [
                        {
                            name: "id",
                            label: "ID",
                            options: {
                                filter: true,
                                sort: true,
                            }
                        },
                        {
                            name: "title",
                            label: "Nome",
                            options: {
                                filter: true,
                                sort: true,
                            }
                        },
                        {
                            name: "startDateTime",
                            label: "Data de início",
                            options: {
                                filter: true,
                                sort: false,
                                customBodyRender: (startDateTime) => formatDate(startDateTime)
                            }
                        },
                        {
                            name: "publicationType",
                            label: "Tipo",
                            options: {
                                filter: true,
                                sort: true,
                                customBodyRender: (publicationType) => publicationType == 'event' ? 'Evento' : 'História'
                            }
                        },
                        {
                            name: "details",
                            label: "Detalhes",
                            options: {
                                filter: true,
                                sort: false,
                                customBodyRender: (value, tableMeta) => {
                                    const index = tableMeta.rowIndex
                                    return <EventDetails idPublication={this.props.publications[index].id} />
                                }
                            }
                        },
                        {
                            name: "edit",
                            label: "Editar",
                            options: {
                                filter: true,
                                sort: false,
                                customBodyRender: (value, tableMeta) => {
                                    const index = tableMeta.rowIndex
                                    return (
                                        <CustomModal width={'80%'} height={'80%'} icon={'fas fa-edit'}>
                                            <AddEvent idPublication={this.props.publications[index].id} edit={true} onRefresh={this.props.onRefresh} />
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

export default EventTable
