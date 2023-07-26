import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Mail } from 'lucide-react';

const links = [
  { name: "projects", href: "/about/projects" },
  { name: "resume", href: "/about/resume" },
  { name: "arts", href: "/about/arts" }
];

export default function Header() {
  const [pageTitle, setPageTitle] = useState(null);
  const router = useRouter();
  const linkjs = links.map((link, index) =>
    <Link
      href={link.href}
      key={index}
      className={`hover:text-blue-300 transition-colors ${router.pathname === link.href ? "text-black" : ""}`}
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
    <div className='layout'>
      <header
        className=" flex justify-between items-start text-neutral-400"
      >
        <h1 className="font-bold text-black text-2xl mb-6">
          <Link href="/about">Bryant Har </Link>
          {pageTitle ?
            (<span className='page-title' >
              <span className="text-neutral-400">—</span> {pageTitle}
            </span>) : null
          }
        </h1>
        <div className="flex items-start justify-end space-x-6 text-lg">
          {linkjs}
        </div>
      </header >

      {/* <div className=' layout flex items-start justify-start space-x-1'>
        <a href='https://github.com/dreamShepherd'><img width="24" height="auto" src='./static/github.png'></img></a>
        <a href='https://lichess.org/@/DreamShepherd'><img width="24" height="auto" src='./static/lichess.ico'></img> </a>
        <a href='https://discordapp.com/users/bryant3435'><img width="24" height="auto" src='./static/discord.png'></img></a>
        <a href='https://www.linkedin.com/in/bryant-har-a260ab186/'><img width="24" height="auto" src='./static/linkedin.png'></img></a>
        <a href='mailto:bryanthar100@gmail.com'><Mail /></a>
      </div> */}

    </div>
  );
}
