import React from 'react';
import SkillCategory from './SkillCategory';

export default function Skills() {
  const skills = {
    "Programming Languages": ["C", "C++", "Python", "Dart"],
    "Technologies": ["Flutter", "Machine Learning", "Linux"],
    "Data": ["SQL", "Data Analysis", "Tableau", "Data Visualization"]
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <SkillCategory key={category} title={category} skills={items} />
          ))}
        </div>
      </div>
    </section>
  );
}