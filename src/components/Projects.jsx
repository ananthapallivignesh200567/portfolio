import React from 'react';
import { Github, ExternalLink, Star, Users, Zap, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'Resume Scoring Microservice',
    description: 'Offline resume scoring solution with API endpoints using FastAPI, containerized via Docker for seamless deployment.',
    bullets: [
      'Implemented TF-IDF + Logistic Regression models achieving 95% classification accuracy across 28+ goal-specific resume categories.',
      'Developed maintainable REST API with structured JSON validation, reducing invalid request errors by 80%.',
      'Implemented config-driven architecture, reducing deployment complexity by 50% and enabling instant parameter modifications.',
      'Designed skill-matching engine analyzing 500+ technical skills, achieving 95% accuracy in identifying matched/missing competencies.'
    ],
    tech: ['Python', 'FastAPI', 'Docker', 'Machine Learning'],
    github: 'https://github.com/ananthapallivignesh200567/Resume-Scoring-Microservice-Turtil',
    demo: null,
    stats: {
      accuracy: '95%',
      categories: '28+',
      skills: '500+'
    },
    featured: true
  },
  {
    title: 'Resume Destroyer | MERN Stack',
    description: 'Interactive web site targeting 1000+ students, analyzing resumes and providing tips through AI-powered critiques.',
    bullets: [
      'Backend logic processes resumes in under 30 seconds, generating detailed feedback through AI-powered analysis.',
      'Planning AWS S3 and Lambda integration for scalable file handling, supporting 500+ concurrent users and 10GB+ storage capacity.',
      'Targeting university students, making resume review 60% more insightful through personalized analytics and actionable feedback.'
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'AWS S3', 'AWS Lambda'],
    github: 'https://github.com/ananthapallivignesh200567/Resume-Destroyer',
    demo: null,
    stats: {
      users: '1000+',
      processing: '30s',
      improvement: '60%'
    },
    featured: true
  }, 
  {
    title: 'E-commerce Website | MERN Stack',
    description: 'Responsive e-commerce platform with seamless user experience and secure authentication.',
    bullets: [
      'Responsive design optimized for 5+ device types, ensuring seamless user experience across 95% of screen sizes.',
      'Optimized website performance through server-side rendering and efficient queries, achieving 2-second average page load times.',
      'Prepared a responsive interface using React and Tailwind CSS, reducing page layout shifts and improving load times by 35%.',
      'Implemented structured, scalable data models in MongoDB and secured user authentication with industry-standard bcrypt hashing.'
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'bcrypt'],
    github: 'https://github.com/ananthapallivignesh200567/my-project',
    demo: null,
    stats: {
      devices: '5+',
      loadTime: '2s',
      improvement: '35%'
    },
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-neutral-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical expertise, problem-solving skills, and passion for building innovative solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="max-w-7xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${project.featured ? 'ring-2 ring-blue-200' : ''}`}>
              <div className="p-8">
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-800">{project.title}</h3>
                      {project.featured && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold">
                          <Star size={14} />
                          Featured
                        </div>
                      )}
                    </div>
                    <p className="text-lg text-neutral-600 leading-relaxed mb-4">{project.description}</p>
                  </div>
                  
                  {/* Project Stats */}
                  <div className="lg:ml-8 mb-6 lg:mb-0">
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                          <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {value}
                          </div>
                          <div className="text-xs text-neutral-600 font-medium capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-800 mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-blue-500" />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-neutral-600 leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies & Links */}
                  <div className="space-y-6">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-800 mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-500" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div>
                      <h4 className="text-lg font-semibold text-neutral-800 mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-pink-500" />
                        Project Links
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white rounded-2xl hover:bg-neutral-900 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                        >
                          <Github size={18} />
                          View Code
                        </a>
                        {project.demo && (
                          <a 
                            href={project.demo} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Want to See More?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects, contributions, and open-source work.
            </p>
            <a 
              href="https://github.com/ananthapallivignesh200567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              <Github size={20} />
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;