import 'materialize-css/dist/css/materialize.css'
import 'css-ripple-effect/dist/ripple.css'
import './shared-styles/all.styl'

import { render } from "solid-js/dom"
import { App } from './shared-components/app/app'

const root = document.getElementById("root")
if (!root) throw Error('index.html is has no root element.')

render(App, root)
