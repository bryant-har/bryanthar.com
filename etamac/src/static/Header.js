import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "../static/static.module.css"
import { useRouter } from 'next/router';


const links = [
  { name: "projects", href: "/projects" },
  { name: "writing", href: "/writing" },
];

export default function Header() {
  const [pageTitle, setPageTitle] = useState('null');
  const router = useRouter();
  const linkjs = links.map((link) =>
    <Link
      href={link.href}
      className={`hover:text-black transition-colors ${router.pathname === link.href ? "text-black" : ""}`}
    >
      {link.name}</ Link>);

  useEffect(() => {
    const link = links.find(({ href }) => href === router.pathname);
    if (link) {
      setPageTitle(link.name.charAt(0).toUpperCase() + link.name.slice(1));
    } else {
      setPageTitle(null);
    }
  }, [router.pathname]);

  return (
    <header
      className="layout-md flex justify-between items-start"
    >
      <h1 class="font-bold text-black text-2xl mb-6">
        <Link href="/about">Bryant Har </Link>
        {pageTitle ?
          (<span class={styles["page-title"]} >
            <span class="text-neutral-400">—</span> {pageTitle}
          </span>) : null
        }
      </h1>
      <div className={styles["hlinks"]}>
        {linkjs}
      </div>
    </header >
  );
}
