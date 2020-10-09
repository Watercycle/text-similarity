import { Component } from 'solid-js'
import styles from './primary-page.styl'
import { WcButton } from '../../shared-components/button/button'

export interface Props {}

export const PrimaryPage: Component<Props> = props =>
  <>
    <div class={styles.root}>Hello World!</div>
    <WcButton>Some Text</WcButton>
  </>
