import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import s from './style.pcss'

import Header from '../Header'
import Footer from '../Footer'
import Home from '../Home'

@withRouter
export default class App extends PureComponent {
  render () {
    return (
      <div className={s.app} onClick={this.handle}>
        <div className={s.content}>
          <Header/>
          <Home />
          <Footer/>
        </div>
      </div>
    )
  }
}
