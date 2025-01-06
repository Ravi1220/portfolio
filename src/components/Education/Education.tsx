import React from 'react';
import EducationCard from './EducationCard';

export default function Education() {
  const education = [
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "Central University Of Haryana",
      year: "2021 - Present",
      score: ""
    },
    {
      degree: "Senior Secondary (XII), CISCE",
      institution: "St. Mary's Convent School, Agra",
      year: "2020",
      score: "77.50%"
    },
    {
      degree: "Secondary (X), ICSE",
      institution: "St. Mary's Convent School, Agra",
      year: "2018",
      score: "83.50%"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}