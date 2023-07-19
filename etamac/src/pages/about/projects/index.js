import { layout, Transition } from "../../../static/Layout.js";

Projects.getLayout = layout

export default function Projects() {
  return <>
    <Transition keyid='projects'>
      <section className="layout">
        <h1 className="heading">Projects and Writings</h1>
      </section>
      {/* /#NDA */}
      {/* todo */}
      {/* Stealth Startup */}
      {/* robot learning */}
      {/* Use template for projects */}
    </Transition>
  </>
}

// Textbook Repo as project as well.
// Add notes repo
