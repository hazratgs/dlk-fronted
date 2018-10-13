import React, { PureComponent } from 'react'
import MainBrand from '../../components/MainBrand'
import HomeAdvantages from '../../components/HomeAdvantages'
import ProductTypes from '../../components/ProductTypes'

export default class Home extends PureComponent {
  render () {
    return (
      <div>
        <HomeAdvantages/>
        <ProductTypes/>
        <MainBrand />
      </div>
    )
  }
}
