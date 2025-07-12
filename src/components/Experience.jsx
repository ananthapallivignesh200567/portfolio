import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Star } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Summer Intern",
      company: "TURTIL",
      location: "Remote",
      period: "May 2025 - Jun 2025",
      description: "Completed a 6-week internship focused on building backend microservices using Python, FastAPI, and Docker.",
      technologies: ["Python", "FastAPI", "Docker", "Machine Learning"],
      achievements: [
        "Integrated pre-trained machine learning model into FastAPI backend, demonstrating proficiency in ML model deployment",
        "Achieved 95% prediction accuracy during offline deployment testing, validating model performance across many test cases",
        "Architected modular backend, achieving 95% code coverage through 20+ unit tests and reducing deployment errors by 70%",
        "Built backend implementing standard practices, gaining Docker expertise by containerizing microservice in real-world environment"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "NETWORX",
      location: "Remote",
      period: "Mar 2024 - Aug 2024",
      description: "Developed clean, user-friendly interfaces and collaborated with backend team on system troubleshooting across integration tasks.",
      technologies: ["React.js", "JavaScript", "Git", "GitHub", "Team Collaboration"],
      achievements: [
        "Developed clean, user-friendly interfaces, achieving 90% mobile responsiveness and improving user engagement by 35%",
        "Participated in structured code review process, identifying critical issues and maintaining quality standards through team meetings",
        "Collaborated with backend team on system troubleshooting across integration tasks, gaining valuable debugging skills",
        "Leveraged Git for version control across 25+ commits, facilitating team collaboration with 5+ developers through GitHub repositories"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-neutral-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey showcasing growth from frontend development to full-stack and machine learning expertise.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Experience Card */}
                <div className="ml-16 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-neutral-800 mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-4 text-neutral-600 mb-3">
                        <div className="flex items-center gap-2">
                          <Briefcase size={18} className="text-blue-500" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={18} className="text-purple-500" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={18} className="text-pink-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Experience Badge */}
                    <div className="lg:ml-4 mb-4 lg:mb-0">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold">
                        <Star size={16} />
                        {index === 0 ? 'Current' : 'Completed'}
                      </div>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Technologies Used */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-neutral-800 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-800 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-neutral-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                Ready for New Opportunities
              </h3>
              <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and contribute to innovative projects. 
                Let's discuss how I can add value to your team.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                <ExternalLink size={20} />
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;