import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90, color: '#61DAFB' },
        { name: 'TypeScript', level: 85, color: '#3178C6' },
        { name: 'JavaScript', level: 88, color: '#F7DF1E' },
        { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
        { name: 'HTML/CSS', level: 95, color: '#E34F26' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'NestJS', level: 85, color: '#E0234E' },
        { name: 'Node.js', level: 80, color: '#339933' },
        { name: 'Python', level: 75, color: '#3776AB' },
        { name: 'PostgreSQL', level: 78, color: '#336791' },
        { name: 'MongoDB', level: 82, color: '#47A248' }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 88, color: '#F05032' },
        { name: 'Firebase', level: 85, color: '#FFCA28' },
        { name: 'Arduino', level: 70, color: '#00979D' },
        { name: 'Docker', level: 65, color: '#2496ED' },
        { name: 'AWS', level: 60, color: '#FF9900' }
      ]
    }
  ];

  const techLogos = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Tech Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {techLogos.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2, y: -10 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})` 
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;