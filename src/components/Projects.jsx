import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "BMW Customer Portal",
      description: "Built reusable UI components in React.js, ensuring pixel-perfect Figma implementation. Applied React best practices (hooks, Context API, lazy loading) to improve performance by 25%. Achieved WCAG compliance and internationalization support. Reduced load time by 40%, boosting user satisfaction.",
      image: "🚗",
      technologies: ["React.js", "TypeScript", "Figma", "WCAG", "Internationalization"],
      liveUrl: "https://checkout-dev.bmwdr.io/build-your-deal/accessories?vin=3MW89CW09S8F23153&dealer-code=65775",
      githubUrl: "#",
      category: "Enterprise",
      company: "Netsol Technologies"
    },
    {
      id: 2,
      title: "Asset Tiger",
      description: "Redesigned asset tracking dashboard using React.js, Bootstrap, SCSS, improving completion rates by 25%. Built themeable components for white-label use, cutting dev time by 30%. Implemented responsive design and cross-browser compatibility.",
      image: "📊",
      technologies: ["React.js", "Bootstrap", "SCSS", "Responsive Design", "White-label"],
      liveUrl: "https://assettiger.arhamsoft.org/",
      githubUrl: "#",
      category: "SaaS",
      company: "Arhamsoft Pvt Ltd"
    },
    {
      id: 3,
      title: "MYNTIST - Gamification",
      description: "Led UI/UX implementation for a blockchain-based NFT platform using React.js, SCSS, and TypeScript. Integrated Web3 wallet connections, token metadata, and smart contract interactions. Created engaging user experience for NFT trading and gaming.",
      image: "🎮",
      technologies: ["React.js", "TypeScript", "SCSS", "Web3", "Blockchain", "NFT"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Blockchain",
      company: "Arhamsoft Pvt Ltd"
    },
    {
      id: 4,
      title: "Mathlete.pk",
      description: "Built a responsive learning platform with Next.js and Tailwind CSS, boosting daily active users by 30%. Developed dynamic quiz modules with real-time tracking. Implemented gamification elements and progress tracking for students.",
      image: "📚",
      technologies: ["Next.js", "Tailwind CSS", "Real-time", "Gamification", "Education"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Education",
      company: "Arhamsoft Pvt Ltd"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the key projects I've worked on. Each project represents 
            my expertise in creating user-friendly, scalable, and innovative web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {project.company}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded text-sm font-medium transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-center py-2 px-4 rounded text-sm font-medium transition-colors"
                  >
                    GitHub
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-blue-600 dark:text-blue-400">
                  {selectedProject.category}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedProject.company}
                </span>
              </div>
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center mb-6 rounded">
                <span className="text-6xl">{selectedProject.image}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="flex gap-3">
                <a
                  href={selectedProject.liveUrl}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded font-medium transition-colors"
                >
                  View Live Demo
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-center py-3 px-6 rounded font-medium transition-colors"
                >
                  View on GitHub
                </a>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 