import { assertMatchesSnapshot } from "../../test-helpers"
import { App } from './app'

describe('App', () => {
    it('renders', () => {
        assertMatchesSnapshot(() => <App>Yeet</App>)
    })    
})
