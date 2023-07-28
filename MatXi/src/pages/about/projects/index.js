import { layout } from "../../../static/Layout.js";
import data from './projects.yaml'
import LinkList from "../../../static/LinkList.js";
Projects.getLayout = layout

export default function Projects() {
  return <div className="pt-12">
    <section className="pb-12 layout text-lg">
      <h1 className="heading">Projects</h1>
      <p className="pb-4 pt-2">
        Here's quick overview of my github.
      </p>
    </section >

    <div className="bg-gray-900 py-12 text-neutral-200 dark">
      <section className="layout">
        <h1 className="heading text-white" >Table of Contents</h1>
        <div className='grid grid-cols-2 pl-4 text-red-50'>
          {data.projects.map((item, index) => <li key={index} > {item.title}</li>)}
        </div>
      </section>
    </div >
    <section className="layout">
      <LinkList data={data.projects} />
    </section>
  </div >
}
