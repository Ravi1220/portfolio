import React from 'react'

const Education: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech, Computer Science & Engineering',
      institution: 'Central University Of Haryana',
      duration: '2021 - Present'
    },
    {
      degree: 'Senior Secondary (XII), CISCE',
      institution: "St. Mary's Convent School, Agra",
      duration: '2020',
      score: '77.50%'
    },
    {
      degree: 'Secondary (X), ICSE',
      institution: "St. Mary's Convent School, Agra",
      duration: '2018',
      score: '83.50%'
    }
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold mb-2 text-blue-600">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-600">{edu.duration}</p>
              {edu.score && <p className="text-gray-600">Score: {edu.score}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

