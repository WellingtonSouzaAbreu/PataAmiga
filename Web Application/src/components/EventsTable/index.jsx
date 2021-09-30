import { useState } from 'react'

import MUIDataTable from "mui-datatables";
import IconButton from '@material-ui/core/IconButton';

import { formatDate } from '../../common/commonFunctions.js'
import EventDetails from "../EventDetails";

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
            ]}
            options={{
                filterType: 'checkbox',
                elevation: 0,
                filter: false,
                print: false,
                rowsPerPage: props.rowsPerPage,
                searchPlaceholder: 'Nome...',
                rowHover: true,
                page: props.currentPage,
                onRowsDelete: onRowDelete,
                customSearch: () => true,
                onSearchChange: (text) => props.onChangeSearchParams({ searchParam: text }),
                onChangePage: (currentPage) => props.onChangePage({ currentPage }),
                onChangeRowsPerPage: (rowsPerPage) => props.onChangeRowsPerPage({ rowsPerPage })
            }}
        />
    )
}

export default EventTable
