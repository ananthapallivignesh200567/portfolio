import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, FileText } from 'lucide-react';

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
    <section id="contact" className="py-24 bg-gradient-to-br from-neutral-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-neutral-800 mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Whether you have a question about my work, want to discuss a potential collaboration, or just want to say hello, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${getColorClasses(info.color)} text-white`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-neutral-800 mb-1">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-neutral-600 hover:text-blue-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-neutral-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-semibold text-neutral-800 mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-2xl">{social.icon}</div>
                      <div className="text-sm font-medium text-neutral-700 mt-1">{social.name}</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-neutral-800 mb-2">Current Status</h4>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 font-medium">Available for opportunities</span>
                </div>
                <p className="text-neutral-600 text-sm">
                  I'm currently open to full-time positions, freelance work, and interesting collaborations.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-800">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
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