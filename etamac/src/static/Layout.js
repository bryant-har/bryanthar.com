import Header from './Header'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion"

const Transition = ({ key, children }) => {
  return <motion.div
    initial={{ x: -15, opacity: 0 }}
    animate={{ x: 0, opacity: 1, ease: "easeOut" }}
    transition={{ duration: 0.8, delay: 0.3 }}
    exit={{ y: -20, opacity: 1 }}
    key='key'
  >
    {children}
  </motion.div>
}

const layout = ((page) => (
  <div className='margin' >
    < Header />
    <AnimatePresence>
      {page}
    </AnimatePresence>
  </div >
))

export { layout, Transition }
