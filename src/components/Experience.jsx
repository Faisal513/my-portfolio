import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Software Engineer III - UI/UX Engineer",
      company: "Netsol Technologies",
      period: "July 2025 – Present",
      location: "Lahore, Pakistan",
      description:
        "Designed and maintained a reusable UI component library using Storybook, reducing frontend development time by 40% and standardizing design across 6+ enterprise products. Engineered complex, themeable UI components with MUI and SCSS, leveraging TypeScript for strictly typed props and interfaces.",
      achievements: [
        "Reduced frontend development time by 40% with reusable component library",
        "Boosted performance by 30% using advanced React patterns",
        "Achieved 99.9% UI stability across browsers and devices",
        "Led frontend architecture improvements and code refactors",
      ],
      technologies: ["React.js", "TypeScript", "MUI", "SCSS", "Storybook", "Agile"],
      icon: "💼",
    },
    {
      id: 2,
      type: "work",
      title: "Frontend Developer - UI/UX Enginner",
      company: "Arhamsoft Pvt Ltd",
      period: "October 2021 – May 2024",
      location: "Lahore, Pakistan",
      description:
        "Developed responsive web interfaces for 5+ SaaS products, improving engagement by 25%. Converted Figma designs to scalable, production-ready code, reducing turnaround time by 30%. Built internal design systems and reusable libraries for consistent UI.",
      achievements: [
        "Improved user engagement by 25% across 5+ SaaS products",
        "Reduced development turnaround time by 30%",
        "Mentored 3 junior developers, reducing bugs by 40%",
        "Implemented WCAG accessibility and cross-browser testing",
      ],
      technologies: ["React.js", "JavaScript", "SCSS", "Figma", "Bootstrap", "Agile"],
      icon: "🚀",
    },
    {
      id: 3,
      type: "work",
      title: "Frontend Trainee",
      company: "Programmers Force Pvt Ltd",
      period: "June 2021 – September 2021",
      location: "Lahore, Pakistan",
      description:
        "Built responsive UI components with HTML, CSS, JS, and React.js for a client project delivered in 3 months. Fixed UI bugs, improving load speed by 15%. Gained Agile workflow experience and implemented cross-browser compatibility strategies.",
      achievements: [
        "Delivered client project within 3 months",
        "Improved load speed by 15% through bug fixes",
        "Gained experience with Agile workflows",
        "Implemented cross-browser compatibility strategies",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Agile"],
      icon: "🌟",
    },
    {
      id: 4,
      type: "education",
      title: "BS in Information Technology",
      company: "University of the Punjab, PUCIT",
      period: "2017 - 2021",
      location: "Lahore, Pakistan",
      description:
        "Awarded full scholarship by HEC. Completed field research in Web Development, Google UX Design and related technologies. Focused on web development, software engineering, and computer science fundamentals.",
      achievements: [
        "Awarded full scholarship by HEC",
        "Completed field research in Google UX Design",
        "Specialized in Web Development",
        "Graduated with strong foundation in IT and Graphic Design",
      ],
      technologies: [
        "Information Technology",
        "Graphic Design",
        "Web Development",
        "UX Design",
      ],
      icon: "🎓",
    },
  ];

  const certifications = [
    {
      name: "Google UX Design",
      issuer: "Google",
      date: "2021",
      icon: "🎨",
    },
    {
      name: "Web Development",
      issuer: "Various Platforms",
      date: "2021",
      icon: "🌐",
    },
    {
      name: "Information Technology",
      issuer: "University of the Punjab",
      date: "2021",
      icon: "💻",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background that has shaped me
            into the Frontend UI/UX Engineer I am today.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10">
                  <span className="text-white text-sm">{exp.icon}</span>
                </div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    {/* Date on top */}
                    <div className="flex justify-start">
                    <span className="inline-flex items-center px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium mb-2">
                      {exp.period}
                    </span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {exp.location}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <span className="text-blue-500 mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Certifications & Research
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {cert.issuer}
                </p>
                <span className="text-sm text-blue-600 dark:text-blue-400">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
