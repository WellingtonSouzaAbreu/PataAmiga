import React from 'react'

import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackbar(props) {
    return (
        <Stack spacing={2} sx={{ width: '100%' }} >
            <Snackbar open={props.visible} autoHideDuration={4000} onClose={() => props.onClose(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                key={'bottom', 'right'}
            >
                <Alert onClose={() => props.onClose(false)} severity={props.type} sx={{ width: '100%' }}>
                    {props.message}
                </Alert>
            </Snackbar>
        </Stack>
    )
}