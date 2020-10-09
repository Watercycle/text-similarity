import { Component } from 'solid-js'
import styles from './button.styl'

export interface Props {}

export const WcButton: Component<Props> = props =>
  <button class="btn ripple">{props?.children}</button>
