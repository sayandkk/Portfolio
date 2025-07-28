import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Mail, User } from 'lucide-react';

const About: React.FC = () => {
  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Edappal, Malappuram, Kerala' },
    { icon: Calendar, label: 'Date of Birth', value: 'November 27, 2002' },
    { icon: Mail, label: 'Email', value: 'sayandkk53@gmail.com' },
    { icon: User, label: 'Role', value: 'Full Stack Developer' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Personal Information</h3>
              <div className="grid gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 dark:hover:bg-gray-700/30 transition-colors duration-300"
                  >
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <info.icon className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="font-semibold text-gray-800 dark:text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/50">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">My Story</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  A passionate and dedicated Computer Science Engineer with a strong foundation in software development 
                  and emerging technologies. I thrive on creating innovative solutions that bridge the gap between 
                  complex technical challenges and user-friendly applications.
                </p>
                <p>
                  My journey in technology has been driven by curiosity and a desire to make meaningful contributions 
                  to the digital world. From developing full-stack web applications to analyzing biomedical signals, 
                  I enjoy exploring diverse domains and pushing the boundaries of what's possible.
                </p>
                <p>
                  Currently based in Kerala, I'm always eager to collaborate on exciting projects and contribute to 
                  teams that value innovation, quality, and continuous learning.
                </p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-2">Let's Connect!</h4>
              <p className="text-blue-100">
                Always open to discussing new opportunities, collaborations, and innovative ideas.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;