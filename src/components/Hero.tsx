/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="glass px-8 py-3 rounded-full flex gap-6 md:gap-8 items-center text-sm font-medium">
        <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
        <a href="#work" className="hover:text-indigo-600 transition-colors">Work</a>
        <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
        <a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a>
        <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
        <div className="hidden sm:block w-[1px] h-4 bg-zinc-200" />
        <div className="hidden sm:flex gap-4">
          <a href="#" className="text-zinc-500 hover:text-black"><Linkedin size={18} /></a>
          <a href="mailto:mohitsh5697@gmail.com" className="text-zinc-500 hover:text-black"><Mail size={18} /></a>
        </div>
      </div>
    </motion.nav>
  );
};

export const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center pt-20 overflow-hidden grid-bg">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl -z-10"
      />
      
      <div className="container px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100"
        >
          Operations & Supply Chain Expert
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-8xl font-display font-bold tracking-tight text-zinc-900 mb-8"
        >
          Optimizing <span className="text-blue-600">Global</span> Workflows.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 mb-12 leading-relaxed"
        >
          Hi, I'm Mohit Sharma. I specialize in supply chain logistics, process automation, and driving measurable efficiency across complex operations.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#experience"
            className="px-8 py-4 bg-zinc-900 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg shadow-zinc-200"
          >
            My Experience
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass rounded-xl font-semibold hover:bg-white/90 transition-all transform hover:-translate-y-1 active:scale-95"
          >
            Connect with Me
          </a>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-400 to-transparent" />
      </motion.div>
    </section>
  );
};
