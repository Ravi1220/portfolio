import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import SocialLink from './SocialLink';
import ContactInfo from './ContactInfo';

export default function Header() {
  return (
    <header className="relative h-[60vh] bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="z-10 text-center">
        <div className="mb-6">
          <img
            src=".\src\assets\photo.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white mx-auto shadow-xl"
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">Ravindra Kumar</h1>
        <p className="text-xl mb-6">Computer Science Student</p>
        <div className="flex gap-4 justify-center mb-6">
          <SocialLink href="https://github.com/Ravi1220" icon={<Github />} />
          <SocialLink href="https://www.linkedin.com/in/ravindra-kumar-89bb34286/" icon={<Linkedin />} />
        </div>
        <div className="flex gap-6 justify-center">
          <ContactInfo icon={<Mail />} text="Ravindragupta747@gmail.com" />
          <ContactInfo icon={<Phone />} text="+91 9557896688" />
          <ContactInfo icon={<MapPin />} text="Agra, India" />
        </div>
      </div>
    </header>
  );
}