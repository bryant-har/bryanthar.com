import data from './resume.yaml'
import NoLinkList from '../../../static/NoLinkList'
import { layout } from "../../../static/Layout.js"
Writing.getLayout = layout

export default function Writing() {
  return <>
    <section class="layout-md py-12">
      <h2 class="heading2">Education</h2>

      <div class="mb-4">
        <div class="flex justify-between items-end">
          <h3 class="text-black text-lg">Cornell University</h3>
          <div class="text-neutral-500 mb-0.5">2021 — 2025</div>
        </div>
        <p class="byline">B.S. in Computer Science, Engineering Physics, English</p>
      </div>

      <p>GPA: 4.1/4.2, Award for Excellence in Physics, Deans List, all years eligible.</p>

      <h2 class="font-medium mt-4 mb-1">Teaching:</h2>
      <ul>
        <li>
          TA for CS 2110 (Data Structures and Algorithms), Fall 2023
        </li>
        <li>
          Advised for <a class="link" href="https://en.wikipedia.org/wiki/Governor%27s_School_of_New_Jersey">
            Governor's School of the Scienes (NJGSS)</a>, Summer 2022
        </li>
      </ul>

      <a href='#coursework'><p className=' font-mediium mt-4 mb-1 link'>Technical Coursework</p></a>
      <h2 class="font-medium mt-4 mb-1">Graduate-level technical coursework:</h2>
      <ul>
        <li></li>
      </ul>
    </section>
    <section class="layout-md py-12">
      <h2 class="heading">Professional Experience</h2>
      {/* Stealth Startup. Description: Refined api and developed react front-end for document processing for a stealth startup. */}
      {/* Invictis BCI, Biotechnology startup ML with document processing */}
      {/* Tutor for MyMentor. Tutored International students in durign school year */}

    </section>
    <section class="layout-md py-12">
      <h2 class="heading">Research Experience</h2>
    </section>

    <section><h1 className="heading">Assorted Accomplishments and Activities</h1>
      <ul>
        {data.random.map((item, index) => <li key={index} className='flex'>
          <div>{item.title}</div>
          <div class="flex-grow: 1 align-self: center border-bottom: 1px dashed"></div>
          <div>{item.desc}</div>
        </li>)}
      </ul>
    </section >



    <a id='coursework'><div className="bg-gray-900 py-12 text-neutral-200 dark">
      <section className="layout">
        <h1 className="heading text-white" >Technical Coursework</h1>
      </section>
    </div ></a>

    <section className="layout pt-12">
      <h1 className='heading'> Computer Science </h1>
      <NoLinkList data={data.coursework}> </NoLinkList>
      <h1 className='heading pt-12'> Math and Physics </h1>
      <NoLinkList data={data.physcoursework}> </NoLinkList>
    </section>
  </>
}
