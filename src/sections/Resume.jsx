import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { siteConfig } from "../config/site.js";
import { FileText, Download, AlertCircle, CheckCircle, ExternalLink, Printer } from "lucide-react";

export default function Resume() {
  const [downloadNotice, setDownloadNotice] = useState(false);
  const [checkingFile, setCheckingFile] = useState(false);

  // Attempt to check if /resume.pdf exists before triggering download
  const handleDownloadAttempt = async () => {
    setCheckingFile(true);
    try {
      const response = await fetch(siteConfig.resume.filePath, { method: "HEAD" });
      if (response.ok) {
        // PDF exists, trigger direct download
        const link = document.createElement("a");
        link.href = siteConfig.resume.filePath;
        link.download = siteConfig.resume.fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // File is missing, display helpful guidance
        setDownloadNotice(true);
      }
    } catch (err) {
      setDownloadNotice(true);
    } finally {
      setCheckingFile(false);
    }
  };

  return (
    <section id="resume" className="py-20 lg:py-28 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Curriculum Vitae"
          title="Resume & Credentials"
          subtitle="Review a structured overview of technical skills, stack experience, and educational background."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Download Card & Instructions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1117] border border-slate-800/80 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <FileText className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Official Resume Document
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Download the latest PDF version of Muhammad sadiq's resume for offline review, recruitment records, or printing.
                </p>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="button"
                  onClick={handleDownloadAttempt}
                  disabled={checkingFile}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-xl shadow-lg shadow-blue-500/20 transition-all cursor-pointer disabled:opacity-70"
                >
                  <Download className="w-4 h-4" />
                  <span>{checkingFile ? "Checking Document..." : "Download Resume (PDF)"}</span>
                </button>
              </div>

              {/* Helpful Missing PDF Guidance Notification */}
              {downloadNotice && (
                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-900/50 text-xs text-amber-200 space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2 font-semibold text-amber-300">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Resume File Setup Notice</span>
                  </div>
                  <p className="leading-relaxed">
                    The file <code className="bg-amber-900/40 text-amber-200 px-1 py-0.5 rounded font-mono">public/resume.pdf</code> has not been uploaded to this project yet.
                  </p>
                  <p className="text-slate-300">
                    To make your actual resume downloadable, simply place your PDF file into the <code className="bg-slate-800 text-slate-200 px-1 py-0.5 rounded font-mono">public/</code> directory and name it <code className="bg-slate-800 text-slate-200 px-1 py-0.5 rounded font-mono">resume.pdf</code>.
                  </p>
                  <button
                    onClick={() => setDownloadNotice(false)}
                    className="text-[11px] underline text-amber-400 hover:text-amber-300 pt-1 block"
                  >
                    Dismiss notification
                  </button>
                </div>
              )}

              <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-500 space-y-1">
                <div>Target path: <span className="text-slate-400 font-mono">public/resume.pdf</span></div>
                <div>Format: Standard PDF (A4 / Letter)</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Curriculum Summary Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1117] border border-slate-800/80 space-y-6">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div>
                  <h4 className="text-lg font-bold text-white">
                    {siteConfig.name}
                  </h4>
                  <p className="text-xs text-blue-400 font-medium">
                    {siteConfig.title}
                  </p>
                </div>
                <div className="text-xs text-slate-400">
                  <span>{siteConfig.social.email}</span>
                </div>
              </div>

              {/* Summary Profile */}
              <div>
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Professional Summary
                </h5>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Junior MERN Stack Developer skilled in JavaScript, React, Tailwind CSS, Express.js, Node.js, and MongoDB. 
                  Enthusiastic about architecting clean web applications, building RESTful endpoints, and continuous skill refinement.
                </p>
              </div>

              {/* Core Competencies snapshot */}
              <div>
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Technical Stack Highlights
                </h5>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Frontend</span>
                    React, JS (ES6+), Tailwind
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Backend</span>
                    Node.js, Express.js, REST
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    <span className="text-slate-500 block text-[10px] uppercase font-semibold">Databases</span>
                    MongoDB, PostgreSQL
                  </div>
                </div>
              </div>

              {/* Education note */}
              <div className="pt-2">
                <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Academic Focus
                </h5>
                <p className="text-xs text-slate-300">
                  Continuous self-directed and formal study in Computer Science principles, modern software engineering, and the full JavaScript stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
