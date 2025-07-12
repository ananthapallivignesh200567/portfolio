import React from 'react';
import { Github, Linkedin, Mail, Download, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-neutral-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Image and Basic Info */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="relative group">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-2 shadow-2xl group-hover:shadow-glow-lg transition-all duration-500">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <div className="text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">VA</div>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl animate-pulse"></div>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-xl">
                      <Mail size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Email</p>
                      <p className="font-medium text-neutral-700">vigneshananthapalli67@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-xl">
                      <Calendar size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Phone</p>
                      <p className="font-medium text-neutral-700">+91 9704543369</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-pink-100 rounded-xl">
                      <MapPin size={20} className="text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Location</p>
                      <p className="font-medium text-neutral-700">Kakinada, India</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 rounded-xl">
                      <Calendar size={20} className="text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Experience</p>
                      <p className="font-medium text-neutral-700">2+ Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
                  Vignesh Ananthapalli
                </h3>
                <div className="text-xl font-semibold text-blue-600 mb-6">
                  MERN Full Stack Developer | Cloud Computing
                </div>
                
                <div className="prose prose-lg text-neutral-600 space-y-6">
                  <p className="text-lg leading-relaxed">
                    I am a passionate MERN Full Stack Developer with a strong foundation in cloud computing and modern web technologies. I enjoy building scalable, user-friendly applications and have hands-on experience with both frontend and backend stacks.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    My journey includes impactful internships at TURTIL and NETWORX, cloud certification, and a drive to deliver elegant solutions for real-world problems. I specialize in creating robust, scalable applications that provide exceptional user experiences.
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-blue-800 mb-3">What I Do</h4>
                    <ul className="space-y-2 text-neutral-700">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        Full-stack web development with MERN stack
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        Cloud computing and AWS services
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                        Machine learning model deployment
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        API development and microservices
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/vignesh-ananthapalli-23646831b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ananthapallivignesh200567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white rounded-2xl hover:bg-neutral-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Github size={20} />
                  GitHub
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