import React from 'react';
import { TwitterIcon } from './icons/TwitterIcon';
import { TelegramIcon } from './icons/TelegramIcon';
import { DiscordIcon } from './icons/DiscordIcon';

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <div className="text-xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400">
            SAB Coin
          </div>
          <p className="text-slate-500 text-sm mt-1">Changing the world, one block at a time.</p>
        </div>
        <div className="flex space-x-6">
          <SocialLink href="https://x.com/SABCoin">
            <TwitterIcon className="w-6 h-6" />
          </SocialLink>
          <SocialLink href="https://t.me/SABCoin">
            <TelegramIcon className="w-6 h-6" />
          </SocialLink>
          <SocialLink href="https://discord.gg/SABCoin">
            <DiscordIcon className="w-6 h-6" />
          </SocialLink>
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <p className="text-center text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} SAB Coin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;