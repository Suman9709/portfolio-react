import React from 'react';

const skills = [
  { name: 'HTML', level: 85 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 70 }
];

const SkillSlider = () => {
  return (
    <div className="px-8 py-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="font-medium text-gray-500">{skill.level}%</span>
            </div>
            <div className="relative w-full bg-gray-200 rounded-full h-3">
              <div
                className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSlider;
