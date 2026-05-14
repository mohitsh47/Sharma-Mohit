/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Mail, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

export const Footer = () => {
    return (
        <footer id="contact" className="bg-zinc-900 pt-24 pb-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-0" />
            
            <div className="container px-6 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-display font-bold mb-8"
                    >
                        Let's optimize your <span className="text-blue-400">supply chain</span> journey.
                    </motion.h2>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <a 
                            href="mailto:mohitsh5697@gmail.com" 
                            className="inline-flex items-center gap-4 text-2xl md:text-3xl font-medium border-b-2 border-zinc-700 pb-2 hover:border-blue-400 transition-colors group"
                        >
                            mohitsh5697@gmail.com
                            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-24 border-t border-zinc-800 gap-8">
                    <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                        <span className="text-2xl font-display font-bold">Mohit<span className="text-blue-400">.</span></span>
                        <p className="text-zinc-500 text-sm">Operations & Supply Chain Professional</p>
                    </div>

                    <div className="flex gap-6">
                        {[
                            { icon: Linkedin, url: "https://linkedin.com/in/mohit-sharma7" },
                            { icon: Mail, url: "mailto:mohitsh5697@gmail.com" }
                        ].map((social, i) => (
                            <a 
                                key={i} 
                                href={social.url} 
                                className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>

                    <div className="text-zinc-500 text-sm">
                        © {new Date().getFullYear()} Mohit Sharma. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};
