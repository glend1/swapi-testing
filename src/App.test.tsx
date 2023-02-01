import { render, screen } from '@testing-library/react'
import App from './App'

test('renders basic component', () => {
    render(<App />)
    expect(screen.getByText(/star wars/i)).toBeInTheDocument()
})
