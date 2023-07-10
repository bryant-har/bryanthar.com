import Layout from "../../static/Layout";
import Link from "next/link";
import styles from "../../static/static.module.css"
Arts.getLayout = Layout

export default function Arts() {
  return <>
    <div className="staticbody">
      <section className="pb-96">
        <h1 className={styles.heading}>Arts</h1>
        <p>
          I do <it className=" text-purple-400">~creative~</it> stuff sometimes <span className=" text-sm bg-green-100"> ¯\_(ツ)_/¯ </span>.
        </p>
        <p className="py-4">
          Here's quick access to some sheets and poems I've previously played and memorized
          <it className="hover:blur-none blur-[2px] text-gray-400 text-xs transition-all"> (or am going to...)</it>.
          I play piano and enjoy poetry now and again.
          It's mostly for personal use and access, but feel free to take a gander.
        </p>
        <div className="py-2 grid gap-y-4">
          <Link className="staticlink py-1 bg-slate-100 text-xl" href="#sheets"> &nbsp; Sheets Repo ↓ &nbsp;</Link>
          <Link className="staticlink py-1 bg-slate-100 text-xl" href="#poems"> &nbsp; Poetry ↓ &nbsp; </Link>
        </div >

      </section >
      <section id="sheets">
        <h1 className={styles.heading}>Sheets</h1>
        {/* Import sheets list component */}
      </section>
      <section id="poems">
        <h1 className={styles.heading}>Poetry</h1>
      </section>
    </div >
  </>

}
