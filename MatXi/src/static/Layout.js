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
        animate={{ x: 0, opacity: 1, ease: "linear" }}
        transition={{ duration: 0.25, delay: 0 }}
        exit={{ y: 5, opacity: 0 }}
        key={key}
      >

        {page}
      </motion.div>
    </AnimatePresence>
    <div>
      <p className='link'>
        Email: BJHHar6475@gmail.com
        Github: <a href='https://github.com/dreamShepherd'>@DreamShepherd</a>
        LinkedIn:
        Lichess (Alt): <a href='lichess.org/@/BJHHar6475'>@BJHHar6475</a>


      </p>

    </div>
  </div>
))

export { layout }
