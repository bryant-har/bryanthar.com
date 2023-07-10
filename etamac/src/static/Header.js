import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "../static/static.module.css"
import { useRouter } from 'next/router';


const links = [
  { name: "projects", href: "/about/projects" },
  { name: "writing", href: "/about/writing" },
  { name: "arts", href: "/about/arts" }
];

export default function Header() {
  const [pageTitle, setPageTitle] = useState(null);
  const router = useRouter();
  const linkjs = links.map((link, index) =>
    <Link
      href={link.href}
      key={index}
      className={`staticlink ${router.pathname === link.href ? "text-black" : ""}`}
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
      className="flex justify-between items-start"
    >
      <h1 className="font-bold text-black text-2xl mb-6">
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
