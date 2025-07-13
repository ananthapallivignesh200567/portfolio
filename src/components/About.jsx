import React from 'react';
import { Github, Linkedin, Mail, Download, MapPin, Calendar, User, Award, Code, Database, Globe, Cloud } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full animate-pulse-glow"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Left Column - Image and Basic Info */}
            <div className="space-y-8">
              {/* Enhanced Profile Image */}
              <div className="relative group">
                <div className="w-56 h-56 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-3 shadow-2xl group-hover:shadow-glow-lg transition-all duration-500 animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                    <div className="text-8xl font-black gradient-text">VA</div>
                    {/* Floating icons */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-float">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                      <Database className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute top-1/2 -right-4 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '4s' }}>
                      <Globe className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-2xl animate-pulse"></div>
              </div>

              {/* Enhanced Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl text-white shadow-lg">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 font-medium">Email</p>
                      <p className="font-semibold text-neutral-700">vigneshananthapalli67@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl text-white shadow-lg">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 font-medium">Phone</p>
                      <p className="font-semibold text-neutral-700">+91 9704543369</p>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl text-white shadow-lg">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 font-medium">Location</p>
                      <p className="font-semibold text-neutral-700">Kakinada, India</p>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl text-white shadow-lg">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 font-medium">Experience</p>
                      <p className="font-semibold text-neutral-700">2+ Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Right Column - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
                  Vignesh Ananthapalli
                </h3>
                <div className="text-xl font-semibold gradient-text mb-6">
                  MERN Full Stack Developer | Cloud Computing
                </div>
                
                <div className="prose prose-lg text-neutral-600 space-y-6">
                  <p className="text-lg leading-relaxed">
                    I am a passionate MERN Full Stack Developer with a strong foundation in cloud computing and modern web technologies. I enjoy building scalable, user-friendly applications and have hands-on experience with both frontend and backend stacks.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    My journey includes impactful internships at TURTIL and NETWORX, cloud certification, and a drive to deliver elegant solutions for real-world problems. I specialize in creating robust, scalable applications that provide exceptional user experiences.
                  </p>

                  <div className="glass p-8 border border-white/30">
                    <h4 className="text-xl font-semibold text-neutral-800 mb-4 flex items-center gap-2">
                      <User className="w-5 h-5 text-blue-500" />
                      What I Do
                    </h4>
                    <ul className="space-y-3 text-neutral-700">
                      <li className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                        <span>Full-stack web development with MERN stack</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <span>Cloud computing and AWS services</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <span>Machine learning model deployment</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                        <span>API development and microservices</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/vignesh-ananthapalli-23646831b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Linkedin size={20} />
                  <span className="font-semibold">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/ananthapallivignesh200567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-2xl hover:from-neutral-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Github size={20} />
                  <span className="font-semibold">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;