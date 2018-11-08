import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'
import Header from './layout/Header'
import Card from './components/Card'

const App = () => (
  <Fragment>
    <Header />
    <Card />
  </Fragment>
)

export default hot(module)(App)
