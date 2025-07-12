import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    {/* Modern gradient orbs */}
    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 rounded-full filter blur-3xl animate-float" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-indigo-400/25 via-cyan-400/20 to-blue-400/25 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
    <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-purple-400/20 via-pink-400/15 to-orange-400/20 rounded-full filter blur-2xl animate-float" style={{ animationDelay: '4s' }} />
  </div>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'Backend Engineer',
    'Database Expert'
  ];

  useEffect(() => {
    setIsVisible(true);
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-neutral-50 via-blue-50 to-indigo-50">
      <AnimatedBackground />
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
        <div className={`backdrop-blur-xl bg-white/80 border border-white/40 shadow-2xl rounded-3xl p-12 md:p-20 max-w-4xl w-full flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>          
          {/* Profile Image */}
          <div className="mb-10 relative group">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-2 shadow-2xl group-hover:shadow-glow-lg transition-all duration-500">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">VA</div>
              </div>
            </div>
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
            Vignesh
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-700 text-center">
            Ananthapalli
          </h2>

          {/* Animated Role */}
          <div className="text-2xl md:text-3xl text-neutral-500 mb-10 h-12 flex items-center justify-center font-semibold">
            <span className="inline-block">
              {roles[currentRole]}
              <span className="inline-block w-1 h-10 bg-gradient-to-b from-blue-400 to-purple-400 ml-2 animate-pulse rounded-full"></span>
            </span>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed text-center font-medium">
            Passionate software engineer with expertise in full-stack development, creating elegant solutions for complex problems with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            
            <button 
              onClick={scrollToAbout}
              className="px-8 py-4 border-2 border-neutral-300 text-neutral-700 font-semibold rounded-2xl hover:border-blue-400 hover:text-blue-600 transition-all duration-300 flex items-center gap-3"
            >
              Learn More
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/ananthapallivignesh200567"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/90 border border-neutral-200 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/vignesh-ananthapalli-23646831b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/90 border border-neutral-200 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:ananthapallivignesh200567@gmail.com"
              className="p-4 rounded-2xl bg-white/90 border border-neutral-200 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-4">
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-neutral-400 hover:text-blue-500 transition-colors"
              aria-label="Scroll to About section"
            >
              <ChevronDown size={40} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;