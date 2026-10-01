import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import aboutImg from '../assets/portrait.jpg';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // 1. Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(200);
  const spotlightY = useMotionValue(200);

  // 2. Springs for 3D Physics
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, -16]), { damping: 18, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), { damping: 18, stiffness: 220 });

  // 3. Top-Level Unconditional Transform for Spotlight Background
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle 240px at ${x}px ${y}px, rgba(133,99,15,0.10), rgba(133,99,15,0.18), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsCardHovered(true);

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="about" 
      className="relative w-full min-h-screen bg-[#F5F4F1] text-[#1F1A16] font-sans selection:bg-[#cbb59d] selection:text-black py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center"
    >
      {/* ================= BACKGROUND GLOWS & FLOATING PARTICLES ================= */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/6 w-[32rem] h-[32rem] bg-[#85630F] rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/6 right-1/4 w-[28rem] h-[28rem] bg-[#8C6D4F] rounded-full blur-[170px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4 mb-10"
        >
          <span 
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#85630F]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            01 / ABOUT ME
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#85630F]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Main Grid: Content + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT CONTENT (7 COLS) ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Cinematic Headline with Glow Flare */}
            <motion.div variants={fadeUpVariants} className="relative mb-6 select-none">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight uppercase leading-[0.88]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#1F1A16] via-[#3B312A] to-[#5E5247]">
                  I DON'T JUST DRAW SPACES.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#946E14] via-[#85630F] to-[#5A4208]">
                  I MAKE THEM HAPPEN.
                </span>
              </h2>
            </motion.div>

            {/* Concise Bio Paragraph */}
            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-light text-[#54483E] leading-[1.85] tracking-wide mb-10 max-w-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I'm <span className="text-[#85630F] font-medium">Barkha Yadav</span>, a detail-oriented Interior &amp; CAD Designer based in Bangalore. I develop design concepts, prepare layouts, and support project execution, coordinating with clients and vendors to deliver functional, visually engaging spaces within timelines, from exhibition stands and conference halls to weddings and interiors.
            </motion.p>

            {/* Concise 4-Item Achievement Metrics Grid */}
            <motion.div 
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 pb-2 border-t border-[#8C6D4F]/25"
            >
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#1F1A16] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  6+
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#54483E] mt-0.5">
                  Years Experience
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#85630F] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  8
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#54483E] mt-0.5">
                  Notable Brands
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#1F1A16] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  2022
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#54483E] mt-0.5">
                  GIWA Best Event Design
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#85630F] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  4
                </span>
                <span className="text-[10px] font-medium tracking-[0.22em] uppercase text-[#54483E] mt-0.5">
                  Design Studios
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT PORTRAIT FRAME (PERFECT LOCKED GEOMETRY) ================= */}
          <div className="lg:col-span-5 flex items-center justify-center relative perspective-[1400px]">
            
            {/* Ambient Animated Gold Glow Ring Behind Frame */}
            <motion.div 
              animate={{
                scale: isCardHovered ? 1.15 : 1,
                opacity: isCardHovered ? 0.35 : 0.15,
                rotate: isCardHovered ? 180 : 0
              }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="absolute -inset-6 bg-[conic-gradient(from_0deg,#85630F_0%,#8C6D4F_30%,transparent_60%,#85630F_100%)] blur-2xl rounded-3xl pointer-events-none"
            />

            {/* Drifting Gold Spark Embers on Hover */}
            {isCardHovered && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 10, x: -20 }}
                  animate={{ opacity: [0, 1, 0], y: -50, x: -30 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute top-1/4 -left-6 w-1.5 h-1.5 bg-[#85630F] rounded-full blur-[1px] shadow-[0_0_8px_#85630F] pointer-events-none z-30"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  animate={{ opacity: [0, 1, 0], y: -60, x: 40 }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
                  className="absolute bottom-1/3 -right-6 w-2 h-2 bg-[#85630F] rounded-full blur-[1px] shadow-[0_0_10px_#85630F] pointer-events-none z-30"
                />
              </>
            )}

            {/* 3D Holographic Main Card Container */}
            <motion.div
              ref={cardRef}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-3.5 border border-[#8C6D4F]/40 rounded-sm bg-[#FFFFFF]/80 backdrop-blur-xl shadow-[0_18px_50px_rgba(60,45,30,0.12)] cursor-pointer group transition-colors duration-500 hover:border-[#85630F]/80"
            >
              {/* Dynamic Laser Border Pulse on Card Perimeter */}
              <div className="absolute inset-0 rounded-sm pointer-events-none overflow-hidden">
                <motion.div 
                  animate={{ x: isCardHovered ? ['-100%', '200%'] : '-100%' }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#85630F]/30 to-transparent skew-x-12"
                />
              </div>

              {/* Locked Corner Gold Accent Brackets */}
              <div className="pointer-events-none">
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#85630F] transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(133,99,15,0.4)]" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#85630F] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-[0_0_10px_rgba(133,99,15,0.4)]" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#85630F] transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(133,99,15,0.4)]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#85630F] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-[0_0_10px_rgba(133,99,15,0.4)]" />
              </div>

              {/* Portrait Image Canvas */}
              <div className="relative overflow-hidden w-full max-w-[390px] aspect-[4/5] bg-[#F5F4F1] rounded-sm">
                {/* Main Portrait */}
                <img
                  src={aboutImg}
                  alt="Barkha Yadav"
                  className="w-full h-full object-cover object-top filter brightness-[0.94] contrast-[1.06] saturate-[1.02] group-hover:brightness-105 group-hover:contrast-[1.12] transition-all duration-700 ease-out"
                />

                {/* Mouse-Tracked Holographic Glass Spotlight Sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
                  style={{
                    background: spotlightBg,
                    opacity: isCardHovered ? 1 : 0,
                  }}
                />

                {/* Bottom Film Noir Shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* Monoline Signature */}
                <div className="absolute bottom-4 right-4 z-20 select-none">
                  <span 
                    className="text-3xl text-[#F2D8A7] transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: "'Herr Von Muellerhoff', cursive" }}
                  >
                    Barkha
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;