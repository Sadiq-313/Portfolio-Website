import React from "react";
import { Code2, Server, Database, Brain, Rocket, ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { siteConfig } from "../config/site.js";

export default function About() {
  const pillars = [
    {
      icon: Code2,
      title: "Responsive Web Applications",
      description: "Crafting fluid client interfaces with React and Tailwind CSS that look and perform effortlessly across mobiles, tablets, and desktops."
    },
    {
      icon: Server,
      title: "RESTful API Engineering",
      description: "Developing clean backend routes, middlewares, error-handling pipelines, and JSON communication with Express.js and Node.js."
    },
    {
      icon: Database,
      title: "Database Modeling & Management",
      description: "Structuring flexible document collections with MongoDB & Mongoose and designing relational table queries with PostgreSQL."
    },
    {
      icon: Brain,
      title: "Analytical Problem Solving",
      description: "Translating application requirements into logical JavaScript algorithms, structured state management, and reusable components."
    },
    {
      icon: Rocket,
      title: "Continuous Learning",
      description: "Proactively mastering modern software patterns, studying documentation, writing clean code, and expanding full-stack skills daily."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Sadiq"
          title="Building Modern Web Solutions from Frontend to Database"
          subtitle="A dedicated MERN stack developer focused on writing clean, scalable JavaScript and mastering web technologies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biography Narrative */}
          <div className="lg:col-span-5 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="p-6 rounded-2xl bg-[#0d1117] border border-slate-800/80 space-y-4">
              <h3 className="text-lg font-bold text-white">
                My Full-Stack Journey
              </h3>
              <p>
                Hello! I am <span className="text-white font-semibold">{siteConfig.name}</span>, a passionate full-stack developer focused on the <span className="text-blue-400 font-medium">MERN stack</span> (MongoDB, Express.js, React, Node.js).
              </p>
              <p>
                My interest lies in architecting end-to-end web applications—from designing responsive, intuitive user interfaces in React to building secure REST APIs and persisting data in MongoDB collections.
              </p>
              <p>
                I thrive on solving programming challenges, studying clean code principles, and expanding my technical capabilities through practical project development. Every day is an opportunity to write better code and explore emerging web standards.
              </p>
              
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Connect with me for developer roles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="p-6 rounded-2xl bg-[#0d1117] border border-slate-800/80">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Core Highlights
              </h4>
              <dl className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <dt className="text-slate-500">Primary Focus</dt>
                  <dd className="font-semibold text-white mt-0.5">MERN Stack (JS)</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Language</dt>
                  <dd className="font-semibold text-white mt-0.5">JavaScript (ES6+)</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Role Preference</dt>
                  <dd className="font-semibold text-white mt-0.5">Frontend / Full-Stack</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Availability</dt>
                  <dd className="font-semibold text-emerald-400 mt-0.5">Immediate</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Core Focus Pillars */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-white mb-4">
              What I Bring to the Table
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl bg-[#0d1117] border border-slate-800/80 hover:border-blue-500/30 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3 group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-blue-400 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
