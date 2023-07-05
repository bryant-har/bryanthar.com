import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [pageTitle, setPageTitle] = useState(null);

  useEffect(() => {
    if (link) {
      setPageTitle(link.name.charAt(0).toUpperCase() + link.name.slice(1));
    } else {
      setPageTitle(null);
    }
  }, []);

  return (
    <header
      className="layout-md flex justify-between items-start"
    >
      <h1 className="font-bold text-black text-2xl mb-6">
        <Link><a href="/">Bryant Har</a></Link>
        {pageTitle && (
          <span className="page-title">
            <span className="text-neutral-400">—</span>
            {pageTitle}
          </span>
        )}
      </h1>
    </header>
  );
}
