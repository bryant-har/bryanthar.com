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

      <div class="layout-md text-lg space-y-14">
        {/* Is layout-md necessary? */}
        <div class="space-y-5">
          <p>
            I currently work on the future of cloud computing at
          </p>
          <p>
            My ambition is to make better interactive software that helps people
            create, collaborate, learn, and meaningfully express what brings them joy.
          </p>
        </div>
      </div>
    </>
  );
};


