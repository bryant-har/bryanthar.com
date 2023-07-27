import React from 'react'

type ListItem = {
  title: string;
  desc: string;
  date: string
  notes: string[];
};



export default function LinkList({ data }: { data: ListItem[] }) {
  return <div className="grid gap-y-4">
    {data.map((item, index) =>
      <div key={index} className='block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors'
      >
        <div className="flex flex-col sm:flex-row sm:items-end mb-1.5">
          <div className="text-lg text-black font-normal">
            {item.title}
          </div>
          <div className="sm:ml-auto mb-0.5 text-neutral-500">
            {item.date}
          </div>
        </div>
        <div className="text-lg leading-snug font-serif italic pb-2">
          {item.desc}
        </div>
        <ul className='pl-8 space-y-0.5 text-black font-light'>
          {item.notes ? item.notes.map((line) => <li>- {line}</li>) : <div />}
        </ul>
      </div>)}
  </div>

}