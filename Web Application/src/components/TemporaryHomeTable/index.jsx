import { Component } from 'react'
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import { MDBInput } from "mdbreact";
import TableCell from "@material-ui/core/TableCell";
import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBCarouselElement,
} from 'mdb-react-ui-kit';

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import { formatDate } from './../../common/commonFunctions.js'
import TemporaryHomeEditModal from './../TemporaryHomeEditModal'

class TemporaryHomeTable extends Component {
	renderAnimalDetails(temporaryHome) {
		console.log(temporaryHome)
		return (
			<div className={styles.container}>
				<div className={styles.imgsDescription}>
					<div className={styles.containerCarousel} >
						<MDBCarousel showIndicators showControls fade className={styles.carouselImages}>
							<MDBCarouselInner>
								{this.renderCarouselImages(temporaryHome.animalImageURL)}
							</MDBCarouselInner>
						</MDBCarousel>
					</div>
					<MDBInput type="textarea" label="Descrição" value={temporaryHome.othersCharacteristics} disabled className={styles.description} />{/* TODO  ^*/}
				</div>
				<div className={styles.otherDescriptions}>
					<div className={styles.group}>
						<div className={styles.divider1}>
							<div className={styles.groupString}>
								<strong>Nome</strong>
								<span>{temporaryHome.animalName}</span>
							</div>
							<div className={styles.groupString}>
								<strong>Especie</strong>
								<span>{temporaryHome.specie}</span>
							</div>
							<div className={styles.groupString}>
								<strong>Cor</strong>
								<span>{temporaryHome.color}</span>
							</div>
							<div className={styles.groupString}>
								<strong>Sexo</strong>
								<span>{temporaryHome.sex == 'M' ? 'Macho' : 'Fêmea'}</span>
							</div>
						</div>
						<div className={styles.divider2}>
							<div className={styles.groupString}>
								<strong>Raça</strong>
								<span>{temporaryHome.breed}</span>
							</div>
							<div className={styles.groupString}>
								<strong>Idade aproximada</strong>
								<span>{temporaryHome.aproximateAge} </span>
							</div>
							<div className={styles.groupString}>
								<strong>Castrado</strong>
								<span>{temporaryHome.castrated ? 'Sim' : 'Não'}</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.divider3}>
					<MDBInput value={`Nome: ${temporaryHome.adopterName}\nTelefone: ${temporaryHome.cellNumber}`} type="textarea" label="Voluntário" disabled className={styles.volunter} /> {/* // TODO  temporary não acessível*/}
				</div>
			</div>
		)
	}

	renderCarouselImages = (imageUrl) => {
		return (
			< MDBCarouselItem itemId={0} >
				<MDBCarouselElement src={`${baseApiUrl}/animal-pictures/${imageUrl}`} alt='...' />
			</MDBCarouselItem >
		)
	}

	onRowDelete = (rowsSelected) => {
		let temporaryHomesIdSelected = rowsSelected.data.map(rowSelected => this.props.temporaryHomes[rowSelected.index].id)

		console.log(temporaryHomesIdSelected)
		this.props.onDelete(temporaryHomesIdSelected)
	}

	render() {
		return (
			<MUIDataTable
				title={"Lista de Lares Temporários"}
				data={this.props.temporaryHomes}
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
						label: "Animal",
						options: {
							filter: true,
							sort: true,
						}
					},

					{
						name: "date",
						label: "Data",
						options: {
							filter: true,
							sort: false,
							customBodyRender: (date) => formatDate(date),
						}
					},
					{
						name: "adopterName",
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
								return <TemporaryHomeEditModal temporaryHome={this.props.temporaryHomes[index]} edit={true} onRefresh={this.props.onRefresh} />
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
						return (
							<TableRow>
								<TableCell colSpan={colSpan}>
									{this.renderAnimalDetails(this.props.temporaryHomes[rowMeta.dataIndex])}
								</TableCell>
							</TableRow>
						);
					},
				}}
			/>
		)
	}
}

export default TemporaryHomeTable