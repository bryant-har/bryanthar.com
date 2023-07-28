import data from "./resume.yaml";
import NoLinkList from "../../components/NoLinkList";
import { layout } from "../../components/Layout.js";
Resume.getLayout = layout;

export default function Resume() {
  return (
    <div>
      <section className="section font-light">
        <h1 className="heading">
          <span className="text-teal-600">#</span> Education
        </h1>

        <div className="mb-4">
          <div className="flex justify-between items-end">
            <h2 className="text-black text-lg font-normal">
              Cornell University
            </h2>
            <div className="text-neutral-500 font-normal">2021 — 2025</div>
          </div>
          <p className="text-sm font-serif italic">
            B.S. in Computer Science, Engineering Physics, English
          </p>
        </div>
        <div>
          <p className="font-normal link text-md">
            <a href="#coursework">Technical Coursework</a>
          </p>
          <p className="text-sm font-serif italic">
            Award for Excellence in Physics, Deans List, all years eligible.
          </p>
        </div>

        <div>
          <h1 className="font-light mt-4">Teaching</h1>
          <ul className="space-y-1 text-sm">
            <li>
              - TA for CS 2110 (Data Structures and Algorithms), Fall 2023
            </li>
            <li>
              - Advised for{" "}
              <a
                className="link"
                href="https://en.wikipedia.org/wiki/Governor%27s_School_of_New_Jersey"
              >
                Governor's School in the Sciences (NJGSS)
              </a>
              , Summer 2022
            </li>
          </ul>
        </div>
      </section>

      <section className="section font-light">
        <h1 className="heading">
          <span className="text-teal-600">#</span> Programming
        </h1>
        <p className="leading-relaxed text-sm">
          <span className="font-semibold">Languages:</span> Python · Java ·
          C/C++ · HTML/CSS · Javascript · Wolfram Language · LaTeX <br />
          <span className="font-semibold">Frameworks:</span> NextJS · ReactJS ·
          Tailwind · Yaml · ROS · Tensorflow/Keras · PyTorch
          <br />
          <span className="font-semibold">Tools/Services:</span> VSCode ·
          Firebase · MongoDB · Heroku · Git/Github
        </p>
      </section>

      <section className="section">
        <h1 className="heading">
          <span className="text-teal-600">#</span> Professional Experience
        </h1>
        <NoLinkList data={data.jobs}></NoLinkList>
      </section>
      <section className="layout pb-12">
        <h1 className="heading ">
          <span className="text-teal-600">#</span> Fun Facts{" "}
        </h1>
        <ul className="text-sm grid gap-1  grid-cols-2 text-neutral-700">
          <li>- Was an EMT during COVID (646230)</li>
          <li>- Rated 1900 in blitz chess; 2300 in puzzles</li>
          <li>- 16.1s PB solving the Rubiks Cube.</li>
          <li>- Formerly could solve cubes blindfolded.</li>
          <li>- Can recite 8 poems</li>
          <li>- 1590/1600 SAT</li>
          <li>- Hit masters in Starcraft II</li>
          <li>- Hit legend in Hearthstone</li>
          <li>- Memorized 400 digits of pi once</li>
          <li>- Despises OCaml and Verilog...</li>
        </ul>
      </section>

      <a id="coursework">
        <div className="bg-gray-900 py-12 text-neutral-200 dark">
          <section className="layout">
            <h1 className="heading text-white">Technical Coursework</h1>
          </section>
        </div>
      </a>

      <section className="layout pt-12">
        <h1 className="heading"> Computer Science </h1>
        <NoLinkList data={data.coursework}> </NoLinkList>
        <h1 className="heading pt-12"> Math and Physics </h1>
        <NoLinkList data={data.physcoursework}> </NoLinkList>
      </section>
    </div>
  );
}
