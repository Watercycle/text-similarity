import { assertMatchesSnapshot } from "../../test-helpers"
import { App } from './app'

it('works', () => {
    assertMatchesSnapshot(() => <App>Yeet</App>)
})
