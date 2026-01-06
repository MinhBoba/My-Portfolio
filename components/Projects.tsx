// components/Projects.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIAL_PROJECTS, PERSONAL_PROJECTS } from '../constants';
import { ExternalLink, Github, PlayCircle } from 'lucide-react'; // Import thêm PlayCircle
import { Link } from 'react-router-dom'; // Import Link

const ProjectCard = ({ project, index }: { project: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full"
  >
    <div className="relative h-48 overflow-hidden flex-shrink-0">
      <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/0 transition-colors z-10"></div>
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
      <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech: string) => (
          <span key={tech} className="text-xs px-2 py-1 bg-slate-700 rounded text-slate-300 border border-slate-600">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
          {/* Nút Demo: Dẫn đến trang nội bộ demo/:id */}
          {/* target="_blank" để mở tab mới */}
          <Link 
            to={`/demo/${project.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg text-sm font-medium transition-colors text-white shadow-lg shadow-blue-900/20"
          >
            <PlayCircle size={16} /> Live Demo
          </Link>
        
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 flex items-center justify-center gap-2 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-sm font-medium transition-colors text-slate-200"
          >
            <Github size={16} /> Code
          </a>
        </div>
    </div>
  </motion.div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work, demonstrating capabilities in frontend architecture and full-stack development.
          </p>
        </motion.div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 border-l-4 border-blue-500 pl-4 text-white">Industrial Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIAL_PROJECTS.map((project, idx) => (
              <ProjectCard key={project.id || idx} project={project} index={idx} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 border-l-4 border-green-500 pl-4 text-white">Personal Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERSONAL_PROJECTS.map((project, idx) => (
              <ProjectCard key={project.id || idx} project={project} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
