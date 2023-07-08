import styles from "../../static/static.module.css"
import React from 'react';
import layout from "../../static/Layout";

About.getLayout = layout

export default function About() {
  return (
    <>
      <p className="text-black text-xl leading-tight font-light mb-16"
      >
        <span className={styles.g}>is a</span> software engineer<span className={styles.g}>,</span><br />
        researcher<span className={styles.g}>, and</span><br />
        designer<span className={styles.g}>.</span>
      </p>
      <p>Design Philosophy</p>
      <div>
        <p className="text-xs italic">
          This website is powered by NextJS and Tailwind CSS, with MUI components. ~Almost all written by me.
        </p>
      </div>

    </>
  );
};


