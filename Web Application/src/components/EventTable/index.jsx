import { useState } from 'react'

import MUIDataTable from "mui-datatables";
import IconButton from '@material-ui/core/IconButton';

import { formatDate } from './../../common/commonFunctions.js'
import EventDetails from "../../components/EventDetails";

const columns = [
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

/* const data = [
    { name: "Feira de Adoção", data: "15/09/2021", details: DetailButton, edit: IconAction },
    { name: "Bazar Beneficente", data: "12/09/2021", details: DetailButton, edit: IconAction },
    { name: "Feira de Adoção", data: "15/09/2021", details: DetailButton, edit: IconAction },
    { name: "Feira de Adoção", data: "15/09/2021", details: DetailButton, edit: IconAction },
]; */

function EventTable(props) {

    const setDetailsButton = () => {
        let publicationsWithDetailButton = props.publications.map(publication => {
            publication.details = <EventDetails idPublication={publication.id} />
            return publication
        })

        return publicationsWithDetailButton
    }

    const setEditButton = () => {
        let publicationsWithEditButton = props.publications.map(publication => {
            publication.edit =
                <IconButton aria-label="delete" color="primary" >
                    <i className='bx bx-calendar-edit' onClick={() => window.alert('Tela ainda não disponível')}></i>
                </IconButton>
            return publication
        })

        return publicationsWithEditButton
    }

    let publications = props.publications

    publications = setDetailsButton()
    publications = setEditButton()

    const onRowDelete = (rowsSelected) => {
        console.log(rowsSelected)
        let publicationsIdSelected = rowsSelected.data.map(rowSelected => publications[rowSelected.index].id)

        console.log(publicationsIdSelected)
        props.onDelete(publicationsIdSelected)
    }

    return (
        <MUIDataTable
            title={"Lista de Publicações"}
            data={publications}
            columns={columns}
            options={{
                filterType: 'checkbox',
                elevation: 0,
                filter: false,
                print: false,
                rowsPerPage: 8,
                onRowsDelete: onRowDelete
                /*  onRowSelectionChange: rowSelect, */
            }}
        />
    )
}

export default EventTable
