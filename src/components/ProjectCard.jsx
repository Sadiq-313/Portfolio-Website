import React, { useState } from "react";
import { ExternalLink, Github, Eye, Layers } from "lucide-react";
import ProjectModal from "./ProjectModal.jsx";

export default function ProjectCard({ project }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <div className="group relative bg-[#0d1117] border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
        
        {/* Project Image Preview Container */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-slate-800/80">
          {!imgError ? (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-400">
              <Layers className="w-8 h-8 mb-2 text-blue-400" />
              <span className="text-sm font-semibold text-white">{project.title}</span>
              <span className="text-xs text-slate-500 mt-1">Interactive UI Preview</span>
            </div>
          )}

          {/* Quick View Overlay on hover */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold shadow-lg hover:bg-blue-500 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
          </div>

          {/* Dummy Concept Tag */}
          {project.isSampleData && (
            <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-black/60 text-slate-300 border border-slate-700/60 backdrop-blur-sm">
              Dummy Concept
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          <div>
            {/* Unboxed category label */}
            <div className="flex items-center gap-2 text-xs text-blue-400 font-medium mb-1.5">
              <span>{project.category}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-500">{project.subtitle || "Concept Project"}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">
              {project.description}
            </p>
          </div>

          <div>
            {/* Technology tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] font-medium rounded bg-slate-800/80 text-slate-300 border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-1.5 py-0.5 text-[11px] text-slate-400">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                Learn More →
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="View GitHub Repository"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                  title="View Live Demo"
                  aria-label={`View Live Demo for ${project.title}`}
                >
                  <span>Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={project}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
