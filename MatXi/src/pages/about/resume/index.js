import data from './resume.yaml'
import NoLinkList from '../../../static/NoLinkList'
import { layout, Transition } from "../../../static/Layout.js"
Writing.getLayout = layout

export default function Writing() {
  return <>
    <Transition keyid='resume'>
      <section className="layout">
        <h1 className="heading">
          Education
        </h1>




        <a href='#coursework'>Coursework</a>
        <h1 className="heading">Certifications</h1>
      </section>

      {/* todo */}
      {/* Blog Stuff */}
      {/* Fun Facts */}
      {/* Notes */}
      {/* Classes Taken And Notes For those classes */}
      {/* Make tabs like Geoff */}



      <a id='coursework'><div className="bg-gray-900 py-12 text-neutral-200 dark">
        <section className="layout">
          <h1 className="heading text-white" >Coursework</h1>
        </section>
      </div ></a>

      <section className="layout pt-12">
        <h1 className='heading'> Computer Science </h1>
        <NoLinkList data={data.coursework}> </NoLinkList>
        <h1 className='heading pt-12'> Math and Physics </h1>
        <NoLinkList data={data.physcoursework}> </NoLinkList>
      </section>
    </Transition >
  </>
}
