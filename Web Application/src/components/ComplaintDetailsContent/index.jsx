import React from 'react'
import styles from './styles.module.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MDBInput } from "mdbreact";

function ComplaintDetailsContent(props) {

    const toggleComplaintVerified = () => {
        props.onToggleComplaintVerified(props.complaint.id, !props.complaint.verified)
    }

    return (
        <div className={styles.container}>
            <div className={styles.typeReport}>
                <strong>Abandono</strong>
            </div>
            <MDBInput type="textarea" label="Informações" disabled value={props.complaint.description} className={styles.descriptionReport} />
            <Card className={styles.root}>
                <CardContent>
                    <Typography className={styles.title} color="textSecondary" gutterBottom>
                        <strong>Localização</strong>
                    </Typography>
                    <div className={styles.containerLocation}>
                        <div className={styles.location}>
                            <span>Endereço</span>
                            <strong>{props.complaint.address}</strong>
                        </div>
                        <div className={styles.location}>
                            <span>Local</span>
                            <strong>{props.complaint.locale}</strong>
                        </div>
                        <div className={styles.location}>
                            <span>Bairro</span>
                            <strong>{props.complaint.district}</strong>
                        </div>
                        <div className={styles.location}>
                            <span>Cidade</span>
                            <strong>{props.complaint.city}</strong>
                        </div>
                        <CardActions>
                            <Button size="small" className={styles.btnVerify}
                                onClick={toggleComplaintVerified}
                            >
                                {props.complaint.verified ? '✔ Verificado' : 'Verificar'}
                            </Button>
                        </CardActions>
                    </div>
                </CardContent>

            </Card>
        </div>
    )
}

export default ComplaintDetailsContent