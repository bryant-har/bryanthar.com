import React from "react";
import { useEffect } from "react";
import { fly } from "svelte/transition";
import Header from "$lib/components/Header.svelte";
import Footer from "$lib/components/Footer.svelte";

import "@fontsource/newsreader/400-italic.css";
import "../app.css";

const Layout = ({ data }) => {
  const isMobile = navigator.userAgent.match(/Android|iPhone/i);
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <React.Fragment>
      <Header />

      {isMobile || reducedMotion ? (
        <main>
          <slot />
        </main>
      ) : (
        <React.Fragment key={data.pathname}>
          <main
            in={fly({ x: -10, duration: 350, delay: 350 })}
            out={fly({ y: 5, duration: 350 })}
          >
            <slot />
          </main>
        </React.Fragment>
      )}

      <Footer />
    </React.Fragment>
  );
};

export default Layout;
