import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
}

export default function ExperienceCard({
  title,
  company,
  location,
  period,
  type,
  description
}: ExperienceCardProps) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-700">{company} - {location}</p>
        </div>
        <div className="text-right">
          <span className="text-gray-600">{period}</span>
          <p className="text-sm text-blue-600">{type}</p>
        </div>
      </div>
      <p className="text-gray-600 mt-4">{description}</p>
    </div>
  );
}