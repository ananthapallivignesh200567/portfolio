import React from 'react';
import { Code, Database, Globe, Cloud, Award, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical",
      icon: <Code className="w-6 h-6" />,
      color: "blue",
      skills: [
        { name: "Python (core)", level: 85 },
        { name: "Java (core)", level: 80 },
        { name: "C Language", level: 75 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      color: "purple",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 70 }
      ]
    },
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "pink",
      skills: [
        { name: "React.js", level: 80 },
        { name: "Tailwind CSS (Basic)", level: 70 },
        { name: "HTML", level: 85 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Cloud className="w-6 h-6" />,
      color: "indigo",
      skills: [
        { name: "Git (Basic)", level: 70 },
        { name: "GitHub", level: 80 },
        { name: "Postman", level: 75 },
        { name: "VS Code", level: 85 },
        { name: "AWS (CCP Certified)", level: 80 }
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      issuer: "AWS",
      year: "2025",
      description: "Ultimate AWS Certified Cloud Practitioner Course (CLF-C02) – Udemy by Stephane Maarek. Demonstrating cloud fluency and foundational understanding of 25+ AWS services."
    },
    {
      title: "Java Programming Fundamentals",
      issuer: "edX",
      year: "2024",
      description: "Progra001 – edX Certificate"
    },
    {
      title: "Back-end Application Development",
      issuer: "IBM",
      year: "2024",
      description: "CAD220EN – edX Certificate by IBM"
    },
    {
      title: "Introduction to Web Development",
      issuer: "IBM",
      year: "2024",
      description: "CAD101EN – edX Certificate by IBM"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      pink: "from-pink-500 to-pink-600",
      indigo: "from-indigo-500 to-indigo-600"
    };
    return colors[color] || colors.blue;
  };

  const getBgColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200",
      purple: "bg-purple-50 border-purple-200",
      pink: "bg-pink-50 border-pink-200",
      indigo: "bg-indigo-50 border-indigo-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-neutral-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Technical strengths across the full stack, cloud computing, and modern development tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border ${getBgColorClasses(category.color)}`}>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${getColorClasses(category.color)} text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-neutral-700">{skill.name}</span>
                        <span className="text-sm font-semibold text-neutral-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(category.color)} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications & Achievements
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-neutral-800 mb-1">{cert.title}</h4>
                    <p className="text-sm text-blue-600 font-medium mb-2">{cert.issuer} • {cert.year}</p>
                    <p className="text-neutral-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Highlights */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-3xl p-8">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-neutral-800 mb-2">Academic Excellence</h4>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  8.03
                </div>
                <p className="text-lg font-semibold text-neutral-700">B.Tech GPA</p>
                <p className="text-neutral-600">Computer Science</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  8.91
                </div>
                <p className="text-lg font-semibold text-neutral-700">Intermediate GPA</p>
                <p className="text-neutral-600">MPC Stream</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;