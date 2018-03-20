import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import s from './style.pcss'

import Header from '../../components/Header'

@withRouter
export default class App extends PureComponent {
  render () {
    return (
      <div className={s.app} onClick={this.handle}>
        <div className={s.content}>
          <Header/>
        </div>
      </div>
    )
  }
}
