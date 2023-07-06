import { useState, useEffect } from 'react';
import Link from 'next/link';


const links = [
  { name: "projects", href: "/about" },
  { name: "writing", href: "/about" },
];


//todo add header page changing...

export default function Header() {
  const [pageTitle, setPageTitle] = useState(null);
  const linkjs = links.map((obj) => <Link href={obj.href}>{obj.name}</Link>);

  return (
    <header
      className="layout-md flex justify-between items-start"
    >
      <h1 className="font-bold text-black text-2xl mb-6">
        <Link href="/about">Bryant Har</Link>
        {pageTitle ?
          (<span class="page-title">
            <span class="text-neutral-400">—</span> {pageTitle}
          </span>) : null
        }

      </h1>
      {linkjs}
    </header>
  );
}
