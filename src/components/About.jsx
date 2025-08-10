import React from 'react';

const About = () => {
  const skills = [
    'React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 
    'Material-UI', 'Tailwind CSS', 'Ant Design', 'SCSS', 'HTML5', 'CSS3'
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Frontend UI/UX Engineer with 4 Years of Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a detail-oriented Frontend UI/UX Engineer with 4 years of experience building responsive, accessible, and user-focused web applications. Skilled in React.js, Next.js, and design systems like Material-UI, Ant Design, and Tailwind CSS.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate about performance, scalability, and delivering consistent UI in Agile environments. I specialize in creating reusable component libraries, optimizing React applications, and ensuring cross-browser compatibility with 99.9% UI stability.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring junior developers to improve code quality and reduce bugs.
            </p>
            
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-6xl text-gray-400 dark:text-gray-600">
                    👨‍💻
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 