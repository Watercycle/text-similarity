import './import-styles'

import { render } from "solid-js/dom"
import { App } from './shared-components/app/app'

const root = document.getElementById("root")!
const dispose = render(() => App, root)

// Live Reloading / Hot Module Replacement (HMR) Support
if (module.hot) {
    module.hot.accept()

    module.hot.dispose(() => {
        dispose();

        // Without this, changes to the style files cause
        // html elements to be duplicates.
        root.textContent = "";
    })
}
