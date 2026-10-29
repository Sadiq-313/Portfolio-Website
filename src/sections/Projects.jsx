import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects, filterOptions } from "../data/projects.js";
import { Info } from "lucide-react";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All Projects");

  // Filter projects by matching technology tag or category
  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "All Projects") return true;
    if (selectedFilter === "Full Stack") return project.category === "Full Stack";
    return project.technologies.includes(selectedFilter);
  });

  return (
    <section id="projects" className="py-20 lg:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Featured Work"
          title="Featured Projects"
          subtitle="Explore concept projects demonstrating full-stack MERN architecture, responsive UI components, and clean RESTful API integration."
        />

        {/* Dummy Content Notice */}
        <div className="mb-8 p-4 rounded-xl bg-blue-950/30 border border-blue-900/40 flex items-start sm:items-center gap-3 text-xs text-blue-200">
          <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1 leading-relaxed">
            <span className="font-semibold text-blue-300">Notice on Sample Projects:</span>{" "}
            These are conceptual prototype projects featuring dummy data to showcase full-stack UI patterns. 
            All links are placeholders that can be replaced in <code className="bg-blue-900/40 text-blue-200 px-1 py-0.5 rounded font-mono">src/data/projects.js</code>.
          </div>
        </div>

        {/* Filter Controls (Segmented Tabs with interactive button state) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterOptions.map((filter) => {
            const isActive = selectedFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-[#0d1117] text-slate-400 hover:text-white border border-slate-800/80 hover:border-slate-700"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state if filter doesn't match */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#0d1117] border border-slate-800 rounded-2xl p-8">
            <p className="text-sm text-slate-400">
              No projects found matching the filter "{selectedFilter}".
            </p>
            <button
              onClick={() => setSelectedFilter("All Projects")}
              className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-blue-600 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
