import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState({});
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      category: "Frontend Technologies",
      skills: [
        { name: "React.js", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "🚀" },
        { name: "JavaScript (ES6+)", level: 95, icon: "🟨" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "HTML5", level: 98, icon: "🌐" },
        { name: "CSS3", level: 95, icon: "🎨" },
        { name: "SCSS", level: 90, icon: "💅" }
      ]
    },
    {
      category: "UI/UX Development",
      skills: [
        { name: "Material-UI (MUI)", level: 95, icon: "🎨" },
        { name: "Tailwind CSS", level: 90, icon: "💨" },
        { name: "Ant Design", level: 85, icon: "🐜" },
        { name: "Bootstrap", level: 90, icon: "🅱️" },
        { name: "Figma to Code", level: 99, icon: "🎯" },
        { name: "Responsive Design", level: 95, icon: "📱" },
        { name: "Cross-browser Testing", level: 90, icon: "🌍" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Intersection Observer triggered:', entry.isIntersecting);
          if (entry.isIntersecting) {
            const section = entry.target;
            const skillItems = section.querySelectorAll('[data-skill]');
            console.log('Found skill items:', skillItems.length);
            
            skillItems.forEach((item, index) => {
              const skillName = item.getAttribute('data-skill');
              const targetLevel = parseInt(item.getAttribute('data-level'));
              console.log(`Animating ${skillName} to ${targetLevel}%`);
              
              setTimeout(() => {
                setAnimatedSkills(prev => ({
                  ...prev,
                  [skillName]: targetLevel
                }));
              }, index * 150); // Increased delay for better visual effect
            });
          }
        });
      },
      {
        threshold: 0.1, // Very low threshold for immediate triggering
        rootMargin: '0px 0px -20px 0px' // Minimal margin for precise timing
      }
    );

    if (skillsRef.current) {
      console.log('Observing skills section');
      observer.observe(skillsRef.current);
    }

    // Fallback: Trigger animation after a short delay if Intersection Observer fails
    const fallbackTimer = setTimeout(() => {
      if (Object.keys(animatedSkills).length === 0) {
        console.log('Fallback animation triggered');
        skillCategories.forEach(category => {
          category.skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => ({
                ...prev,
                [skill.name]: skill.level
              }));
            }, index * 100);
          });
        });
      }
    }, 1000);

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
      clearTimeout(fallbackTimer);
    };
  }, [animatedSkills]);

  const getSkillLevel = (skillName, targetLevel) => {
    return animatedSkills[skillName] || 0;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My technical expertise and proficiency in modern web development technologies
          </p>
        </div>
        
        <div ref={skillsRef} className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{skill.icon}</span>
                        <span className="font-semibold text-gray-900 dark:text-white text-lg">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {getSkillLevel(skill.name, skill.level)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden relative">
                      <div 
                        className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out relative"
                        style={{ 
                          width: `${getSkillLevel(skill.name, skill.level)}%`,
                          minWidth: '0%'
                        }}
                        data-skill={skill.name}
                        data-level={skill.level}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                      </div>
                      {/* Progress indicator */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {getSkillLevel(skill.name, skill.level) > 0 ? `${getSkillLevel(skill.name, skill.level)}%` : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
            Other Skills & Interests
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "PSD to HTML", icon: "🎨" },
              { name: "Pixel-perfect Solutions", icon: "🎯" },
              { name: "Performance Optimization", icon: "⚡" },
              { name: "WCAG Accessibility", icon: "♿" },
              { name: "Agile/Scrum", icon: "📋" },
              { name: "Component Libraries", icon: "📚" },
              { name: "Storybook", icon: "📖" },
              { name: "Git & Version Control", icon: "🔧" }
            ].map((skill, index) => (
              <div 
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-2xl border border-gray-100 dark:border-gray-700 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-lg">
                    {skill.icon}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 