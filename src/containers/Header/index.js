import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import s from './style.pcss'
import Logo from '../../public/svg/logo.svg'

import HomeSlide from '../../components/HomeSlide'

@CSSModules(s)
export default class Header extends PureComponent {
  render () {
    const nav = [
      'Продукция',
      'Объекты',
      'Производители',
      'Компания',
      'Комплектующие',
      'Конструкции',
      'Контакты'
    ]
      .map((item, i) =>
        <NavLink
          key={i}
          to='/home'
        >
          {item}
        </NavLink>
      )

    return (
      <header styleName='header'>
        <div styleName='menu'>
          <div styleName='logo'>
            <Logo />
          </div>
          <div styleName='links'>
            {nav}
          </div>
          <div styleName='contact'>
            <button styleName='button'>Оставить заявку</button>
          </div>
        </div>
        <HomeSlide />
      </header>
    )
  }
}
