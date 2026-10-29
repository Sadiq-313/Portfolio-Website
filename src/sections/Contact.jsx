import React, { useState } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { siteConfig } from "../config/site.js";
import { Mail, Github, Linkedin, Send, Copy, Check, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [submittedState, setSubmittedState] = useState(null); // 'drafted' | null

  // Validate form with plain JavaScript
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Your name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Your email address is required.";
    } else {
      // Standard email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message text cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on user typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Prepare mailto link with encoded parameters
    const recipient = siteConfig.social.email;
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    );

    // Trigger user's email client
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Mark as drafted with clear explanation
    setSubmittedState("drafted");
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.social.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-t border-slate-800/80 bg-[#07090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Get in Touch"
          title="Contact Me"
          subtitle="Have a question, collaboration proposal, or developer opportunity? Send a message directly or connect via social platforms."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1117] border border-slate-800/80 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Let's discuss opportunities
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                I am actively seeking junior / entry-level developer roles, internships, and freelance projects in full-stack MERN development.
              </p>

              {/* Direct Email Card with One-Click Copy */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    Direct Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${siteConfig.social.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-blue-400 transition-colors break-all block"
                >
                  {siteConfig.social.email}
                </a>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Social & Developer Profiles
                </h4>
                <div className="space-y-2">
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-700 hover:bg-slate-900 transition-all text-sm text-slate-300 group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-slate-400 group-hover:text-white" />
                      <span>GitHub</span>
                    </span>
                    <span className="text-xs text-slate-500 font-mono">@muhammadsadiq-mern</span>
                  </a>

                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-700 hover:bg-slate-900 transition-all text-sm text-slate-300 group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
                      <span>LinkedIn</span>
                    </span>
                    <span className="text-xs text-slate-500 font-mono">sadiq-ali</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0d1117] border border-slate-800/80">
              
              <h3 className="text-lg font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Fill in the details below. Since this portfolio is a client-side React app, clicking Send will draft the message in your default email application.
              </p>

              {/* Status banner after drafting */}
              {submittedState === "drafted" && (
                <div className="mb-6 p-4 rounded-xl bg-blue-950/40 border border-blue-900/60 text-xs text-blue-200 space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2 font-semibold text-blue-300">
                    <AlertCircle className="w-4 h-4 shrink-0 text-blue-400" />
                    <span>Email Draft Created in Mail Client</span>
                  </div>
                  <p className="leading-relaxed">
                    Your default mail application has been opened with your message addressed to <strong className="text-white">{siteConfig.social.email}</strong>. 
                    Please review and click Send in your email client to dispatch the message.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmittedState(null)}
                    className="text-[11px] underline text-blue-300 hover:text-white pt-1 block"
                  >
                    Reset form
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Johnson"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.name ? "border-red-500/80 bg-red-950/10" : "border-slate-800 focus:border-blue-500"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        errors.email ? "border-red-500/80 bg-red-950/10" : "border-slate-800 focus:border-blue-500"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Junior MERN Developer Role / Inquiry"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.subject ? "border-red-500/80 bg-red-950/10" : "border-slate-800 focus:border-blue-500"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400">{errors.subject}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message or inquiry here..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-y ${
                      errors.message ? "border-red-500/80 bg-red-950/10" : "border-slate-800 focus:border-blue-500"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
                  >
                    <span>Send Message (Draft in Mail Client)</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
