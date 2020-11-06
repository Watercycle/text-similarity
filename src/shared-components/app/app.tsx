import { Component } from 'solid-js'
import { PrimaryPage } from '../../pages/primary-page/primary-page'
import styles from './app.styl'

export interface Props {}

export const App: Component<Props> = props =>
    <PrimaryPage/>
