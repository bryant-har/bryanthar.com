import React from 'react';
import layout from "../../static/Layout.js"
About.getLayout = layout

export default function About() {
  return (
    <>
      <p className="text-black text-xl leading-tight font-light mb-16 layout"
      >
        <span className="g">is a</span> software engineer<span className={"g"}>,</span><br />
        researcher<span className={"g"}>, and</span><br />
        designer<span className={"g"}>.</span>
      </p>

      <div className="text-lg space-y-14 layout">
        <div className="space-y-5">
          <p>
            <em>I currently work</em>
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


