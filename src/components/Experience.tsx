import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Development Intern',
      company: 'UL Technology Solutions',
      location: 'Remote',
      period: 'May 2024 - Present',
      description: 'Developing an Employee Transfer System using React, NestJS, and PostgreSQL. Implementing role-based access control, approval workflows, and administrative dashboards for enterprise-grade employee management.',
      achievements: [
        'Built full-stack web application with modern technologies',
        'Implemented secure authentication and authorization',
        'Designed efficient database schemas and APIs',
        'Created responsive and intuitive user interfaces'
      ],
      technologies: ['React', 'NestJS', 'PostgreSQL', 'TypeScript', 'JWT'],
      type: 'internship',
      current: true
    },
    {
      id: 2,
      title: 'Biomedical Research Intern',
      company: 'Aster Medcity',
      location: 'Kochi, Kerala',
      period: 'February 2024 - March 2024',
      description: 'Conducted research on EMG signal analysis using Arduino and Python. Developed signal processing algorithms for muscle activity analysis and contributed to medical diagnostic tools.',
      achievements: [
        'Developed signal acquisition systems using Arduino',
        'Implemented real-time signal processing algorithms',
        'Created data visualization tools for medical analysis',
        'Collaborated with medical professionals on research'
      ],
      technologies: ['Python', 'Arduino', 'Signal Processing', 'Data Analysis', 'NumPy'],
      type: 'internship',
      current: false
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'University of Calicut',
      period: '2020 - 2024',
      grade: 'CGPA: 8.5/10',
      description: 'Specialized in software engineering, data structures, algorithms, and computer systems. Completed various projects in web development, mobile applications, and research.'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center"
            >
              <Building className="mr-3 text-blue-600" size={24} />
              Professional Experience
            </motion.h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="relative pl-12"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-2 w-4 h-4 rounded-full border-4 ${
                      exp.current 
                        ? 'bg-green-500 border-green-200 animate-pulse' 
                        : 'bg-blue-600 border-blue-200'
                    }`}></div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                            {exp.company}
                          </p>
                        </div>
                        {exp.current && (
                          <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-gray-800 dark:text-white flex items-center"
            >
              <Award className="mr-3 text-purple-600" size={24} />
              Education
            </motion.h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <Award size={16} className="mr-2" />
                      {edu.grade}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;