import './import-styles'

import { render } from "solid-js/dom"
import { App } from './shared-components/app/app'

const root = document.getElementById("root")
if (!root) throw Error('index.html is has no root element.')
root.innerHTML = '';

const dispose = render(() => App, root)

// Live Reloading / Hot Module Replacement (HMR) Support
if (module.hot) {
    module.hot.accept()

    module.hot.dispose(() => {
        dispose();
        root.textContent = "";
    })
}
