import Layout from "../../static/Layout";
import styles from "../../static/static.module.css"
Arts.getLayout = Layout

export default function Arts() {
  return <>
    <div className="staticbody">
      <section className="pb-36">
        <h1 className={styles.heading}>Arts</h1>
        <p>
          I do <it className=" text-purple-400">~creative~</it> stuff sometimes. <span className=" text-sm bg-green-100"> ¯\_(ツ)_/¯ </span>
        </p>
        <p className="pb-4 pt-2">
          I play piano and recite poetry now and again. Poetry is <em><b>neat!</b></em> <br />
          This page is mostly for personal use, but feel free to take a gander.
          Here's quick access to stuff I've previously played and memorized
          <it className="hover:blur-none blur-[2px] text-gray-400 text-xs transition-all"> (or am going to...)</it>.
        </p>
        <div className="py-2 grid gap-y-4">
          <a className="staticlink py-1 bg-slate-100 text-xl" href="#sheets"> &nbsp; Sheets Repo <b>↓</b> &nbsp;</a>
          <a className="staticlink py-1 bg-slate-100 text-xl" href="#poems"> &nbsp; Poetry <b>↓</b> &nbsp; </a>
        </div >
      </section >
      <section id="sheets">
        <h1 className={styles.heading}>Sheets</h1>
        <div className="pb-96"></div>
        {/* Import sheets list component */}
      </section>
      <section id="poems">
        <h1 className={styles.heading}>Poetry</h1>
        <div className="pb-96"></div>
      </section>
    </div >
  </>

}
