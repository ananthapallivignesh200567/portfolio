import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react';

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
    <section id="education" className="py-24 bg-gradient-to-br from-neutral-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            My academic journey and professional certifications that have shaped my technical expertise.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Education Timeline */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Academic Journey
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative mb-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Education Card */}
                  <div className="ml-16 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-neutral-800 mb-2">{edu.degree}</h3>
                        <div className="flex items-center gap-4 text-neutral-600 mb-3">
                          <div className="flex items-center gap-2">
                            <GraduationCap size={18} className="text-blue-500" />
                            <span className="font-semibold">{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-purple-500" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-pink-500" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* GPA Badge */}
                      <div className="lg:ml-4 mb-4 lg:mb-0">
                        <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                          <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {edu.gpa}
                          </div>
                          <div className="text-sm text-neutral-600 font-medium">GPA</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                      {edu.description}
                    </p>

                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Course Highlights */}
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-800 mb-4 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-blue-500" />
                          Course Highlights
                        </h4>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-neutral-600 text-sm">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-neutral-800 mb-4 flex items-center gap-2">
                          <Award className="w-5 h-5 text-purple-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-neutral-600 text-sm">{achievement}</span>
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

          {/* Certifications */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Professional Certifications
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-neutral-800 mb-1">{cert.title}</h4>
                      <p className="text-sm text-blue-600 font-medium mb-2">{cert.issuer} • {cert.year}</p>
                      <p className="text-neutral-600 text-sm leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                Continuous Learning
              </h3>
              <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
                I believe in lifelong learning and staying updated with the latest technologies and industry trends.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
                <Users size={20} />
                View Certificates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;