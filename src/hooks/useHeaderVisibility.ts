import { useEffect, useState } from 'react';

export function useHeaderVisibility() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isNearTop = currentScrollY < 240;
      const isScrollingUp = currentScrollY < lastScrollY;

      if (isNearTop || isScrollingUp) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isHeaderVisible;
}
