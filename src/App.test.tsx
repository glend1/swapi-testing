import { render, screen } from '@testing-library/react'
import App from './App'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
    rest.get('https://swapi.dev/api/people/1/', (req, res, ctx) => {
        return res(
            ctx.json({
                name: 'Luke Skywalker',
            })
        )
    })
)

describe('<App> without xhr', () => {
    it('Should render the basic app', () => {
        render(<App />)
        expect(screen.getByText(/star wars/i)).toBeInTheDocument()
    })
})
describe('<App> with xhr', () => {
    beforeAll(() => {
        server.listen()
    })
    afterAll(() => {
        server.close()
    })
    it('Should render the name of a star wars character', async () => {
        render(<App />)
        await screen.findByText(/Luke Skywalker/i)
        expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument()
    })
})
