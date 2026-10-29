import React, { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle2, AlertCircle } from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }) {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#0d1117] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090b10]">
          <div>
            <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase">
              {project.category}
            </span>
            <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content scrollable */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Project Screenshot / Preview */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>

          {/* Dummy content disclaimer banner */}
          {project.isSampleData && (
            <div className="flex items-start gap-3 p-3.5 rounded-lg bg-blue-950/40 border border-blue-900/50 text-xs text-blue-200">
              <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-blue-300">Concept Project:</span>{" "}
                This project card features dummy content demonstrating MERN stack functionality. 
                You can replace the placeholder GitHub and Live Demo links in{" "}
                <code className="text-blue-200 font-mono bg-blue-900/40 px-1 py-0.5 rounded">src/data/projects.js</code>.
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2">
              Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Key highlights / features */}
          {project.highlights && (
            <div>
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">
                Key Features & Architecture
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-slate-800 bg-[#090b10]">
          <div className="text-xs text-slate-500">
            ID #{project.id} · Concept Preview
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-500 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
