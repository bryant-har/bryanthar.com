import layout from "../../static/Layout";
import Link from "next/link";

Arts.getLayout = layout

export default function Arts() {
  return <>
    <div className="pb-96">
      <p>
        Personal Use Sheet Music:

      </p>
      <Link className="staticlink" href="#sheets">Sheet Music ↓ </Link>
      <Link className="staticlink" href="#poems">Memorized Poems ↓ </Link>
    </div>
    <p>
      Under Construction







    </p>
    <div className="pb-96">
      <div id="sheets">SECTION 1</div>
      <div id="poems">SECTION 2</div>
    </div>

  </>
}
