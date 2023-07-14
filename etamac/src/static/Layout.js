import Header from './Header'
import React from 'react'

const layout = ((page) => (
  <div className='margin' >
    < Header />
    {page}
  </div >
))

export default layout
