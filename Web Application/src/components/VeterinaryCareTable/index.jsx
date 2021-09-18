import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { MDBInput } from "mdbreact";
import styles from './styles.module.css'

function MedicalCareInformations(){
    return(
        <div>
            <MDBInput type="textarea" disabled label="Diagnóstico" value="floquinho comeu uma chave e precisa tomar dipirona  " className={styles.MedicalCareDiagnostic} />
        </div>
    )
}

const columns = [
 {
  name: "data",
  label: "Data",
  options: {
   filter: true,
   sort: true,
  }
 },
 {
    name: "internation",
    label: "Foi internado",
    options: {
     filter: true,
     sort: false,
    }
 },
 {
    name: "medication",
    label: "Foi medicado",
    options: {
     filter: true,
     sort: false,
    }
 },
 {
  name: "costs",
  label: "Custos",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "medic",
  label: "Veterinário",
  options: {
   filter: true,
   sort: false,
  }
 },


];

const data = [
 { data: "18/08/2021", internation: "Sim", medication: "Sim", costs: "347,85", medic: "José Brito", state: "NY" },
 { data: "18/08/2021", internation: "Sim", medication: "Sim", costs: "347,85", medic: "José Brito", state: "NY" },
 { data: "18/08/2021", internation: "Sim", medication: "Sim", costs: "347,85", medic: "José Brito", state: "NY" },

];

const options = {
  filterType: 'checkbox',
  filter: false,
  print:false,
  download: false,
  elevation: 0,
  expandableRows: true,
      expandableRowsHeader: true,
      expandableRowsOnClick: true,
      renderExpandableRow: (rowData, rowMeta) => {
        const colSpan = rowData.length + 1;
        return (
          <TableRow>
            <TableCell colSpan={colSpan}>
              <MedicalCareInformations/>
            </TableCell>
          </TableRow>
        );
      },
     
};



export default function TableMedicalCare(){
    
    return(

        <MUIDataTable
        title={"Histórico Venterinário"}
        data={data}
        columns={columns}
        options={options}
        />
    )
}