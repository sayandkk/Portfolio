import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, BookOpen, Star } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: 'TechPulse Hackathon Winner',
      description: 'First place winner in the prestigious TechPulse Hackathon, competing against 200+ participants with an innovative solution for real-time collaboration.',
      icon: Trophy,
      date: '2024',
      category: 'Competition',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 2,
      title: 'Research Publication',
      description: 'Co-authored research paper on "EMG Signal Analysis for Muscle Activity Recognition" published in international conference proceedings.',
      icon: BookOpen,
      date: '2024',
      category: 'Research',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 3,
      title: 'Dean\'s List Recognition',
      description: 'Consistently maintained high academic performance, earning recognition on the Dean\'s List for academic excellence.',
      icon: Award,
      date: '2022-2024',
      category: 'Academic',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: 'Open Source Contributor',
      description: 'Active contributor to various open-source projects with over 50+ contributions and 100+ GitHub stars across repositories.',
      icon: Star,
      date: 'Ongoing',
      category: 'Open Source',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '15+', icon: '🚀' },
    { label: 'GitHub Repositories', value: '25+', icon: '📦' },
    { label: 'Technologies Mastered', value: '12+', icon: '⚡' },
    { label: 'Hackathons Participated', value: '5+', icon: '🏆' }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 text-center hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white flex-shrink-0`}
                >
                  <achievement.icon size={24} />
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                      {achievement.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {achievement.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready for New Challenges</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Always eager to take on exciting projects and collaborate with innovative teams. 
              Let's create something amazing together!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;