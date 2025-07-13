import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight, Sparkles, Zap, Code, Database } from 'lucide-react';

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    {/* Enhanced gradient orbs with better positioning and effects */}
    <div className="absolute top-[-15%] left-[-15%] w-[600px] h-[600px] bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-pink-400/40 rounded-full filter blur-3xl animate-blob1" />
    <div className="absolute bottom-[-15%] right-[-15%] w-[700px] h-[700px] bg-gradient-to-tr from-indigo-400/35 via-cyan-400/30 to-blue-400/35 rounded-full filter blur-3xl animate-blob2" />
    <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/30 via-pink-400/25 to-orange-400/30 rounded-full filter blur-2xl animate-blob3" />
    
    {/* Additional floating elements */}
    <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400/60 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-purple-400/50 rounded-full animate-float" style={{ animationDelay: '3s' }} />
    <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-pink-400/70 rounded-full animate-float" style={{ animationDelay: '5s' }} />
  </div>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(roleInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Mouse follower effect */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-multiply filter blur-sm animate-pulse-glow"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center">
        <div className={`glass p-12 md:p-20 max-w-5xl w-full flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>          
          {/* Enhanced Profile Image */}
          <div className="mb-12 relative group">
            <div className="w-56 h-56 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-3 shadow-2xl group-hover:shadow-glow-lg transition-all duration-500 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                <div className="text-8xl font-black gradient-text">VA</div>
                {/* Floating icons around the profile */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-float">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <Database className="w-4 h-4 text-white" />
                </div>
                <div className="absolute top-1/2 -right-4 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '4s' }}>
                  <Zap className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-2xl animate-pulse"></div>
          </div>

          {/* Enhanced Main Heading */}
          <div className="text-center mb-8">
            <h1 className="text-7xl md:text-9xl font-black mb-4 gradient-text">
              Vignesh
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold text-neutral-700">
              Ananthapalli
            </h2>
          </div>

          {/* Enhanced Animated Role */}
          <div className="text-2xl md:text-3xl text-neutral-500 mb-12 h-16 flex items-center justify-center font-semibold">
            <div className="flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
              <span className="inline-block">
                {roles[currentRole]}
                <span className="inline-block w-1 h-12 bg-gradient-to-b from-blue-400 to-purple-400 ml-3 animate-pulse rounded-full"></span>
              </span>
              <Sparkles className="w-6 h-6 text-purple-500 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl text-neutral-600 mb-16 max-w-4xl mx-auto leading-relaxed text-center font-medium">
            Passionate software engineer with expertise in full-stack development, creating elegant solutions for complex problems with modern technologies.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <button 
              onClick={scrollToAbout}
              className="group px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-3xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-500 shadow-2xl hover:shadow-glow-lg transform hover:scale-105 flex items-center gap-3"
            >
              <span>Learn More</span>
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="https://github.com/ananthapallivignesh200567"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link p-6 rounded-3xl glass text-neutral-600 hover:text-blue-600 shadow-2xl hover:shadow-glow-lg"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com/in/vignesh-ananthapalli-23646831b"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link p-6 rounded-3xl glass text-neutral-600 hover:text-blue-600 shadow-2xl hover:shadow-glow-lg"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:ananthapallivignesh200567@gmail.com"
              className="social-link p-6 rounded-3xl glass text-neutral-600 hover:text-blue-600 shadow-2xl hover:shadow-glow-lg"
            >
              <Mail size={32} />
            </a>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="mt-8">
            <button
              onClick={scrollToAbout}
              className="group animate-bounce text-neutral-400 hover:text-blue-500 transition-all duration-300 p-4 rounded-full hover:bg-blue-50"
              aria-label="Scroll to About section"
            >
              <ChevronDown size={48} className="group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;