import Layout from "../../static/Layout";
import Link from "next/link";
import styles from "../../static/static.module.css"
Arts.getLayout = Layout

export default function Arts() {
  return <>
    <body className="staticbody">
      <section className="pb-96">
        <h1 className={styles.heading}>Arts</h1>
        <p>
          I do <it className=" text-purple-400">~creative~</it> stuff sometimes <span className=" text-sm bg-green-100"> ¯\_(ツ)_/¯ </span>.
        </p>
        <p className="py-4">
          Here's a <em>quick access</em> to sheet music and poems I've previously played and memorized
          <it className="hover:blur-none blur-[1px] text-gray-400 text-xs"> (or surely am going to...)</it>.
          I play piano and enjoy poetry now and again.
          It's mostly for personal use and access, but feel free to take a gander.
        </p>
        <div className="py-2 hover:bg-neutral-100 transition-colors">
          <Link className="staticlink text-neutral-600 bg-yellow-100 text-xl" href="#sheets">Music ↓ </Link>
        </div >
        <div className="py-2 hover:bg-neutral-100 transition-colors">
          <Link className="staticlink bg-yellow-100 text-xl" href="#poems">Poetry ↓ </Link>
        </div >

      </section >
      <section id="sheets">
        <h1 className={styles.heading}>Sheets</h1>
        {/* Import sheets list component */}
      </section>
      <section id="poems">
        <h1 className={styles.heading}>Poetry</h1>
      </section>
    </body >
  </>

}
