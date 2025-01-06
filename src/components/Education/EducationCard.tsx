import React from 'react';

interface EducationCardProps {
  degree: string;
  institution: string;
  year: string;
  score: string;
}

export default function EducationCard({ degree, institution, year, score }: EducationCardProps) {
  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{degree}</h3>
        <span className="text-gray-600">{year}</span>
      </div>
      <p className="text-gray-700">{institution}</p>
      {score && <p className="text-gray-600 mt-1">Score: {score}</p>}
    </div>
  );
}