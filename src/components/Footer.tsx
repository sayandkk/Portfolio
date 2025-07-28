import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/sayandkk',
      color: 'hover:text-gray-800 dark:hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/sayandkk',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:sayandkk53@gmail.com',
      color: 'hover:text-green-600'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            >
              Sayand K K
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate Computer Science Engineer crafting innovative digital solutions 
              with modern technologies. Always eager to take on new challenges and 
              collaborate on exciting projects.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              📍 Edappal, Malappuram, Kerala, India
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Social Links & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              Let's Connect
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Follow me on social media or drop me a message. I'm always open to 
              discussing new opportunities and collaborations.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <span>© 2024 Sayand K K. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="text-red-500" size={16} fill="currentColor" />
              </motion.div>
              <span>using React & Tailwind CSS</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
            >
              Back to Top ↑
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;