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
            {item.title}
          </div>
          <div className="sm:ml-auto mb-0.5 text-neutral-500">
            {item.date}
          </div>
        </div>
        <div className="text-sm leading-snug font-serif font-light">
          {item.desc}
        </div>
        <div className="text-xs pt-2 leading-snug font-serif font-light">
          {item.notes}
        </div>
      </>
    )}
  </div>

}