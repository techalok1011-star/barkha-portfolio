import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface WorkImage {
  src: string;
  caption: string;
  contain?: boolean;
}

interface WorkGroup {
  number: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  highlights: { label: string; value: string }[];
  images: WorkImage[];
}

const groups: WorkGroup[] = [
  {
    number: '01',
    title: 'Exhibition Stands',
    category: 'TRADE SHOWS / BRAND PAVILIONS',
    description:
      'Custom exhibition stands and pavilions designed for trade shows and industry expos, from first concept and 3D visualisation through execution-ready drawings, with a focus on brand presence and visitor flow.',
    tools: ['AutoCAD', 'SketchUp', 'V-Ray', 'Photoshop'],
    highlights: [
      { label: 'DELIVERABLES', value: '3D Renders + Drawings' },
      { label: 'FOCUS', value: 'Brand & Visitor Flow' },
      { label: 'SCALE', value: 'Stands to Full Pavilions' },
    ],
    images: [
      { src: '/work/stand-aero.jpg', caption: 'Branded exhibition stand' },
      { src: '/work/stand-omron.jpg', caption: 'Corporate double-deck stand' },
      { src: '/work/stand-phex.jpg', caption: 'Registration counters, PHEX 2024' },
      { src: '/work/pavilion-japan.jpg', caption: 'Country pavilion' },
      { src: '/work/stand-bharat.jpg', caption: 'Custom-built brand stand' },
    ],
  },
  {
    number: '02',
    title: 'Conferences & Events',
    category: 'CORPORATE EVENTS / VENUE PLANNING',
    description:
      'Design and layout for conferences, seminars, client appreciation events and outdoor experiences, covering stage design, seating plans and hall planning, coordinated with vendors and project teams to hit tight timelines.',
    tools: ['AutoCAD', 'SketchUp', 'V-Ray', 'Space Planning'],
    highlights: [
      { label: 'EVENT TYPES', value: 'Conferences & Seminars' },
      { label: 'PLANNING', value: 'Halls, Seating & Stages' },
      { label: 'DELIVERY', value: 'Vendor & Timeline Coordination' },
    ],
    images: [
      { src: '/work/conference-hall.jpg', caption: 'Conference hall and stage' },
      { src: '/work/hall-topview.jpg', caption: 'Hall seating layout' },
      { src: '/work/event-tents.jpg', caption: 'Outdoor tent experience' },
      { src: '/work/event-stage.jpg', caption: 'Banquet stage concept' },
      { src: '/work/event-arch.jpg', caption: 'Illuminated entrance arch' },
    ],
  },
  {
    number: '03',
    title: 'CAD Drawings',
    category: '2D DRAFTING / EXECUTION DRAWINGS',
    description:
      'Precise 2D layouts, floor plans, elevations and sections prepared in AutoCAD so that designs can be built exactly as conceived, converting concepts into practical, execution-ready documents.',
    tools: ['AutoCAD', '2D Layouts', 'Elevations', 'Sections'],
    highlights: [
      { label: 'OUTPUT', value: 'Plans, Elevations, Sections' },
      { label: 'SOFTWARE', value: 'Autodesk AutoCAD' },
      { label: 'PURPOSE', value: 'Execution-Ready' },
    ],
    images: [
      { src: '/work/cad-siteplan.jpg', caption: 'Site plan sheet', contain: true },
      { src: '/work/cad-furniture.jpg', caption: 'Furniture layout', contain: true },
      { src: '/work/cad-elevations.jpg', caption: 'Plans and elevations', contain: true },
      { src: '/work/cad-plan.jpg', caption: 'Restaurant floor plan', contain: true },
      { src: '/work/cad-details.jpg', caption: 'Stand plans and details', contain: true },
    ],
  },
  {
    number: '04',
    title: 'Interiors & Event Decor',
    category: 'INTERIOR DESIGN / 3D VISUALISATION',
    description:
      'Interior and event environments developed from concept to 3D visualisation, from statement ceilings and entrances to wedding and banquet decor, balancing aesthetics, function and client requirements.',
    tools: ['SketchUp', 'Maya', 'V-Ray', 'Photoshop'],
    highlights: [
      { label: 'SPACES', value: 'Interior, Wedding, Banquet' },
      { label: 'VISUALS', value: '3D Walkthrough Renders' },
      { label: 'APPROACH', value: 'Concept to Execution' },
    ],
    images: [
      { src: '/work/interior-dome.jpg', caption: 'Circular hall interior' },
      { src: '/work/decor-wedding.jpg', caption: 'Wedding decor concept' },
      { src: '/work/interior-3d.jpg', caption: '3D interior model' },
      { src: '/work/interior-feature.jpg', caption: 'Feature wall interior' },
      { src: '/work/interior-facade.jpg', caption: 'Entrance facade' },
    ],
  },
  {
    number: '05',
    title: 'Brand Experience Events',
    category: 'COMMUNITY DAY / IMMERSIVE SET DESIGN',
    description:
      'A large-format brand experience planned from site layout to 3D visualisation: a main-stage hall with seating, a themed street set built around the product, and interactive demo zones for visitors.',
    tools: ['Stage Design', 'Set Design', 'Site Layout', '3D Visualisation'],
    highlights: [
      { label: 'SPACES', value: 'Stage, Street Set, Demo Zones' },
      { label: 'VISUALS', value: '3D Renders + Site Layout' },
      { label: 'FOCUS', value: 'Visitor Experience' },
    ],
    images: [
      { src: '/work/ather-stage.jpg', caption: 'Main stage and seating hall' },
      { src: '/work/ather-site-layout.jpg', caption: 'Site layout, aerial view' },
      { src: '/work/ather-street.jpg', caption: 'Themed street set' },
      { src: '/work/ather-blindspot.jpg', caption: 'Blind spot detection zone' },
      { src: '/work/ather-zone.jpg', caption: 'Interactive experience zones' },
    ],
  },
  {
    number: '06',
    title: 'AI Summit Venue Planning',
    category: 'LARGE-VENUE LAYOUTS / NEW DELHI',
    description:
      'Hall-wise layout drawings for the AI Summit at Bharat Mandapam, New Delhi, covering exhibition halls, plenary seating, press briefing, lounges and circulation, planned to scale across floors.',
    tools: ['AutoCAD', 'Space Planning', 'Seating Layouts', 'Circulation'],
    highlights: [
      { label: 'VENUE', value: 'Bharat Mandapam, New Delhi' },
      { label: 'PLANS', value: 'Halls 1, 2-5, 14 + Plenary' },
      { label: 'INCLUDES', value: 'Seating, Booths, Circulation' },
    ],
    images: [
      { src: '/work/summit-halls-2-5.jpg', caption: 'Exhibition halls 2 to 5, ground floor', contain: true },
      { src: '/work/summit-plenary.jpg', caption: 'Plenary hall seating plan', contain: true },
      { src: '/work/summit-hall-1-gf.jpg', caption: 'Hall 1, ground floor', contain: true },
      { src: '/work/summit-hall-1-ff.jpg', caption: 'Hall 1, first floor', contain: true },
      { src: '/work/summit-hall-14-gf.jpg', caption: 'Hall 14, ground floor', contain: true },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  const [lightbox, setLightbox] = useState<WorkImage | null>(null);
  // The stacking-card effect needs each card to fit on screen, so on phones and tablets the cards are shown as a normal list.
  const [isCompact, setIsCompact] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    const onChange = (e: MediaQueryListEvent) => setIsCompact(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  const stackItems = groups.map((group) => (
            <ScrollStackItem key={group.title}>
              <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#FFFFFF] p-6 sm:p-10 shadow-[0_18px_50px_rgba(60,45,30,0.12)] group overflow-hidden transition-colors duration-500 hover:border-[#85630F]">
                {/* Top Gold Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#85630F]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#85630F]/60 group-hover:border-[#85630F] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#85630F]/60 group-hover:border-[#85630F] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#85630F]/60 group-hover:border-[#85630F] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#85630F]/60 group-hover:border-[#85630F] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#2E261F]/5 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {group.number}
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Column: text */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#85630F]">{group.number} //</span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#54483E]">
                          {group.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1F1A16] mb-4 group-hover:text-[#946E14] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {group.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#54483E] leading-[1.85] tracking-wide mb-6"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {group.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        {group.highlights.map((m) => (
                          <div
                            key={m.label}
                            className="p-3 rounded-sm border border-[#8C6D4F]/25 bg-[#ECE5D8] flex items-center justify-between gap-4"
                          >
                            <span className="text-[10px] font-mono text-[#54483E]">{m.label}</span>
                            <span className="text-[11px] font-mono font-medium text-[#946E14] text-right">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-5 border-t border-[#8C6D4F]/25">
                      {group.tools.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#ECE5D8] text-[#3B312A] group-hover:border-[#85630F]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: image gallery */}
                  <div className="lg:col-span-7 grid grid-cols-6 gap-2 sm:gap-3 min-w-0">
                    {group.images.map((img, i) => (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => setLightbox(img)}
                        className={`relative overflow-hidden rounded-sm border border-[#8C6D4F]/30 hover:border-[#85630F] bg-[#F3EDE2] cursor-zoom-in transition-colors duration-300 group/img ${
                          i === 0 || (i === group.images.length - 1 && i % 2 === 1) ? 'col-span-6 aspect-[16/8]' : 'col-span-3 aspect-[16/10]'
                        }`}
                        aria-label={`View ${img.caption}`}
                      >
                        <img
                          src={img.src}
                          alt={img.caption}
                          loading="lazy"
                          className={`w-full h-full transition-transform duration-700 group-hover/img:scale-105 ${img.contain ? 'object-contain bg-white' : 'object-cover'}`}
                        />
                        <span
                          className="absolute inset-x-0 bottom-0 px-3 py-2 bg-gradient-to-t from-black/90 to-transparent text-left text-[10px] tracking-[0.18em] uppercase text-[#F0E6DA] opacity-0 group-hover/img:opacity-100 transition-opacity"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {img.caption}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ));

  return (
    <section
      id="work"
      className="relative w-full bg-[#F3EDE2] text-[#1F1A16] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#85630F]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#85630F]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / SELECTED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#85630F]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#1F1A16] via-[#3B312A] to-[#5E5247]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#946E14] via-[#85630F] to-[#5A4208]">
              DESIGNED TO BE BUILT.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#54483E] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll to unfold six areas of work from six years of event, exhibition and interior projects. Tap any image to view it full size.
          </p>
        </motion.div>

        {isCompact ? (
          <div className="space-y-6">{stackItems}</div>
        ) : (
          <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {stackItems}
          </ScrollStack>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-[#F3EDE2]/95 flex flex-col items-center justify-center p-4 sm:p-10 cursor-zoom-out"
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-6 text-[#2E261F] text-2xl hover:text-[#85630F] transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="max-w-full max-h-[82vh] object-contain border border-[#8C6D4F]/40"
              onClick={(e) => e.stopPropagation()}
            />
            <p
              className="mt-4 text-[11px] tracking-[0.25em] uppercase text-[#54483E]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {lightbox.caption}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
