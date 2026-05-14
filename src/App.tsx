/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <div id="about" className="py-24 bg-white">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="aspect-square rounded-3xl bg-blue-100 overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Mohit Sharma" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Efficiency as a Service.</h2>
              <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                <p>
                  I am a results-driven Operations & Supply Chain professional with over 2 years of experience in optimizing workflows and managing complex CRM ecosystems. 
                </p>
                <p>
                  With an MBA in Logistics & Supply Chain Management and a B.Tech in Mechanical Engineering, I bridge the gap between technical infrastructure and operational strategy. My focus is on achieving measurable business outcomes—like the 20% efficiency gains I delivered at The Future University.
                </p>
                <p>
                  I'm passionate about process automation, leveraging data analytics (Power BI, Excel Macros), and collaborative problem-solving to align daily operations with long-term strategic OKRs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

