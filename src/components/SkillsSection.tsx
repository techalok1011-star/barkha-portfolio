import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    title: 'DRAFTING & DOCUMENTATION',
    badge: 'CORE PILLAR',
    items: ['Autodesk AutoCAD', '2D Layouts', 'Floor Plans', 'Elevations & Sections'],
    description: 'Precise, execution-ready drawings that translate design concepts into buildable documents for fabricators and site teams.',
    stat: 'EXECUTION-READY',
    colSpan: 'lg:col-span-7',
  },
  {
    title: '3D VISUALISATION',
    badge: 'CONCEPT TO RENDER',
    items: ['Google SketchUp', 'Autodesk Maya', 'V-Ray'],
    description: 'Photoreal renders and walkthrough views that let clients see stands, stages and interiors before anything is built.',
    stat: '3D RENDERS',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'DESIGN & PLANNING',
    badge: 'SPATIAL THINKING',
    items: ['Space Planning', 'Interior Design', 'Concept Development', 'Venue Layouts'],
    description: 'Functional, visually engaging environments for exhibitions, corporate events, weddings and residential and commercial interiors.',
    stat: 'INTERIOR + EVENT',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'COORDINATION & DELIVERY',
    badge: 'PROJECT EXECUTION',
    items: ['Client Communication', 'Vendor Coordination', 'Budget Coordination', 'Timeline Coordination', 'Photoshop', 'Premiere Pro'],
    description: 'Managing clients, vendors, budgets and timelines so that designs are implemented as intended and delivered on schedule.',
    stat: 'ON-TIME DELIVERY',
    colSpan: 'lg:col-span-7',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-full bg-[#F5F4F1] text-[#1F1A16] font-sans selection:bg-[#cbb59d] selection:text-black pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#85630F]/5 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#85630F]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            03 / SKILLS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#85630F]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#1F1A16] via-[#3B312A] to-[#5E5247]">
              DESIGN CRAFT.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#946E14] via-[#85630F] to-[#5A4208]">
              TECHNICAL PRECISION.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {bentoCategories.map((block, idx) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className={`${block.colSpan} relative p-8 sm:p-9 rounded-sm border border-[#8C6D4F]/35 bg-[#FFFFFF]/85 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#85630F]/80 hover:shadow-[0_16px_45px_rgba(133,99,15,0.14)] cursor-pointer group`}
            >
              {/* Top Subtle Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#85630F]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner Minimal Pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#85630F]/40 group-hover:border-[#85630F] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#85630F]/40 group-hover:border-[#85630F] transition-colors duration-300" />

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#85630F] group-hover:text-[#946E14] transition-colors">
                  {block.badge}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-[#8C6D4F]/40 text-[#54483E] bg-[#EFEBE4] group-hover:border-[#85630F]/50 group-hover:text-[#1F1A16] transition-all">
                  {block.stat}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-4xl font-normal tracking-wide text-[#1F1A16] mb-3 group-hover:text-[#946E14] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-[#54483E] font-light leading-relaxed mb-7 max-w-xl group-hover:text-[#3B312A] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.description}
              </p>

              {/* Interactive Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#8C6D4F]/20">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/35 bg-[#EFEBE4] text-[#3B312A] group-hover:border-[#85630F]/50 group-hover:bg-[#1F1914] group-hover:text-[#1F1A16] transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;