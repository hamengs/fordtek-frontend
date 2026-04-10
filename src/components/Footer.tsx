import { Twitter, Youtube, Linkedin } from 'lucide-react';
import logoImg from '../Assets/Images/blogo.svg';
import type { FooterContent, SocialLink } from '../types/site-settings';

function SocialIcon({ platform }: { platform: SocialLink['platform'] }) {
  if (platform === 'twitter') {
    return <Twitter className="w-6 h-6" fill="currentColor" stroke="none" />;
  }

  if (platform === 'youtube') {
    return <Youtube className="w-6 h-6" />;
  }

  if (platform === 'linkedin') {
    return <Linkedin className="w-6 h-6" fill="currentColor" stroke="none" />;
  }

  return null;
}

export function Footer({
  copyrightText,
  phone,
  email,
  tagline,
  socialLinks,
  footerColumns,
}: FooterContent) {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <div className="flex items-center space-x-3">
              <img src={logoImg} alt="Fordtek logo" className="w-50 h-10" />
            </div>
            <div className="hidden md:block w-px h-20 bg-slate-200"></div>
            <div className="text-xs text-slate-500 space-y-2 font-medium">
              <p>{copyrightText}</p>
              <p>Tel {phone}</p>
              <p>{email}</p>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-12 w-full md:w-auto">
            {footerColumns.map((column, index) => (
              <div key={`footer-column-${index}`} className="space-y-4">
                {column.links.map((link) => (
                  <a
                    key={`${link.label}-${link.link}`}
                    href={link.link}
                    className="block cursor-pointer text-sm font-bold text-slate-700 hover:text-green-600 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-100 gap-8">
          <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-bold">{tagline}</p>
          <div className="flex space-x-8">
            {socialLinks.map((social) => (
              <a
                key={`${social.platform}-${social.link}`}
                href={social.link}
                className="cursor-pointer text-slate-400 transition-colors hover:text-slate-700"
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
