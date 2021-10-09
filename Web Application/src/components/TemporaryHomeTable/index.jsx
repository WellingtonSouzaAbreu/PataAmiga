import { Component } from 'react'
import MUIDataTable from "mui-datatables";

import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { MDBInput } from "mdbreact";

import styles from './styles.module.css'
import {
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem,
	MDBCarouselElement,
} from 'mdb-react-ui-kit';


const columns = [
	{
		name: "name",
		label: "Animal",
		options: {
			filter: true,
			sort: true,
		}
	},

	{
		name: "data",
		label: "Desde de",
		options: {
			filter: true,
			sort: false,
			//customBodyRender: (startDateTime) => formatDate(startDateTime),
		}
	},
	{
		name: "volunter",
		label: "Voluntário",
		options: {
			filter: true,
			sort: false,
		}
	},




];


const data = [
	{ name: "Jurubinha", data: "15/08/1998", volunter: "Lucas Martins" }
];




const initialState = {

}

function DetailsAnimal() {
	function ImagesCarousel() {
		return (
			<MDBCarousel showIndicators showControls fade className={styles.carouselImages}>
				<MDBCarouselInner>
					<MDBCarouselItem itemId={0}>
						<MDBCarouselElement src='https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg' alt='...' />
					</MDBCarouselItem>
					<MDBCarouselItem itemId={1}>
						<MDBCarouselElement src='https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=680&h=453&crop=1' alt='...' />
					</MDBCarouselItem>
					<MDBCarouselItem itemId={2}>
						<MDBCarouselElement src='https://images.trustinnews.pt/uploads/sites/5/2019/10/tribunais-vao-tratar-animais-de-estimacao-cada-vez-mais-como-criancas-2-1024x687.jpeg' alt='...' />
					</MDBCarouselItem>
				</MDBCarouselInner>
			</MDBCarousel>
		);
	}

	return (
		<div className={styles.container}>
			<div className={styles.imgsDescription}>
				<div className={styles.containerCarousel} >
					<ImagesCarousel />
				</div>
				<MDBInput type="textarea" label="Descrição" value={"ERA UMA VEZ "} disabled className={styles.description} />
			</div>
			<div className={styles.otherDescriptions}>
				<div className={styles.group}>
					<div className={styles.divider1}>
						<div className={styles.groupString}>
							<strong>Nome</strong>
							<span>Floquinho de neve</span>
						</div>
						<div className={styles.groupString}>
							<strong>Especie</strong>
							<span>Canino</span>
						</div>
						<div className={styles.groupString}>
							<strong>Cor</strong>
							<span>Branco</span>
						</div>
						<div className={styles.groupString}>
							<strong>Sexo</strong>
							<span>Macho</span>
						</div>

					</div>
					<div className={styles.divider2}>
						<div className={styles.groupString}>
							<strong>Apelido</strong>
							<span>Floquinho</span>
						</div>
						<div className={styles.groupString}>
							<strong>Raça</strong>
							<span>Indefinido</span>
						</div>
						<div className={styles.groupString}>
							<strong>Idade aproximada</strong>
							<span>16 Meses</span>
						</div>
						<div className={styles.groupString}>
							<strong>Castrado</strong>
							<span>Sim</span>
						</div>
					</div>
				</div>


			</div>
			<div className={styles.divider3}>
				<MDBInput type="textarea" label="Voluntário" disabled className={styles.volunter} />

			</div>
		</div>
	)
}

class TemporaryHomeTable extends Component {

	state = { ...initialState }

	/* openCollaboratorEditModal = () => {
		return (
			<CollaboratorEditModal />
		)
	} */

	render() {
		return (
			<MUIDataTable
				title={"Lista de Lares Temporários"}
				data={data}
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
								<TableCell colSpan={colSpan}>
									<DetailsAnimal />
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