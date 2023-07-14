import yaml from 'js-yaml';
import Layout from "../../static/Layout";
Arts.getLayout = Layout


export default function Arts() {

  console.log(yaml.load('./scores.yaml'))
  return <>
    <div>
      <section className="pb-36 layout text-lg">
        <h1 className="heading">Arts</h1>
        <p>
          I do <it className="text-purple-400">~creative~</it> stuff sometimes. <span className=" text-sm bg-green-100"> ¯\_(ツ)_/¯ </span>
        </p>
        <p className="pb-4 pt-2">
          I play piano and recite poetry now and again. Poetry is <em><b>neat!</b></em> <br />
          This page is mostly for personal use, but feel free to take a gander.
          Here's quick access to stuff I've previously played and memorized.
          <it className="hover:blur-none blur-[2px] text-gray-400 text-xs transition-all"> (or am going to...)</it>
        </p>
      </section >

      <div className="bg-gray-900 text-neutral-200 dark">
        <section className="py-12 layout">
          <h1 className="heading text-white" >Table of Contents</h1>
          <h2><a className="staticlink py-1 text-md" href="#sheets"> &nbsp; Sheets Repo <b>↓</b> &nbsp;</a></h2>
          <div className='pl-4'>
            <ul>
              <li> Bop </li>
            </ul>
          </div>
          <a className="staticlink py-1 text-md" href="#poems"> &nbsp; Poetry <b>↓</b> &nbsp; </a>
          <ul>
            <li> Bop </li>
          </ul>
        </section>
      </div>



      <section id="sheets">
        <h1 className="heading">Sheets</h1>
        <div className="pb-96"></div>
        {/* Import sheets list component */}
      </section>
      <section id="poems">
        <h1 className="heading">Poetry</h1>
        <div className="pb-96"></div>
      </section>
    </div >
  </>

}
