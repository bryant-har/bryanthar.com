import Header from './Header'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
// FIX EXIT ANIMATIONS.

const layout = ((page, key) => (
  <div className='margin' >
    < Header />
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1, ease: "easeOut" }}
        transition={{ duration: 0.35, delay: 0.35 }}
        exit={{ y: 5, opacity: 0 }}
        key={key}
      >

        {page}
      </motion.div>
    </AnimatePresence>
  </div>
))

export { layout }
