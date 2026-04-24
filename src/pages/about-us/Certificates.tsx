import { useState } from 'react';
import {
  footerFallback,
  topBarFallback,
} from '../../content/homePage';
import { Footer } from '../../components/Footer';
import { TopBar } from '../../components/TopBar';
import { useHeaderVisibility } from '../../hooks/useHeaderVisibility';

export default function Certificates(){
    const isHeaderVisible = useHeaderVisibility();

    return(
    <div>
        <header
          className={`sticky top-0 z-50 w-full shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-transform duration-300 ${
            isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
            <TopBar {...topBarFallback} />
        </header>
        <h1>
            Hello
        </h1>
        <Footer {...footerFallback} />
    </div>)
}