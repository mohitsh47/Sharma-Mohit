/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Package, TrendingUp, Cpu, BarChart3, Users, Globe } from "lucide-react";

const skills = [
  { name: "Operations", icon: Cpu, techs: ["Process Automation", "SOP Development", "Workflow Optimization", "SLA Management"] },
  { name: "Supply Chain", icon: Package, techs: ["Inventory Management", "Vendor Mgt", "FTL/LTL Planning", "Logistics Control"] },
  { name: "Analytics", icon: BarChart3, techs: ["Power BI", "KPI Dashboards", "Excel Macros", "OKR Tracking", "Data Modeling"] },
  { name: "CRM & Tech", icon: TrendingUp, techs: ["Zoho CRM", "WebEngage", "Aisensy", "Google Workspace"] },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Strategic Toolbox</h2>
            <p className="text-lg text-zinc-600 mb-12 max-w-lg">
              A blend of analytical rigor and operational expertise. I use data to drive decisions and automation to scale processes.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white rounded-2xl border border-zinc-200 hover:border-blue-300 transition-colors shadow-sm"
                >
                  <skill.icon className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                  <div className="flex flex-wrap gap-1">
                    {skill.techs.slice(0, 2).map(tech => (
                      <span key={tech} className="text-xs text-zinc-500">{tech} •</span>
                    ))}
                    <span className="text-xs text-blue-600 font-medium">Expertise</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              animate={{ 
                rotate: [0, 5, 0, -5, 0],
                y: [0, -10, 0, 10, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square w-full max-w-md mx-auto bg-blue-600 rounded-3xl p-12 overflow-hidden flex items-center justify-center shadow-2xl shadow-blue-200"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              <BarChart3 className="text-white w-2/3 h-2/3 relative z-10" strokeWidth={1} />
              
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
