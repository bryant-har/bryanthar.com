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

      <section className="layout">
        <h1 id='coursework' className="heading">Relevant Coursework</h1>
      </section>
      <NoLinkList data={data.coursework}> </NoLinkList>

      {/* todo */}
      {/* Blog Stuff */}
      {/* Fun Facts */}
      {/* Notes */}
      {/* Classes Taken And Notes For those classes */}
      {/* Make tabs like Geoff */}
    </Transition >
  </>
}
