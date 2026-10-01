import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


const heroSlides = [
  '/work/stand-aero.jpg',
  '/work/event-arch.jpg',
  '/work/interior-dome.jpg',
  '/work/decor-wedding.jpg',
  '/work/event-tents.jpg',
];

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'WORK', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setSlide((i) => (i + 1) % heroSlides.length), 5500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative w-full h-[100svh] min-h-[560px] overflow-hidden bg-[#F5F4F1] text-[#1F1A16] font-sans selection:bg-[#cbb59d] selection:text-black cursor-none">
      {/* ================= 1. MINIMAL CUSTOM CURSOR ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#85630F]/40 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(133,99,15,0.1)' : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* ================= 2. RENDER SLIDESHOW LAYER ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#F5F4F1]">
        {/* Slideshow of work renders */}
        <AnimatePresence>
          <motion.img
            key={heroSlides[slide]}
            src={heroSlides[slide]}
            alt=""
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1.12 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.6 }, scale: { duration: 7, ease: 'linear' } }}
            className="absolute inset-y-0 right-0 h-full w-full md:w-[68%] object-cover"
          />
        </AnimatePresence>

        {/* Soft blends into the black page */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[75%] bg-gradient-to-r from-[#F5F4F1] via-[#F5F4F1]/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F5F4F1] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F5F4F1]/85 to-transparent" />

        {/* ================= 3. MONOGRAM EMBLEM ================= */}
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 flex items-center justify-center z-10">
          <motion.div
            animate={{ y: [-3, 3, -3], scale: [1, 1.03, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border border-[#85630F]/60 bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-[0_0_25px_rgba(133,99,15,0.25)]"
          >
            <span
              className="text-3xl lg:text-4xl text-[#85630F] tracking-wider"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              BY
            </span>
          </motion.div>
        </div>
      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#2E261F] hover:opacity-75 transition-opacity"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            BARKHA.
          </a>

          {/* Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#54483E] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#1F1A16]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#85630F]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group hidden md:flex items-center space-x-2 text-[11px] tracking-[0.24em] font-light uppercase py-2 px-4 border border-[#8C6D4F]/50 hover:border-[#85630F] text-[#2E261F] transition-all duration-300 backdrop-blur-sm ml-auto md:ml-0"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
              ↗
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="md:hidden ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-[#8C6D4F]/50 text-[#2E261F]"
          >
            <span className="block h-[1.5px] w-5 bg-current" />
            <span className="block h-[1.5px] w-5 bg-current" />
            <span className="block h-[1.5px] w-3 bg-current self-end mr-[10px]" />
          </button>
        </header>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[60] bg-[#F5F4F1] flex flex-col items-center justify-center gap-8 pointer-events-auto md:hidden"
            >
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="absolute top-6 right-6 text-2xl text-[#2E261F]"
              >
                ✕
              </button>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl text-[#2E261F] hover:text-[#85630F] tracking-wide"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-6 py-3 border border-[#85630F]/70 text-[#85630F] text-[11px] tracking-[0.24em] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                LET&apos;S TALK ↗
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          {/* LEFT: Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[40rem] pointer-events-auto z-20"
          >
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#1F1A16] via-[#3B312A] to-[#5E5247]">
                  I DESIGN
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#946E14] via-[#85630F] to-[#5A4208]">
                  SPACES
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#A27A1A] via-[#7A5A22] to-[#4A3414]">
                  THAT PERFORM
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-[#54483E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                INTERIOR <span className="text-[#8C6D4F] mx-1">•</span> EVENT &amp; EXHIBITION{' '}
                <span className="text-[#8C6D4F] mx-1">•</span> 2D / 3D CAD
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#54483E] leading-[1.8] tracking-wide max-w-lg mb-6 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                Interior &amp; CAD designer turning briefs into build-ready spaces.
                <br />
                From trade-show stands to conference halls: concept, drawing and execution, on time.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row flex-wrap items-center gap-3 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-3 px-4 sm:px-7 py-3 sm:py-3.5 border border-[#8C6D4F] bg-[#FFFFFF]/80 hover:border-[#85630F] text-[#2E261F] hover:text-[#1F1A16] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(133,99,15,0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3B312A]/40 to-transparent pointer-events-none" />
                <span>VIEW MY WORK</span>
                <span className="text-xs">↗</span>
              </motion.a>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-4 sm:px-7 py-3 sm:py-3.5 border border-[#8C6D4F]/40 hover:border-[#8C6D4F] text-[#54483E] hover:text-[#2E261F] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="text-xs">↓</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Quote & Signature */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-6 xl:pr-12 mr-2 z-20 select-none"
          >
            <span className="text-xl text-[#85630F] leading-none font-serif mb-2">“</span>

            <div
              className="text-[9.5px] font-medium tracking-[0.24em] uppercase text-[#54483E] space-y-1 mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>SPACE IS MY CRAFT.</p>
              <p>EXPERIENCE IS MY GOAL.</p>
            </div>

            <div className="w-28 h-[1px] bg-gradient-to-r from-[#85630F] via-[#3B312A]/70 to-transparent shadow-[0_0_8px_rgba(133,99,15,0.4)] mb-2" />

            <div
              className="text-[2.2rem] text-[#85630F] font-normal leading-none -ml-0.5"
              style={{
                fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Barkha
            </div>
          </motion.div>
        </div>

        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;
