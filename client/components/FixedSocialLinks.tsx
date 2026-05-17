'use client';

import { Facebook, Github, Linkedin, MessageCircle, Instagram } from 'lucide-react';

export default function FixedSocialLinks() {
  const socialLinks = [
    { href: 'https://web.facebook.com/tswist.daiminah', icon: Facebook, label: 'Facebook' },
    { href: 'https://github.com/T-Swist', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/thompson-n-daiminah-jr-ba614929a/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://wa.me/+231881617698', icon: MessageCircle, label: 'WhatsApp' },
    { href: 'https://www.instagram.com/tswist_dai/', icon: Instagram, label: 'Instagram' },
  ];

  return (
    <div className="fixed z-20 right-0 top-1/2 -translate-y-1/2 bg-background-card border-2 border-background rounded-l-3xl p-4 space-y-4 hidden lg:block">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white hover:text-primary-accent transition-colors duration-300"
            aria-label={social.label}
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
}
