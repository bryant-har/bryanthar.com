import React from 'react'
import { ArrowUpRight } from 'lucide-react';

type ListItem = {
  title: string;
  summary: string;
  link: string;
};

export default function SheetsList(items: Array<ListItem>) {
  return <div className="grid gap-y-4">
    {items.map((item) =>
      <a
        href={item.link}
        className="block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-col sm:flex-row sm:items-end mb-1.5">
          <div className="text-lg text-black">
            {item.title}
            <ArrowUpRight size={18} className="inline text-neutral-400" />
          </div>
        </div>
        <div className="text-lg leading-snug font-serif italic">
          {item.summary}
        </div>
      </a>)}
  </div>

}