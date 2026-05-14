/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Operations Executive",
    company: "The Future University (ESH Values)",
    period: "Jan 2024 - Present",
    location: "Mohali, India",
    description: "Spearheaded daily operations delivering a 20% improvement in efficiency. Engineered Excel macro solutions reducing manual load by 35%. Consistently maintained >98% SLA fulfillment.",
  },
  {
    title: "Operations Intern",
    company: "The Future University (ESH Values)",
    period: "2023 - 2024",
    location: "Mohali, India",
    description: "Built KPI dashboards tracking service quality and onboarding rates, reducing reporting time by 25%. Contributed to an 18% rise in NPS score.",
  },
  {
    title: "Logistics & SCM Coordinator (Intern)",
    company: "STC Logistics",
    period: "Jun 2023 - Aug 2023",
    location: "Ludhiana, India",
    description: "Optimized FTL and LTL transportation planning through route optimization, reducing delivery times by 10%. Managed vendor negotiations and inventory.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container px-6 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">Professional Journey</h2>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="hidden md:absolute md:left-[50%] md:-translate-x-1/2 w-[1px] h-full bg-zinc-200 -z-10" />
                
                <div className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="md:w-1/2 flex flex-col md:text-right">
                    <div className={`md:flex items-center gap-4 mb-2 ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                        <div className="flex items-center gap-1 text-zinc-500 text-sm font-medium">
                            <Calendar size={14} /> {exp.period}
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <div className={`flex items-center gap-1 text-blue-600 font-semibold mb-4 ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                        {exp.company}
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md z-10" />
                  
                  <div className="md:w-1/2">
                    <p className="text-zinc-600 leading-relaxed max-w-sm text-sm">
                      {exp.description}
                    </p>
                    <div className="flex items-center gap-1 text-zinc-400 text-xs mt-4 italic">
                      <MapPin size={14} /> {exp.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
