import type { ReactNode } from 'react';
import { footerFallback } from '../content/homePage';
import { Footer } from './Footer';
import { StandardHeader } from './StandardHeader';

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-green-100">
      <StandardHeader />
      <main>{children}</main>
      <Footer {...footerFallback} />
    </div>
  );
}
