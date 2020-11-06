import { Component } from 'solid-js'
import styles from './primary-page.styl'
import { WcButton } from '../../shared-components/button/button'

export interface Props {}

export const PrimaryPage: Component<Props> = props =>
  <div class={styles.root}>
    <div>Hello World!</div>

    <div class="card-panel green">
      <div class="input-field">
        <label for="text1" class="active">Text 1</label>
        <input id="text1" type="text" placeholder="Insert some text here"/>
      </div>
    </div>

    <WcButton>Some Text</WcButton>
  </div>
