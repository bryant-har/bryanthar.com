import styles from "../static/static.module.css"

About.getLayout = ((page) => page)

import React from 'react';

export default function About() {
  return (
    <>
      <p
        class="layout-md text-black text-xl leading-tight font-light mb-16"
        id="eric-is"
      >
        <span className={styles.g}>is a</span> software engineer<span className={styles.g}>,</span><br />
        researcher<span className={styles.g}>, and</span><br />
        designer<span className={styles.g}>.</span>
      </p>


      <div className=''>
        <p className="text-xs italic">
          This website is powered by NextJS and Tailwind CSS, with MUI components. (Transcribed from svelte)
        </p>
      </div>

    </>
  );
};


