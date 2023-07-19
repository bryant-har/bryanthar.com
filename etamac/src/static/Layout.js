import Header from './Header'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion"

const Transition = ({ keyid, children }) => {
  console.log(keyid)
  return <motion.div
    initial={{ x: -15, opacity: 0 }}
    animate={{ x: 0, opacity: 1, ease: "easeOut" }}
    transition={{ duration: 0.8, delay: 0.3 }}
    exit='exit'
    key={keyid}
  >
    {children}
  </motion.div>
}


// FIX EXIT ANIMATIONS.

const layout = ((page) => (
  <div className='margin' >
    < Header />
    <AnimatePresence>
      {page}
    </AnimatePresence>
  </div >
))

export { layout, Transition }
