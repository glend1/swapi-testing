import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App>', () => {
    it('Should render the basic app', () => {
        render(<App />)
        expect(screen.getByText(/star wars/i)).toBeInTheDocument()
    })
})
