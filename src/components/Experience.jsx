import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, Star, Zap, TrendingUp, Award } from 'lucide-react';

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
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-blue-50/30 to-purple-50/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            Professional Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full animate-pulse-glow"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey showcasing growth from frontend development to full-stack and machine learning expertise.
          </p>
        </div>

        {/* Enhanced Experience Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 timeline-line"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16">
                {/* Enhanced Timeline Dot */}
                <div className="absolute left-6 top-8 timeline-dot"></div>
                
                {/* Enhanced Experience Card */}
                <div className="ml-16 glass border border-white/30 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-neutral-800 mb-3">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-6 text-neutral-600 mb-4">
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white">
                            <Briefcase size={16} />
                          </div>
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl text-white">
                            <MapPin size={16} />
                          </div>
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="p-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl text-white">
                            <Calendar size={16} />
                          </div>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Experience Badge */}
                    <div className="lg:ml-4 mb-6 lg:mb-0">
                      <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg">
                        <Star size={16} />
                        <span>Completed</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  {/* Enhanced Technologies Used */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-neutral-800 mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-blue-500" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-4 py-2 bg-gradient-to-r from-blue-50/80 to-purple-50/80 border border-blue-200/50 text-blue-700 rounded-full text-sm font-semibold hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Key Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-800 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-4 group">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: `${achievementIndex * 0.2}s` }}></div>
                          <span className="text-neutral-600 group-hover:text-neutral-800 transition-colors duration-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-20">
            <div className="glass border border-white/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center justify-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                Ready for New Opportunities
              </h3>
              <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and contribute to innovative projects. 
                Let's discuss how I can add value to your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;