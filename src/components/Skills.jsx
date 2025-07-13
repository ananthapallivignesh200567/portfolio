import React from 'react';
import { Code, Database, Globe, Cloud, Award, Star, TrendingUp, Zap, FileText, Coffee, Cpu, Terminal, Palette, Server, GitBranch, Monitor, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical",
      icon: <Code className="w-6 h-6" />,
      color: "blue",
      skills: [
        { name: "Python", icon: <FileText className="w-5 h-5" /> },
        { name: "Java", icon: <Coffee className="w-5 h-5" /> },
        { name: "C Language", icon: <Cpu className="w-5 h-5" /> },
        { name: "JavaScript", icon: <Code className="w-5 h-5" /> }
      ]
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      color: "purple",
      skills: [
        { name: "Node.js", icon: <Server className="w-5 h-5" /> },
        { name: "Express.js", icon: <Terminal className="w-5 h-5" /> },
        { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
        { name: "SQL", icon: <Database className="w-5 h-5" /> }
      ]
    },
    {
      title: "Frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "pink",
      skills: [
        { name: "React.js", icon: <Code className="w-5 h-5" /> },
        { name: "Tailwind CSS", icon: <Palette className="w-5 h-5" /> },
        { name: "HTML", icon: <FileText className="w-5 h-5" /> }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Cloud className="w-6 h-6" />,
      color: "indigo",
      skills: [
        { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
        { name: "GitHub", icon: <GitBranch className="w-5 h-5" /> },
        { name: "Postman", icon: <Monitor className="w-5 h-5" /> },
        { name: "VS Code", icon: <Code className="w-5 h-5" /> },
        { name: "AWS", icon: <Cloud className="w-5 h-5" /> }
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
      blue: "bg-blue-50/50 border-blue-200/50",
      purple: "bg-purple-50/50 border-purple-200/50",
      pink: "bg-pink-50/50 border-pink-200/50",
      indigo: "bg-indigo-50/50 border-indigo-200/50"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full animate-pulse-glow"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Technical strengths across the full stack, cloud computing, and modern development tools.
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div key={index} className={`glass rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border ${getBgColorClasses(category.color)} hover-lift`}>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${getColorClasses(category.color)} text-white shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group flex items-center gap-3 p-4 bg-white/30 rounded-2xl hover:bg-white/50 transition-all duration-300">
                      <div className={`p-2 rounded-xl bg-gradient-to-r ${getColorClasses(category.color)} text-white shadow-md`}>
                        {skill.icon}
                      </div>
                      <span className="font-semibold text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Certifications Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Certifications & Achievements
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse-glow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="glass border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white shadow-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-neutral-800 mb-2">{cert.title}</h4>
                    <p className="text-sm text-blue-600 font-semibold mb-3 bg-blue-50/50 px-3 py-1 rounded-full inline-block">{cert.issuer} • {cert.year}</p>
                    <p className="text-neutral-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Academic Highlights */}
          <div className="glass border border-white/30 rounded-3xl p-8">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-bold text-neutral-800 mb-3 flex items-center justify-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                Academic Excellence
              </h4>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full animate-pulse-glow"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center group">
                <div className="text-5xl font-black gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                  8.03
                </div>
                <p className="text-lg font-semibold text-neutral-700 mb-1">B.Tech GPA</p>
                <p className="text-neutral-600">Computer Science</p>
              </div>
              
              <div className="text-center group">
                <div className="text-5xl font-black gradient-text mb-3 group-hover:scale-110 transition-transform duration-300">
                  8.91
                </div>
                <p className="text-lg font-semibold text-neutral-700 mb-1">Intermediate GPA</p>
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