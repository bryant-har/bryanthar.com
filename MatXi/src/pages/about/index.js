import React from 'react';
import { layout } from "../../static/Layout.js"
import { Mail } from 'lucide-react';
import Typewriter from 'typewriter-effect';
About.getLayout = layout

export default function About() {
  return (
    <div className='layout'>
      <p className="text-black text-xl leading-tight font-light mb-8"
      >
        <span className="gem">is a </span> software engineer<span className="gem">,</span><br />
        designer<span className="gem">, and</span><br />
        researcher<span className="gem">.</span>
      </p>

      <section className='pb-8'>
        <img className='mx-auto rounded-full' height='auto' width='100' src='./static/ico.png'></img>
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

      <div className="space-y-8">
        <section className='space-y-4 text-md'>
          <p>
            Hello! I currently study <span className='text-blue-500'>physics</span> and <span className='text-blue-500'>computer science</span> and <span className='text-blue-500'>English</span> at <b>Cornell University</b>.
            My academic interests involve reinforcement learning and robotics, though I try to be a generalist.
          </p>
          <p>
            My professional experience involves machine learning and statistical analysis.
            I also enjoy chess, tennis, working out memorizing poetry, and listening to music.
          </p>
        </section>
        <section className='text-sm space-y-4'>
          <h1 className='heading'><span className='text-teal-600'>#</span> Programming</h1>
          <p>
            I'm personally interested in <b>web development</b>, <b>robotics</b>, and <b>user design</b>. Check out my <a className='link text-blue-400' href='https://github.com/dreamShepherd'>github</a>. I use the following tools:
          </p>
          <p className='leading-relaxed'>
            <span className='font-semibold'>Languages:</span> Python · Java · C/C++ · HTML/CSS · Javascript · Wolfram Language · LaTeX <br />
            <span className='font-semibold'>Frameworks:</span> NextJS · ReactJS · Tailwind · Bootstrap · ROS · Tensorflow/Keras · PyTorch<br />
            <span className='font-semibold'>Tools/Services:</span>VSCode · Firebase · MongoDB · Heroku · Git/Github

          </p>
        </section>
        <section className=' text-sm space-y-4'>
          <h1 className='heading'> <span className='text-teal-600'>#</span> Research</h1>
          <p>
            My current research focus is applying machine learning to the sciences. I'm part of an ongoing research project applying
            machine learning to optimize <a className='link text-blue-400' href='https://en.wikipedia.org/wiki/Stellarator'>stellarator</a> plasma devices.
          </p>
          <p>
            Previously, I've worked at the <a href='https://www.spacecraftresearch.com/' className='link'><em>Space Systems Design Studio</em></a>,
            studying how we can apply computer vision techniques to map lunar materials and regolith from stereo images. Before that, I worked on
            quantifying decoherence in the variational quantum eigensolver.
          </p>
        </section>

      </div>
    </div >
  );
};


