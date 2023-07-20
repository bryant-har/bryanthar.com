import React from 'react'
import { ArrowUpRight } from 'lucide-react';

type ListItem = {
  title: string;
  desc: string;
  date: string
  notes: string;
};



export default function LinkList({ data }: { data: ListItem[] }) {
  return <div className="grid gap-y-4">
    {data.map((item, index) =>
      <>
        <div className="flex flex-col sm:flex-row sm:items-end mb-1.5">
          <div className="text-lg text-black font-normal">
            {item.title}&nbsp;
            <ArrowUpRight size={18} className="inline text-neutral-400" />
          </div>
          <div className="sm:ml-auto mb-0.5 text-neutral-500">
            {item.title}
          </div>
        </div>
        <div className="text-lg leading-snug font-serif italic">
          {item.desc}
        </div>
        <div className="text-sm leading-snug font-serif font-light">
          - {item.desc}
        </div>
      </>
    )}
  </div>

}