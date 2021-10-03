import { Component } from 'react'
import MUIDataTable from "mui-datatables";
import styles from './styles.module.css'
import { formatDate } from '../../common/commonFunctions.js'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { MDBInput } from "mdbreact";

import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
  } from 'mdb-react-ui-kit';


const columns = [
    {
        name: "data",
        label: "Data",
        options: {
            filter: true,
            sort: true,
        }
    },




];


const data = [
    {  data: "15/08/1998", }  
];




   const initialState = {

}


const VisitRelatory = ()=> {
    return(
        <div>
             <MDBInput type="textarea" label="Observações"  value="É a única rua de Lisboa com o trânsito ao contrário, sabias?1. Não sabia e é por isso queatravesso em frente dos carros tantas vezes. Eles apitam e eu dou uma corrida. 1O trânsito é ao contrário, não me posso esquecer1.A mala esta pesada, cheia de papéis rabiscados que demoro semanas a deitar fora. Nunca se sabe. Nas mãos há sempre um casaco, um cachecol, este inverno está uma treta, nem sequer faz frio. Já não basta a eterna ausência de neve.Às vezes quero calar a cabeça. Ficar com o olhar preso no nada, simplesmente. Nasci com uma estranha deficiência de não conseguir não pensar em nada. Deve ser por isso que os meus sonhos não se entendem, colagens sobrepostas de pensamentos a mil à hora.O mundo inteiro na minha cabeça. A China, o Saramago, o bolo de chocolate e o senhor que passeia o cão à noite. O café da máquina, as saudades da amiga, o verso do poema, os olhos ansiosos do namorado. Israel, EUA, Bruxelas. O Tratado de Lisboa e a série de televisão que deixei de ver. Que será feito da Rory?Desligar a cao? Talvez o David Lynch saiba, ele medita, ele vai criar uma universidade da meditação. Curioso...Mas agora o mundo todo são palavras a esferográfica num bloco azul. 1Por favor, não diga mais, porque eu não sei escolher1. Na minha cabeça cabe o mundo. E o mundo tem que caber em 2000 caracteres. Que será feito da Rory?Desligar a cabeça.Como? Talvez o David Lynch saiba, ele medita, ele vai criar uma universidade da meditação. Curioso...Mas agora o mundo todo são palavras a esferográfica num bloco azul. 1Por favor, não diga mais, porque eu nãoQue será feito daRory?Desligar a cabeça.Como? Talvez o David Lynch saiba, ele medita, ele vai criar uma universidade da meditação. CurMas agora o mundo todo são palavras a esferográfica num bloco azul. 1Por favor, não diga mais, porque eulher1. Na minha cabeça cabe o mundo. E o mundo tem que caber em 2000 caracteres.  sei escolher1. Na minha cabeça cabe o mundo. E o mundo tem que caber em 2000 caracteres. " className={styles.observations} />
        </div>
    )
}




class AdoptionVisitsTable extends Component {

    state = { ...initialState }


    render() {
        return (
            <MUIDataTable
                title={"Visitas"}
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
                                <TableCell colSpan={colSpan} className={styles.collapse}>
                                   <VisitRelatory/>
                                </TableCell>
                            </TableRow>
                            );
                        },
                }}
            />
        )
    }
}

export default AdoptionVisitsTable