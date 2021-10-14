import { Component } from 'react'
import MUIDataTable from "mui-datatables";
import TableRow from "@material-ui/core/TableRow";
import { MDBInput } from "mdbreact";
import TableCell from "@material-ui/core/TableCell";

import styles from './styles.module.css'

import { baseApiUrl } from './../../services/baseApiUrl.js'
import { formatDate } from './../../common/commonFunctions.js'

import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBCarouselElement,
} from 'mdb-react-ui-kit';




class TemporaryHomeTable extends Component {
	renderAnimalDetails(TemporaryHome) {
		console.log(TemporaryHome)
		return (
			<div className={styles.container}>
				<div className={styles.imgsDescription}>
					<div className={styles.containerCarousel} >
						<MDBCarousel showIndicators showControls fade className={styles.carouselImages}>
							<MDBCarouselInner>
								{this.renderCarouselImages(this.props.temporaryHomes[0].animalImageURL)}{/*  // TODO  TemporaryHome Não está declarado na segunda div  */}
							</MDBCarouselInner>
						</MDBCarousel>
					</div>
					<MDBInput type="textarea" label="Descrição" value={this.props.temporaryHomes[0].othersCharacteristics} disabled className={styles.description} />{/* TODO  ^*/}
				</div>
				<div className={styles.otherDescriptions}>
					<div className={styles.group}>
						<div className={styles.divider1}>
							<div className={styles.groupString}>
								<strong>Nome</strong>
								<span>{TemporaryHome.name}</span>
							</div>
							<div className={styles.groupString}>
								<strong>Especie</strong>
								<span>{TemporaryHome.specie}</span>
							</div>
							<div className={styles.groupString}>
								<strong>Cor</strong>
								<span>{TemporaryHome.color}</span>
							</div>
							<div className={styles.groupString}>
								<strong>Sexo</strong>
								<span>{TemporaryHome.sex == 'M' ? 'Macho' : 'Fêmea'}</span>
							</div>
						</div>
						<div className={styles.divider2}>
							<div className={styles.groupString}>
								<strong>Raça</strong>
								{/* <span>{temporaryHome.breed}</span>  */}  {/* TODO TemporaryHome Não está declarado na segunda div */}
								<span>{this.props.temporaryHomes[0].breed}</span>
							</div>
							<div className={styles.groupString}>
								<strong>Idade aproximada</strong>
								<span>{this.props.temporaryHomes[0].aproximateAge} </span>
							</div>
							<div className={styles.groupString}>
								<strong>Castrado</strong>
								<span>{this.props.temporaryHomes[0].castrated ? 'Sim' : 'Não'}</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.divider3}>
					<MDBInput value={`Nome: ${this.props.temporaryHomes[0].adopterName}\nTelefone: ${this.props.temporaryHomes[0].cellNumber}`} type="textarea" label="Voluntário" disabled className={styles.volunter} /> {/* // TODO  temporary não acessível*/}
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
						name: "name",
						label: "Animal",
						options: {
							filter: true,
							sort: true,
						}
					},

					{
						name: "date",
						label: "Desde de",
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
				]}
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
					onRowsDelete: this.onRowDelete,
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