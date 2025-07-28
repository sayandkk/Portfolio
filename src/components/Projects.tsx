import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Play, Database, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Netflix Clone',
      shortDescription: 'Full-featured streaming platform replica',
      fullDescription: 'A comprehensive Netflix clone built with React and integrated with TMDB API. Features include user authentication, movie browsing, search functionality, and responsive design. Implements modern React patterns and state management.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'JavaScript', 'TMDB API', 'CSS3', 'Firebase Auth'],
      features: ['User Authentication', 'Movie Search', 'Responsive Design', 'API Integration'],
      github: 'https://github.com/sayandkk/netflix-clone',
      live: '#',
      category: 'Web Application'
    },
    {
      id: 2,
      title: 'Inventory Management System',
      shortDescription: 'React-based inventory tracking solution',
      fullDescription: 'A robust inventory management system designed for businesses to track products, manage stock levels, and generate reports. Built with React frontend and Firebase backend for real-time data synchronization.',
      image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Firebase', 'Material-UI', 'JavaScript'],
      features: ['Real-time Updates', 'Stock Management', 'Report Generation', 'User Roles'],
      github: 'https://github.com/sayandkk/inventory-management',
      live: '#',
      category: 'Business Application'
    },
    {
      id: 3,
      title: 'Employee Transfer System',
      shortDescription: 'Enterprise-grade employee management platform',
      fullDescription: 'A comprehensive employee transfer management system built for UL Technology Solutions. Features include employee profiles, transfer requests, approval workflows, and administrative dashboards. Built with modern full-stack architecture.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'NestJS', 'PostgreSQL', 'TypeScript', 'JWT'],
      features: ['Role-based Access', 'Approval Workflow', 'Admin Dashboard', 'Notifications'],
      github: '#',
      live: '#',
      category: 'Enterprise System'
    },
    {
      id: 4,
      title: 'EMG Signal Analysis',
      shortDescription: 'Biomedical signal processing with Arduino',
      fullDescription: 'An innovative project for analyzing Electromyography (EMG) signals using Arduino and Python. Developed during internship at Aster Medcity, this system processes biomedical signals for muscle activity analysis and medical diagnostics.',
      image: 'https://images.pexels.com/photos/3825540/pexels-photo-3825540.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Arduino', 'Signal Processing', 'Data Analysis'],
      features: ['Signal Acquisition', 'Real-time Processing', 'Data Visualization', 'Medical Analysis'],
      github: 'https://github.com/sayandkk/emg-analysis',
      live: '#',
      category: 'Research Project'
    }
  ];

  const categories = ['All', 'Web Application', 'Business Application', 'Enterprise System', 'Research Project'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/50'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
                      >
                        <Play size={16} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
                      >
                        <Github size={16} />
                      </motion.button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;

                  return (
                    <div className="relative">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors duration-300"
                      >
                        <X size={20} />
                      </button>

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />

                      <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                            {project.category}
                          </span>
                          <div className="flex space-x-4">
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                            >
                              <Github size={20} />
                            </motion.a>
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                            >
                              <ExternalLink size={20} />
                            </motion.a>
                          </div>
                        </div>

                        <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                          {project.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {project.fullDescription}
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                              <Code className="mr-2" size={20} />
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white flex items-center">
                              <Database className="mr-2" size={20} />
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {project.features.map((feature) => (
                                <li key={feature} className="text-gray-600 dark:text-gray-300 flex items-center">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;