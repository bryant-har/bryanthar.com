import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [pageTitle, setPageTitle] = useState(null);
  return (
    <header
      className="layout-md flex justify-between items-start"
    >
      <h1 className="font-bold text-black text-2xl mb-6">
        <Link href="/about">Bryant Har</Link>
      </h1>
    </header>
  );
}
