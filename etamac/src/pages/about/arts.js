import Layout from "../../static/Layout";
import Link from "next/link";
import styles from "../../static/static.module.css"
Arts.getLayout = Layout

export default function Arts() {
  return <>
    <body className="staticbody">
      <div className="pb-96">
        <section class={styles.header}>Arts</section>
        <p>
          I enjoy <it className=" text-purple-400">~creative~</it> stuff sometimes I
          guess <span className=" text-sm bg-neutral-200">¯\_(ツ)_/¯</span>. Here's
          <em>quick access</em> to some sheet musics and poems I've played and memorized <it className="text-gray-400 text-xs">(or going to)</it>.
          It's mostly for personal use, but feel free to take a gander.
        </p>
        <br />
        <Link className="staticlink text-neutral-600 bg-yellow-100" href="#sheets">Sheet Music ↓ </Link>
        <br />
        <Link className="staticlink bg-yellow-100" href="#poems">Memorized Poems ↓ </Link>
      </div >
      <div className="pb-96">
        <section id="sheets">SECTION 1</section>
        {/* import sheets component */}
        <section id="poems">SECTION 2</section>
      </div>
    </body>
  </>

}
