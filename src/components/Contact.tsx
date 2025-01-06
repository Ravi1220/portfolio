import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactCard
            icon={<MapPin className="w-6 h-6" />}
            title="Location"
            detail="San Francisco, CA"
          />
          <ContactCard
            icon={<Phone className="w-6 h-6" />}
            title="Phone"
            detail="+1 (555) 123-4567"
          />
          <ContactCard
            icon={<Mail className="w-6 h-6" />}
            title="Email"
            detail="john.doe@example.com"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, detail }: { icon: React.ReactNode; title: string; detail: string }) {
  return (
    <div className="text-center p-6 bg-gray-50 rounded-lg">
      <div className="inline-block p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{detail}</p>
    </div>
  );
}