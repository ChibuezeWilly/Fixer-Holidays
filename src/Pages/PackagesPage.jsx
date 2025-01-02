import React from 'react'
import Packages from '../components/Packages'
import PackagesImage from '../components/PackagesImage'

const PackagesPage = () => {
  return (
    <div>
      <PackagesImage />
      <Packages isHome = {false} />
    </div>
  )
}

export default PackagesPage
