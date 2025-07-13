import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, FileText, Sparkles } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "vigneshananthapalli67@gmail.com",
      link: "mailto:vigneshananthapalli67@gmail.com",
      color: "blue"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9704543369",
      link: "tel:+919704543369",
      color: "purple"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Kakinada, India",
      link: null,
      color: "pink"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ananthapallivignesh200567",
      icon: "🐙"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/vignesh-ananthapalli-23646831b",
      icon: "💼"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      pink: "from-pink-500 to-pink-600"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            Get In Touch
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full animate-pulse-glow"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-neutral-800 mb-6 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-blue-500" />
                  Let's Connect
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Whether you have a question about my work, want to discuss a potential collaboration, or just want to say hello, I'd love to hear from you.
                </p>
              </div>

              {/* Enhanced Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="glass border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${getColorClasses(info.color)} text-white shadow-lg`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-neutral-800 mb-2">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-neutral-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-neutral-600 font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link p-6 glass border border-white/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="text-3xl mb-2">{social.icon}</div>
                      <div className="text-sm font-semibold text-neutral-700">{social.name}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Enhanced Availability Status */}
              <div className="glass border border-white/30 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-neutral-800 mb-3">Current Status</h4>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 font-semibold">Available for opportunities</span>
                </div>
                <p className="text-neutral-600 text-sm">
                  I'm currently open to full-time positions, freelance work, and interesting collaborations.
                </p>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="glass border border-white/30 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white shadow-lg">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-800">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-3 flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-500" />
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input w-full px-4 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-3 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-500" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input w-full px-4 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-500" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input w-full px-4 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-3 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-500" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-input w-full px-4 py-4 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center gap-2 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;