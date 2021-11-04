import { Component } from 'react'
import MUIDataTable from "mui-datatables";
import { formatDate } from '../../common/commonFunctions.js'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import AdoptionDetails from '../AdoptionDetails/index.jsx';
import AdoptionEditModal from '../AdoptionEditModal/index.jsx';

class AdoptionsTable extends Component {

    onRowDelete = (rowsSelected) => {
        let adoptionsIdSelected = rowsSelected.data.map(rowSelected => this.props.adoptions[rowSelected.index].id)

        console.log(adoptionsIdSelected)
        this.props.onDelete(adoptionsIdSelected)
    }

    render() {
        return (
            <MUIDataTable
                title={"Lista de Animais Adotados"}
                data={this.props.adoptions}
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
                        name: "animalName",
                        label: "Nome",
                        options: {
                            filter: true,
                            sort: true,
                        }
                    },
                    {
                        name: "dateAdoption",
                        label: "Adotado em",
                        options: {
                            filter: true,
                            sort: false,
                            customBodyRender: (dateAdoption) => formatDate(dateAdoption),
                        }
                    },
                    {
                        name: "adopterName",
                        label: "Adotado por",
                        options: {
                            filter: true,
                            sort: false,
                        }
                    },
                    {
                        name: "collaboratorName",
                        label: "Colaborador",
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
                                const index = tableMeta.rowIndex
                                return < AdoptionEditModal adoption={this.props.adoptions[index]} edit={true} onRefresh={this.props.onRefresh} />
                            }
                        }
                    }
                ]}
                options={{
                    filterType: 'checkbox',
                    elevation: 0,
                    filter: false,
                    print: false,
                    rowsPerPage: this.props.rowsPerPage,
                    searchPlaceholder: 'Nome do animal...',
                    rowHover: true,
                    page: this.props.currentPage,
                    elevation: 0,
                    expandableRows: true,
                    expandableRowsHeader: true,
                    expandableRowsOnClick: true,
                    onRowsDelete: this.onRowDelete,
                    customSearch: () => true,
                    onSearchChange: (text) => this.props.onChangeSearchParams({ searchParam: text }),
                    onChangePage: (currentPage) => this.props.onChangePage({ currentPage }),
                    onChangeRowsPerPage: (rowsPerPage) => this.props.onChangeRowsPerPage({ rowsPerPage }),
                    renderExpandableRow: (rowData, rowMeta) => {
                        const colSpan = rowData.length + 1;
                        const currentRowIndex = rowMeta.dataIndex
                        return (
                            <TableRow>
                                <TableCell colSpan={colSpan}>
                                    <AdoptionDetails adoption={this.props.adoptions[currentRowIndex]} />
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