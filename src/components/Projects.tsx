/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Critical Success Factors for On-time Delivery",
    description: "Conducted deep-dive research for Chandigarh University identified logistics, communication, and resource allocation as top drivers. Resulted in measurable student satisfaction improvement.",
    tags: ["Logistics", "Research", "Analysis", "Efficiency"],
    link: "#",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Revolutionizing HR Practices: Future Workforce",
    description: "Designed a restructured Performance Management System (PMS) to enable continuous feedback loops and goal alignment at Chandigarh University.",
    tags: ["HRM", "Strategy", "PMS", "L&D"],
    link: "#",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "CRM Ecosystem Management",
    description: "Managed end-to-end CRM operations (Zoho, Aisensy) at The Future University, contributing to a 30% increase in onboarding and 95% retention rate.",
    tags: ["Zoho", "CRM", "Retention", "Operations"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000",
  },
];

export const Projects = () => {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="container px-6 mx-auto">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Key Initiatives</h2>
          <p className="text-lg text-zinc-600">
            Strategic projects and analytical studies focused on improving operational outcomes and supply chain reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100 flex flex-col h-full"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.link} className="p-2 bg-white rounded-full text-black hover:scale-110 transition-transform"><ExternalLink size={20} /></a>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-zinc-600 mb-6 flex-grow text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-xs font-semibold text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
