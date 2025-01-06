import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

export default function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
    >
      {icon}
    </a>
  );
}