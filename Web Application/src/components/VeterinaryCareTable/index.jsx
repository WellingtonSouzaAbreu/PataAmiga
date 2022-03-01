import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { MDBInput } from "mdbreact";

import styles from './styles.module.css'

import { formatDate } from './../../common/commonFunctions.js'

import CustomModal from './../CustomModal/index.jsx'
import AddVeterinaryCare from './../AddVeterinaryCare/index.jsx'

export default function VeterinaryCareTable(props) {
    const renderAnamnese = (anamnese) => {
        return (
            <div>
                <MDBInput type="textarea" disabled label="Diagnóstico" value={anamnese} className={styles.MedicalCareDiagnostic} />
            </div>
        )
    }

    const onRowDelete = async (rowsSelected) => {
        console.log(rowsSelected)
        let veterinaryCareIdSelected = rowsSelected.data.map(rowSelected => props.veterinaryCares[rowSelected.index].id)

        console.log(veterinaryCareIdSelected)
         props.onDelete(veterinaryCareIdSelected)
    }

    return (
        <MUIDataTable
            title={"Histórico Venterinário"}
            data={props.veterinaryCares}
            columns={[
                /*    {
                       name: "id",
                       label: "ID",
                       options: {
                           filter: false,
                           sort: false,
                           display: false
                       }
                   }, */
                {
                    name: "dateOfVeterinaryCare",
                    label: "Data",
                    options: {
                        filter: true,
                        sort: false,
                        customBodyRender: (dateOfVeterinaryCare) => formatDate(dateOfVeterinaryCare)
                    }
                },
                {
                    name: "needOfHospitalization",
                    label: "Foi internado",
                    options: {
                        filter: true,
                        sort: false,
                        customBodyRender: (needOfHospitalization) => needOfHospitalization ? 'Sim' : 'Não'// TODO colocar ícone
                    }
                },
                {
                    name: "needOfMedication",
                    label: "Foi medicado",
                    options: {
                        filter: true,
                        sort: false,
                        customBodyRender: (needOfMedication) => needOfMedication ? 'Sim' : 'Não'// TODO colocar ícone
                    }
                },
                {
                    name: "totalCostOfTreatment",
                    label: "Custos",
                    options: {
                        filter: true,
                        sort: false,
                        customBodyRender: (totalCostOfTreatment) => `R$ ${totalCostOfTreatment}`
                    }
                },
                {
                    name: "veterinaryName",
                    label: "Veterinário",
                    options: {
                        filter: true,
                        sort: false,
                    }
                },
                {
                    name: "anamnese",
                    label: "Relatório",
                    options: {
                        filter: true,
                        sort: false,
                        display: false
                    }
                },
                {
                    name: "edit",
                    label: "Editar",
                    options: {
                        filter: false,
                        sort: false,
                        customBodyRender: (_, tableMeta) => {
                            const index = tableMeta.rowIndex
                            console.log(props.veterinaryCares)
                            return (
                                <CustomModal width={'80%'} height={'55%'} icon={'fas fa-edit'}>
                                    <AddVeterinaryCare  edit={true} veterinaryCare={props.veterinaryCares[index]} onRefresh={props.onRefresh}/>
                                </CustomModal>
                            )
                        }
                    }
                }
            ]}
            options={{
                filterType: 'checkbox',
                filter: false,
                print: false,
                download: false,
                elevation: 0,
                expandableRows: true,
                expandableRowsHeader: true,
                expandableRowsOnClick: true,
                onRowsDelete: onRowDelete,
                renderExpandableRow: (rowData, rowMeta) => {
                    const colSpan = rowData.length + 1;
                    console.log(rowData)
                    let anamnese = rowData[5]
                    return (
                        <TableRow>
                            <TableCell colSpan={colSpan}>
                                {renderAnamnese(anamnese)}
                            </TableCell>
                        </TableRow>
                    );
                },

            }}
        />
    )
}