import React from 'react';

interface ContactInfoProps {
  icon: React.ReactNode;
  text: string;
}

export default function ContactInfo({ icon, text }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-white/80">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  );
}