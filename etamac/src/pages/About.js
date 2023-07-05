import styles from "../static/static.module.css"
import Header from '../static/Header'
About.getLayout = ((page) => (
  <div>
    <Header />
    {page}
  </div>
))

import React from 'react';

export default function About() {
  return (
    <>
      <Header />
      <p
        className={styles["layout-md"]} class="text-black text-xl leading-tight font-light mb-16"
      >
        <span className={styles.g}>is a</span> software engineer<span className={styles.g}>,</span><br />
        researcher<span className={styles.g}>, and</span><br />
        designer<span className={styles.g}>.</span>
      </p>
      <p>Design Philosophy</p>
      <div className=''>
        <p className="text-xs italic">
          This website is powered by NextJS and Tailwind CSS, with MUI components. (Transcribed from svelte)
        </p>
      </div>

    </>
  );
};


