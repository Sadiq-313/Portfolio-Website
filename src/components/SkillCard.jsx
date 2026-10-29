import React from "react";
import { Layout, Server, Database, Wrench, CheckCircle } from "lucide-react";

// Icon mapping helper
const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Wrench: Wrench,
};

export default function SkillCard({ category }) {
  const IconComponent = iconMap[category.icon] || Layout;

  return (
    <div className="bg-[#0d1117] border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5">
      {/* Category Header */}
      <div className="flex items-center gap-3.5 mb-4">
        <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
          <IconComponent className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white">
            {category.title}
          </h3>
          <p className="text-xs text-slate-400">
            {category.description}
          </p>
        </div>
      </div>

      {/* Skills list */}
      <div className="space-y-3 mt-5">
        {category.skills.map((skill) => (
          <div
            key={skill.name}
            className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/50 hover:border-slate-700/80 transition-colors"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                {skill.name}
              </span>
              <span className="text-[11px] font-medium text-slate-400">
                {skill.badge}
              </span>
            </div>
            <p className="text-xs text-slate-400 pl-5.5 leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
