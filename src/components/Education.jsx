import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, TrendingUp, Star } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Ideal Institute of Technology",
      location: "Kakinada, India",
      period: "Apr 2022 - Apr 2026",
      gpa: "8.03",
      description: "Comprehensive study of computer science fundamentals, software engineering principles, and modern development practices.",
      highlights: [
        "Core subjects: Computer Science, Data Structures, Algorithms, Database Management",
        "Electives: Web Development, Software Engineering, Programming Languages",
        "Projects: Full-stack applications, API development, Database design",
        "Activities: Technical clubs, Coding competitions, Academic projects"
      ],
      achievements: [
        "Consistently maintained GPA of 8.03",
        "Completed multiple technical projects",
        "Participated in coding competitions",
        "Active member of Computer Science department"
      ]
    },
    {
      degree: "Intermediate (12th Grade) - MPC",
      institution: "Sri Chaitanya Junior College",
      location: "Kakinada, India",
      period: "Apr 2020 - Mar 2022",
      gpa: "8.91",
      description: "Science stream with focus on Mathematics, Physics, and Computer Science.",
      highlights: [
        "Subjects: Mathematics, Physics, Chemistry, Computer Science",
        "Strong foundation in logical thinking and problem-solving",
        "Participated in science exhibitions and competitions",
        "Developed interest in programming and technology"
      ],
      achievements: [
        "Outstanding academic performance with 8.91 GPA",
        "Secured admission in top-tier engineering college",
        "Participated in district-level science competitions",
        "Member of Science Club and Mathematics Club"
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2025",
      description: "Ultimate AWS Certified Cloud Practitioner Course (CLF-C02) – Udemy by Stephane Maarek. Demonstrating cloud fluency and foundational understanding of 25+ AWS services.",
      icon: "☁️"
    },
    {
      title: "Java Programming Fundamentals",
      issuer: "edX",
      year: "2024",
      description: "Progra001 – edX Certificate. Advanced Java programming concepts, object-oriented design, and software development.",
      icon: "☕"
    },
    {
      title: "Back-end Application Development",
      issuer: "IBM",
      year: "2024",
      description: "CAD220EN – edX Certificate by IBM. Node.js, Express.js, and modern backend development practices.",
      icon: "⚙️"
    },
    {
      title: "Introduction to Web Development",
      issuer: "IBM",
      year: "2024",
      description: "CAD101EN – edX Certificate by IBM. HTML, CSS, JavaScript, and modern web development fundamentals.",
      icon: "🌐"
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            Education & Certifications
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full animate-pulse-glow"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            My academic journey and professional certifications that have shaped my technical expertise.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Enhanced Education Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Academic Journey
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse-glow"></div>
            </div>

            <div className="relative">
              {/* Enhanced Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 timeline-line"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative mb-16">
                  {/* Enhanced Timeline Dot */}
                  <div className="absolute left-6 top-8 timeline-dot"></div>
                  
                  {/* Enhanced Education Card */}
                  <div className="ml-16 glass border border-white/30 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-neutral-800 mb-3">{edu.degree}</h3>
                        <div className="flex flex-wrap items-center gap-6 text-neutral-600 mb-4">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white">
                              <GraduationCap size={16} />
                            </div>
                            <span className="font-semibold">{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl text-white">
                              <MapPin size={16} />
                            </div>
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl text-white">
                              <Calendar size={16} />
                            </div>
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced GPA Badge */}
                      <div className="lg:ml-4 mb-6 lg:mb-0">
                        <div className="text-center p-6 glass border border-white/30 rounded-2xl">
                          <div className="text-4xl font-black gradient-text mb-2">
                            {edu.gpa}
                          </div>
                          <div className="text-sm text-neutral-600 font-semibold">GPA</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                      {edu.description}
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Enhanced Course Highlights */}
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-800 mb-4 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-blue-500" />
                          Course Highlights
                        </h4>
                        <ul className="space-y-3">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start gap-3 group">
                              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: `${highlightIndex * 0.2}s` }}></div>
                              <span className="text-neutral-600 text-sm group-hover:text-neutral-800 transition-colors duration-300">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Enhanced Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-800 mb-4 flex items-center gap-2">
                          <Award className="w-5 h-5 text-purple-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3 group">
                              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0 animate-pulse" style={{ animationDelay: `${achievementIndex * 0.2}s` }}></div>
                              <span className="text-neutral-600 text-sm group-hover:text-neutral-800 transition-colors duration-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Certifications */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Professional Certifications
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full animate-pulse-glow"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="glass border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-neutral-800 mb-2">{cert.title}</h4>
                      <p className="text-sm text-blue-600 font-semibold mb-3 bg-blue-50/50 px-3 py-1 rounded-full inline-block">{cert.issuer} • {cert.year}</p>
                      <p className="text-neutral-600 text-sm leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-20">
            <div className="glass border border-white/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center justify-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                Continuous Learning
              </h3>
              <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                I believe in lifelong learning and staying updated with the latest technologies and industry trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;