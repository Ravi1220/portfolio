import React from 'react';
import ExperienceCard from './ExperienceCard';

export default function Experience() {
  const experiences = [
    {
      title: "Machine Learning And Python Programming",
      company: "Whirlybird Electronics Pvt.Ltd",
      location: "Fatehpur",
      period: "Jun 2024 - Aug 2024",
      type: "Internship",
      description: "Implemented and tested Machine learning algorithms, performed data preprocessing, Conducted Model evaluation. Contributed to real world projects, including developing predictive model for sales forecasting. Utilized python for data analysis and visualization."
    },
    {
      title: "Green Intern",
      company: "1M1B (1 Million for 1 Billion)",
      location: "Mahendragarh, Haryana",
      period: "Nov 2024 - Present",
      type: "Government Internship",
      description: "Utilized Tableau to analyze climate data, identifying emission trends and renewable energy adoption patterns. Developed strategies for decentralized renewable energy systems and emission hotspot mitigation while enhancing skills in data visualization and actionable climate solutions."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}