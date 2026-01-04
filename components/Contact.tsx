import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-700"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-slate-400">
              I'm currently available for freelance projects on Upwork or full-time opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-xl hover:bg-slate-750 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-blue-400 text-sm break-all">
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-xl hover:bg-slate-750 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-500 mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="font-semibold mb-2">Upwork</h3>
              <a href={PERSONAL_INFO.upwork} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400 text-sm">
                View Profile
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-xl hover:bg-slate-750 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <span className="text-slate-400 text-sm">
                Remote / Worldwide
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;