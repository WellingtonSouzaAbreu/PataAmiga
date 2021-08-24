import MUIDataTable from "mui-datatables";
import IconButton from '@material-ui/core/IconButton';

import EventDetails from "../../components/EventDetails";

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
  name: "data",
  label: "Data",
  options: {
   filter: true,
   sort: false,
  }
 },
 {
  name: "details",
  label: "Detalhes",
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
  }
 },
];

const data = [
 { name: "Feira de Adoção", data: "15/09/2021", details: DetailButton, edit: IconAction },
 { name: "Bazar Beneficente", data: "12/09/2021", details: DetailButton, edit: IconAction },
 { name: "Feira de Adoção", data: "15/09/2021", details: DetailButton, edit: IconAction },
 { name: "Bazar Beneficente", data: "12/09/2021", details: DetailButton, edit: IconAction },
 { name: "Feira de Adoção", data: "15/09/2021", details: DetailButton, edit: IconAction },
 { name: "Bazar Beneficente", data: "12/09/2021", details: DetailButton, edit: IconAction },
 { name: "Feira de Adoção", data: "15/09/2021", details: DetailButton, edit: IconAction },
 { name: "Bazar Beneficente", data: "12/09/2021", details: DetailButton, edit: IconAction },
 { name: "Feira de Adoção", data: "15/09/2021", details: DetailButton, edit: IconAction },
 { name: "Bazar Beneficente", data: "12/09/2021", details: DetailButton, edit: IconAction },
 { name: "Feira de Adoção", data: "15/09/2021", details: DetailButton, edit: IconAction },
 { name: "Bazar Beneficente", data: "12/09/2021", details: DetailButton, edit: IconAction },
 
];

const options = {
  filterType: 'checkbox',
  elevation: 0,
  filter: false,
  print: false,
  rowsPerPage: 8
};

function DetailButton(){
    return(
        <EventDetails/>
    )
}

function IconAction(){
    return(
        <IconButton aria-label="delete"  color="primary">
            <i className='bx bx-calendar-edit'></i>
        </IconButton> 
    )
}

export default function TableEvents(){
    return(
        <MUIDataTable
            title={"Lista de Publicações"}
            data={data}
            columns={columns}
            options={options}
        />
    )
    
}
