import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Phone, MapPin, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ananthapallivignesh200567',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:text-neutral-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vignesh-ananthapalli-23646831b',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      url: 'mailto:vigneshananthapalli67@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:text-blue-500'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="glass-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Enhanced Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Enhanced Brand Section */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold gradient-text">
                  Vignesh Ananthapalli
                </h3>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                Full Stack Developer passionate about creating innovative solutions and building scalable applications with modern technologies.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link p-4 glass border border-white/20 rounded-2xl text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition-all duration-300 py-2 hover:translate-x-2 transform group"
                >
                  <span className="group-hover:text-blue-400 transition-colors duration-300">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Email</p>
                  <a
                    href="mailto:vigneshananthapalli67@gmail.com"
                    className="text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    vigneshananthapalli67@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Phone</p>
                  <a 
                    href="tel:+919704543369"
                    className="text-neutral-300 hover:text-white transition-colors duration-300"
                  >
                    +91 9704543369
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-neutral-400">Location</p>
                  <p className="text-neutral-300">Kakinada, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Enhanced Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-neutral-300">
            <span>© {currentYear} Vignesh Ananthapalli. All rights reserved.</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> 
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
    </footer>
  );
};

export default Footer;