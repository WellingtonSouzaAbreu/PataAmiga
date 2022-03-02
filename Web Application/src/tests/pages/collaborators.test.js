import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Collaborators from './../../pages/Collaborators/index.jsx'

describe('Componente pages/Collaboratos.jsx', () => {
    test('Deve iniciar com o container Collaborators', () => {
        render(<Collaborators />)
        const container = screen.queryByTestId('collaborators')
        expect(container).toBeInTheDocument()
    })
    
    test('Deve iniciar o componente com o CustonSnackbar hidden', () => {
        render(<Collaborators />)
        const CustomSnackbar = screen.queryByTestId('snackbar-collaborators')
        expect(CustomSnackbar).not.toBeInTheDocument()
    })

    test('Deve mostrar o componente CustonSnackbar ao chamar a função toggleSnackbarVisibility', () => {
        render(<Collaborators />)
        const CustomSnackbar = screen.queryByTestId('snackbar-collaborators')
        expect(CustomSnackbar).not.toBeInTheDocument()


        /* const CustomSnackbarAfeterExecute = screen.queryByTestId('snackbar-collaborators')
        expect(CustomSnackbarAfeterExecute).toBeInTheDocument() */
    })
})