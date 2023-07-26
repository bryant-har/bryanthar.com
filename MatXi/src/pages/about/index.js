import React from 'react';
import { layout } from "../../static/Layout.js"
import { Mail } from 'lucide-react';
import Typewriter from 'typewriter-effect';
About.getLayout = layout

export default function About() {
  return (
    <div className='layout'>
      <p className="text-black text-xl leading-tight font-light mb-16"
      >
        <span className="g">is a </span> software engineer<span className={"g"}>,</span><br />
        designer<span className={"g"}>, and</span><br />
        researcher<span className={"g"}>.</span>
      </p>

      <section className='pb-16'>
        <div className='heading text-2xl text-center mb-2 text-slate-500'>

          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Quick Links').start()
            }}
          />
        </div>
        <div className='flex items-center justify-center space-x-1'>
          <a href='https://github.com/dreamShepherd'><img width="24" height="auto" src='./static/github.png'></img></a>
          <a href='https://lichess.org/@/DreamShepherd'><img width="24" height="auto" src='./static/lichess.ico'></img> </a>
          <a href='https://discordapp.com/users/bryant3435'><img width="24" height="auto" src='./static/discord.png'></img></a>
          <a href='https://www.linkedin.com/in/bryant-har-a260ab186/'><img width="24" height="auto" src='./static/linkedin.png'></img></a>
          <a href='mailto:bryanthar100@gmail.com'><Mail /></a>
        </div>
      </section>

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
    </div>
  );
};


