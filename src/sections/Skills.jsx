import React from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import SkillCard from "../components/SkillCard.jsx";
import { skillCategories } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 border-t border-slate-800/80 bg-[#07090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Skills"
          title="Skills & Technologies"
          subtitle="A focused technology stack centered around modern JavaScript, React frontend architecture, Node.js server runtimes, and databases."
          centered={true}
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>

        {/* Note / Philosophy */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0d1117] border border-slate-800/80 text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            <span className="text-white font-semibold">Development Philosophy:</span> Focus on fundamentals first. 
            Writing clean JavaScript, understanding the DOM, crafting component hierarchies, 
            and structuring efficient RESTful APIs before adopting unnecessary external dependencies.
          </p>
        </div>
      </div>
    </section>
  );
}
