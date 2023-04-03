import {Component} from 'react'

export type ClassComponentProps = {
  href: string
  text: string
}

export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    return (
      <li>
        <a href="http://www.google.com">
          <p>go to Google</p>
        </a>
      </li>
    )
  }
}
