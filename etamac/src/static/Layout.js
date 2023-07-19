import Header from './Header'
import React from 'react'
import { motion, useScroll } from "framer-motion"

const layout = ((page) => (
  <div className='margin' >
    < Header />

    <motion.div exit={{ opacity: 0 }} >
      {page}
    </motion.div>
  </div >
))

export default layout
