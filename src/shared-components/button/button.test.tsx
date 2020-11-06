import { assertMatchesSnapshot } from '../../test-helpers'
import { WcButton } from './button'

describe('WcButton', () => {
    it('renders', () => {
        assertMatchesSnapshot(() => <WcButton>Yeet</WcButton>)
    })
});
