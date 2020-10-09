import { assertMatchesSnapshot } from '../../test-helpers'
import { WcButton } from './button'

it('renders', () => {
  assertMatchesSnapshot(<WcButton>Yeet</WcButton>)
})

