import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolset developed over years of building production-grade applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-blue-400">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>{skill}</span>
                  </div>
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