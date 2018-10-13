import React, { PureComponent } from 'react'
import MainBrand from '../../components/MainBrand'
import HomeAdvantages from '../../components/HomeAdvantages'
import ProductTypes from '../../components/ProductTypes'
import ApplicationForCalculation from '../../components/ApplicationForCalculation'
import CompanyNumber from '../../components/CompanyNumber'
import MainPageScreenCompany from '../../components/MainPageScreenCompany'
import AdvantageScreen from '../../components/AdvantageScreen'

export default class Home extends PureComponent {
  render () {
    return (
      <div>
        <HomeAdvantages/>
        <ProductTypes/>
        <ApplicationForCalculation/>
        <CompanyNumber/>
        <MainBrand/>
        <MainPageScreenCompany/>
        <AdvantageScreen/>
      </div>
    )
  }
}
