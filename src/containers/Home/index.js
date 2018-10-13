import React, { PureComponent } from 'react'
import MainBrand from '../../components/MainBrand'
import HomeAdvantages from '../../components/HomeAdvantages'
import ProductTypes from '../../components/ProductTypes'
import ApplicationForCalculation from '../../components/ApplicationForCalculation'

export default class Home extends PureComponent {
  render () {
    return (
      <div>
        <HomeAdvantages/>
        <ProductTypes/>
        <ApplicationForCalculation/>
        <MainBrand/>
      </div>
    )
  }
}
