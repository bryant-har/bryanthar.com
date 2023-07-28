import { layout } from "../../../static/Layout.js";
import data from './projects.yaml'
import { ArrowUpRight } from "lucide-react";
Projects.getLayout = layout

export default function Projects() {
  const projs = data.projects
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
          {projs.map((item, index) => <li key={index} > {item.title}</li>)}
        </div>
      </section>
    </div >
    <section className="layout pt-12">
      <div className="grid gap-y-4">
        {projs.map((item, index) =>
          <a
            key={index}
            href={item.link}
            className="block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-col sm:flex-row sm:items-end mb-1.5">
              <div className="text-lg text-black font-normal">
                {item.title}&nbsp;
                <ArrowUpRight size={18} className="inline text-neutral-400" />
              </div>
              <div className="sm:ml-auto mb-0.5 text-neutral-500">
                {item.date}
              </div>
            </div>
            <div className="text-lg leading-snug font-light italic">
              {item.summary}
            </div>
          </a>)}
      </div>
    </section>
  </div >
}
