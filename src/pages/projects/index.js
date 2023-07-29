import { layout } from "../../components/Layout.js";
import data from "./projects.yaml";
import { ArrowUpRight } from "lucide-react";
Projects.getLayout = layout;

export default function Projects() {
  const projs = data.projects;
  return (
    <div className="pt-12">
      <section className="pb-12 layout text-lg">
        <h1 className="heading">Projects</h1>
        <p className="pb-4 pt-2">
          A quick overview of my github. I'm currently designing on a workflow
          webapp for personal use among friends and looking into contributing to
          open source, particularly{" "}
          <a href="https://vowpalwabbit.org/" className="link">
            vowpal wabbit
          </a>
          . Some projects are fun, and I aim to work on some open source work.
          Projects from hackathons and other events and private repos are
          excluded.
        </p>
      </section>

      <div className="bg-gray-900 py-12 text-neutral-200 dark">
        <section className="layout">
          <h1 className="heading text-white">Table of Contents</h1>
          <div className="grid grid-cols-2 gap-1 pl-4">
            {projs.map((item, index) => (
              <a
                className="link text-neutral-300 hover:text-white hover:underline"
                key={index}
                href={`#${item.title}`}
              >
                {item.title}&nbsp;<b className="text-sm">↓</b>
              </a>
            ))}
          </div>
        </section>
      </div>
      <section className="layout pt-12">
        <div>
          <img
            loading="lazy"
            className="mx-auto"
            width="400"
            height="auto"
            src="./static/arm.jpg"
          />
          <p className="text-center font-serif mx-auto text-black font-bold pt-2 pb-6">
            Franka Emika Panda robotic arm in the lab
          </p>
        </div>
        <div className="grid gap-y-4">
          {projs.map((item, index) => (
            <a
              key={index}
              id = {item.title}
              href={item.link}
              className="block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-col sm:flex-row sm:items-end mb-1.5">
                <div className="text-lg text-black font-normal">
                  {item.title}&nbsp;
                  <ArrowUpRight size={18} className="inline text-neutral-400" />
                </div>
                <div className="sm:ml-auto mb-0.5 text-neutral-500">
                  {item.date}
                </div>
              </div>
              <div className="text-lg leading-snug font-light italic">
                {item.summary}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
