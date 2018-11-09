import React from 'react'
import { shallow } from 'enzyme'
import App from '../../src/client/app'

test('#render <App />', () => {
  shallow(<App />)
})
