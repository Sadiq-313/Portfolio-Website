import React, { useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Terminal, Code2, Database, Server } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "../config/site.js";

export default function Hero() {
  const [activeCodeTab, setActiveCodeTab] = useState("react");

  const codeSnippets = {
    react: `// Client: Interactive UI Component
import React, { useState, useEffect } from 'react';

export default function ProductFeed() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map(item => (
        <Card key={item._id} data={item} />
      ))}
    </div>
  );
}`,
    express: `// Server: REST API Route Handler
import express from 'express';
import { Product } from '../models/Product.js';

const router = express.Router();

router.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({ inStock: true })
      .sort({ createdAt: -1 })
      .limit(20);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});`,
    mongo: `// Database: Mongoose Schema & Model
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, index: true },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

export const Product = mongoose.model('Product', productSchema);`,
    node: `// Environment & Server Entry
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';

const app = express();
app.use(cors());
app.use(express.json());

await connectDB();
app.listen(5000, () => {
  console.log('MERN Server running on port 5000');
});`
  };

  const scrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      {/* Background subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-600/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Details & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Open to Opportunities Indicator */}
            {siteConfig.status.isOpenToWork && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>{siteConfig.status.label}</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400 hidden sm:inline">{siteConfig.status.subtext}</span>
              </div>
            )}

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold text-blue-400 uppercase tracking-wider">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
                {siteConfig.name}
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-300">
                {siteConfig.title}
              </h2>
            </div>

            {/* Value Proposition / Summary */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              I build responsive web applications and RESTful backend architectures.
              Specialized in the JavaScript ecosystem with <span className="text-white font-medium">MongoDB</span>,{" "}
              <span className="text-white font-medium">Express.js</span>,{" "}
              <span className="text-white font-medium">React</span>, and{" "}
              <span className="text-white font-medium">Node.js</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4" />
              </button>
            </div>

            {/* Social Proof & External Links */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center gap-6 text-sm text-slate-400">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Profiles:
              </span>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive MERN Stack Code Console (No fake profile photo!) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative bg-[#0d1117] border border-slate-800/90 rounded-2xl shadow-2xl overflow-hidden">
              
              {/* Window Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#090b10] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                    mern-architecture.js
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-blue-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>MERN Workspace</span>
                </div>
              </div>

              {/* Stack Tabs */}
              <div className="flex items-center bg-slate-900/60 border-b border-slate-800/80 px-2 pt-2 gap-1 overflow-x-auto">
                <button
                  onClick={() => setActiveCodeTab("react")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors whitespace-nowrap ${
                    activeCodeTab === "react"
                      ? "bg-[#0d1117] text-blue-400 border-t-2 border-blue-500 font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <Code2 className="w-3 h-3" />
                  <span>React.jsx</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab("express")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors whitespace-nowrap ${
                    activeCodeTab === "express"
                      ? "bg-[#0d1117] text-blue-400 border-t-2 border-blue-500 font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <Server className="w-3 h-3" />
                  <span>Express.js</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab("mongo")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors whitespace-nowrap ${
                    activeCodeTab === "mongo"
                      ? "bg-[#0d1117] text-blue-400 border-t-2 border-blue-500 font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <Database className="w-3 h-3" />
                  <span>MongoDB.js</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab("node")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-t-lg transition-colors whitespace-nowrap ${
                    activeCodeTab === "node"
                      ? "bg-[#0d1117] text-blue-400 border-t-2 border-blue-500 font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <Terminal className="w-3 h-3" />
                  <span>Server.js</span>
                </button>
              </div>

              {/* Code Display */}
              <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto min-h-[260px] bg-[#0d1117]">
                <pre className="text-slate-300 font-code">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Interactive footer note */}
              <div className="px-4 py-2.5 bg-[#090b10] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  Plain JavaScript & React
                </span>
                <span>UTF-8 · Clean Code</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
