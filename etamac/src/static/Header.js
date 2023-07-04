import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const links = [
  { name: "projects", href: "/projects" },
  { name: "writing", href: "/writing" },
  { name: "resume", href: "/resume" },
];

function Header() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState(null);

  useEffect(() => {
    const link = links.find(({ href }) => href === location.pathname);
    if (link) {
      setPageTitle(link.name.charAt(0).toUpperCase() + link.name.slice(1));
    } else {
      setPageTitle(null);
    }
  }, [location.pathname]);

  return (
    <header
      className="layout-md flex justify-between items-start"
      data-sveltekit-noscroll
      data-sveltekit-preload-code="eager"
    >
      <h1 className="font-bold text-black text-2xl mb-6">
        <a href="/">Eric Zhang</a>
        {pageTitle && (
          <span className="page-title">
            <span className="text-neutral-400">—</span>
            {pageTitle}
          </span>
        )}
      </h1>
      <nav>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`hover:text-black transition-colors ${location.pathname === link.href ? 'text-black' : ''}`}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;

// CSS styles remain the same and can be used as is.
