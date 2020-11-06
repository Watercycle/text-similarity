import { assertMatchesSnapshot } from "../../test-helpers"
import { PrimaryPage } from './primary-page'

describe('PrimaryPage', () => {
    it('renders', () => {
        assertMatchesSnapshot(() => <PrimaryPage/>)
    })    
})
