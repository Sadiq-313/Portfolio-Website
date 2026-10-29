import React from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { educationHistory, learningMilestones } from "../data/experience.js";
import { GraduationCap, Award, BookOpen, Edit3 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 border-t border-slate-800/80 bg-[#07090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Background"
          title="Education & Experience"
          subtitle="Academic foundations and hands-on full-stack development journey with the MERN stack."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-white">
                Education & Training
              </h3>
            </div>

            <div className="space-y-4">
              {educationHistory.map((item) => (
                <div
                  key={item.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#0d1117] border border-slate-800/80 transition-all hover:border-slate-700 relative"
                >
                  {item.isPlaceholder && (
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-amber-400 bg-amber-950/40 border border-amber-900/50 px-2 py-0.5 rounded-full w-fit mb-3">
                      <Edit3 className="w-3 h-3" />
                      <span>Editable Placeholder</span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h4 className="text-base font-bold text-white">
                      {item.degree}
                    </h4>
                    <span className="text-xs text-blue-400 font-medium">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-medium mb-2">
                    {item.institution}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-xs text-slate-400">
              💡 <span className="font-semibold text-slate-300">Tip for customization:</span> You can edit or add your university, college, degrees, or certifications in <code className="text-blue-300 font-mono">src/data/experience.js</code>.
            </div>
          </div>

          {/* Right Column: Practical Development Milestones */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-white">
                Technical Milestones
              </h3>
            </div>

            <div className="space-y-4">
              {learningMilestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className="p-5 sm:p-6 rounded-2xl bg-[#0d1117] border border-slate-800/80 hover:border-slate-700 transition-all"
                >
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                    {milestone.category}
                  </span>
                  
                  <h4 className="text-base font-bold text-white mb-2">
                    {milestone.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {milestone.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {milestone.keySkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
