import React from 'react';
import { Code, Palette, Music, Book } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            I'm a passionate full-stack developer with 5 years of experience building web applications.
            I love creating beautiful, functional, and user-friendly websites that solve real-world problems.
            When I'm not coding, you can find me exploring new technologies, reading tech blogs, or contributing to open-source projects.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <InterestCard
              icon={<Code className="w-8 h-8" />}
              title="Programming"
              description="JavaScript, TypeScript, React, Node.js"
            />
            <InterestCard
              icon={<Palette className="w-8 h-8" />}
              title="Design"
              description="UI/UX, Figma, Web Design"
            />
            <InterestCard
              icon={<Music className="w-8 h-8" />}
              title="Music"
              description="Piano, Guitar, Music Production"
            />
            <InterestCard
              icon={<Book className="w-8 h-8" />}
              title="Learning"
              description="Tech Books, Online Courses, Workshops"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InterestCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}