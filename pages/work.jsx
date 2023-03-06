import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const work = () => {
  return (
    <div>
        <Hero heading='My Work' message='Checkout some of my awesome projects!' />
        <Portfolio />
    </div>
  )
}

export default work