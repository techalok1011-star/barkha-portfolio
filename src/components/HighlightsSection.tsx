import React from 'react';
import { motion } from 'framer-motion';
import { CircularTestimonials } from '@/components/ui/circular-testimonials';

// Featured pieces from the portfolio. Each shows a work image with a short description of the project.
const highlights = [
  {
    quote:
      'A branded exhibition stand developed from concept to 3D visualisation, with an open layout that draws visitors in and keeps the brand front and centre.',
    name: 'Branded Exhibition Stand',
    designation: 'Exhibition Design',
    src: '/work/stand-aero.jpg',
  },
  {
    quote:
      'Stage, seating and hall layout planned together so large audiences can see, move and be seated comfortably, coordinated with vendors and the project team.',
    name: 'Conference Hall & Stage',
    designation: 'Corporate Events',
    src: '/work/conference-hall.jpg',
  },
  {
    quote:
      'A circular hall interior with a statement ceiling and rhythmic cut-out walls, visualised in 3D to give clients a clear picture before build.',
    name: 'Circular Hall Interior',
    designation: 'Interior Design',
    src: '/work/interior-dome.jpg',
  },
  {
    quote:
      'Wedding decor concept with sculptural tree forms, layered lighting and a warm palette, designed to make a large celebration feel personal.',
    name: 'Wedding Decor Concept',
    designation: 'Event Design',
    src: '/work/decor-wedding.jpg',
  },
  {
    quote:
      'An illuminated entrance arch that turns the arrival into a moment, designed as a photo-worthy focal point for a corporate event.',
    name: 'Illuminated Entrance Arch',
    designation: 'Event Design',
    src: '/work/event-arch.jpg',
  },
];

export const HighlightsSection: React.FC = () => {
  return (
    <section
      id="highlights"
      className="relative w-full bg-[#F5F4F1] text-[#1F1A16] font-sans selection:bg-[#cbb59d] selection:text-black pt-4 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#85630F]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
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
            05 / IN FOCUS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#85630F]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Headline */}
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
              WORK
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#946E14] via-[#85630F] to-[#5A4208]">
              IN FOCUS.
            </span>
          </h2>
        </motion.div>

        {/* Circular showcase */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex items-center justify-center pt-16"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <div className="flex items-center justify-center relative" style={{ maxWidth: '1024px' }}>
            <CircularTestimonials
              testimonials={highlights}
              autoplay={true}
              colors={{
                name: '#946E14',
                designation: '#85630F',
                testimony: '#54483E',
                arrowBackground: '#1F1A16',
                arrowForeground: '#F5F4F1',
                arrowHoverBackground: '#85630F',
              }}
              fontSizes={{
                name: '28px',
                designation: '14px',
                quote: '15px',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightsSection;
