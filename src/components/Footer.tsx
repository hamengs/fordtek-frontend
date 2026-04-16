import { Twitter, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/home/logo.svg';
import type { FooterContent, SocialLink } from '../types/site-settings';
import type { NavLink } from '../types/site-settings';

// Picks the correct icon component for each social platform supported by the footer.
function SocialIcon({ platform }: { platform: SocialLink['platform'] }) {
  if (platform === 'twitter') {
    return <Twitter className="w-6 h-6" fill="currentColor" stroke="none"  />;
  }

  if (platform === 'youtube') {
    return <Youtube className="w-6 h-6" />;
  }

  if (platform === 'linkedin') {
    return <Linkedin className="w-6 h-6" fill="currentColor" stroke="none" />;
  }

  return null;
}

function getSocialHoverClass(platform:SocialLink['platform']){
  if(platform==='twitter'){
    return 'hover:text-sky-500';
  }

    if (platform === 'youtube') {
    return 'hover:text-red-600';
  }

  if (platform === 'linkedin') {
    return 'hover:text-blue-700';
  }

  return 'hover:text-slate-700';
}

function highlightLink(link:NavLink){
return link.isTitle;
}

function renderFooterLink(link: NavLink, className: string) {
  if (link.link.startsWith('/')) {
    return (
      <Link to={link.link} className={className}>
        {link.label}
      </Link>
    );
  }

  return (
    <a href={link.link} className={className}>
      {link.label}
    </a>
  );
}

// Footer renders the brand mark, contact details, footer link columns,
// tagline, and social links used at the bottom of the homepage.
export function Footer({
  copyrightText,
  phone,
  email,
  tagline,
  socialLinks,
  footerColumns,
}: FooterContent) {
  return (
    // Controls the footer background, top border, and overall vertical spacing.
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      {/* Controls the footer content width and side padding. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls the upper footer layout containing the logo, contact block, and link columns. */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-15">
          <div className="flex flex-col md:flex-col md:items-center gap-12">
            <div className="flex items-center space-x-3">
              <img src={logoImg} alt="Fordtek logo" className="w-50 h-10" />
            </div>
            <div className="text-xs text-slate-500 space-y-2 font-medium">
              <p>{copyrightText}</p>
              <p>Tel {phone}</p>
              <p>{email}</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-40 bg-slate-200"></div>
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-12 w-full md:w-auto">
            {footerColumns.map((column, index) => (
              <div key={`footer-column-${index}`} className="space-y-4">
                {column.links.map((link) => (
                  <div key={`${link.label}-${link.link}`}>
                    {renderFooterLink(
                      link,
                      `block cursor-pointer text-sm ${highlightLink(link)?'font-bold':'font-medium'} text-slate-700 hover:text-sky-400 transition-colors`,
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Controls the lower footer row for the tagline and social icons. */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-100 gap-8">
          <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-bold">{tagline}</p>
          <div className="flex space-x-8">
            {socialLinks.map((social) => (
              <a
                key={`${social.platform}-${social.link}`}
                href={social.link}
                className={`cursor-pointer text-slate-400 transition-colors ${getSocialHoverClass(social.platform)}`}
              >
                <SocialIcon platform={social.platform} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
