import React from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Shoe Shopping App | EVOLITE",
      description: "A basic and clean UI app for shopping different shoes online with ease. It has all possible features which a shopping app must have.",
      technologies: ["Flutter", "Dart"],
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}