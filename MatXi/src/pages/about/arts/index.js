import { layout } from "../../../static/Layout";
import data from './arts.yaml'
import LinkList from '../../../static/LinkList'
Arts.getLayout = layout


export default function Arts() {
  return <div className="py-12">
    <section className="pb-12 layout text-lg">
      <h1 className="heading">Music and Writings</h1>
      <p>
        I do <it className="text-purple-400">creative</it> stuff sometimes. <span className=" text-sm bg-green-100"> ¯\_(ツ)_/¯ </span>
      </p>
      <p className="pb-4 pt-2">
        I play piano and recite poetry now and again. Poetry is <em><b>neat!</b></em> <br />
        This page is mostly for personal use, but feel free to take a gander. I'll
        add my own work soon. Here's quick access to stuff I've previously played and memorized.
        <it className="hover:blur-none blur-[2px] text-gray-400 text-xs transition-all"> (or am going to...)</it>
      </p>
    </section >

    <div className="bg-gray-900 py-12 text-neutral-200 dark">
      <section className="layout">
        <h1 className="heading text-white" >Table of Contents</h1>
        <div className='grid grid-cols-2 pl-4 text-red-50'>
          <div>
            <h2 className="text-white pb-2"><a href="#sheets"> &nbsp; <span className="link">Sheets Repo</span> &nbsp;<b className="text-sm">↓</b></a></h2>
            <ul className="pl-2 text-red-50 list-style: none">
              {data.scores.map((item, index) => <li key={index} > {item.title}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-white pb-2" ><a href="#poems"> &nbsp; <span className="link">Poetry</span> &nbsp; <b className="text-sm">↓</b></a></h2>
            <ul className="pl-2 text-red-50">
              {data.poems.map((item, index) => <li key={index}>{item.title}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </div >
    <section id="sheets" className="py-16 layout">
      <h1 className="heading">Sheets</h1>
      <LinkList data={data.scores}></LinkList>
    </section>
    <section id="poems" className="py-16 layout">
      <h1 className="heading">Poetry</h1>
      <LinkList data={data.poems}></LinkList>
    </section>
  </div >
}
