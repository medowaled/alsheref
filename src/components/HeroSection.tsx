import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '../data';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));

  return (
    <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-industrial-950">
      {/* Cinematic Slide Backgrounds */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Elite Gradient and Mesh Grid Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-black/40 to-black/55 z-10" />
          <div className="absolute inset-0 bg-mesh-grid z-10 opacity-20" />
          
          <motion.img
            src={HERO_SLIDES[currentSlide].image}
            alt={HERO_SLIDES[currentSlide].title}
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating abstract aura for text depth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none z-15" />

      {/* Slide Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl leading-tight"
            >
              {HERO_SLIDES[currentSlide].title}
            </motion.h1>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-2xl text-industrial-100 mb-10 max-w-2xl mx-auto drop-shadow-md leading-relaxed"
            >
              {HERO_SLIDES[currentSlide].subtitle}
            </motion.p>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-8"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-accent-teal to-accent-teal-dark text-white font-bold text-lg px-10 py-4 rounded-full shadow-[0_0_30px_rgba(14,165,233,0.35)] hover:shadow-[0_0_50px_rgba(14,165,233,0.55)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/10"
            >
              <span>اكتشف منتجاتنا</span>
            </Link>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 md:gap-10 flex-wrap justify-center">
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-black text-white">+10</span>
                <span className="text-xs text-industrial-300 font-semibold tracking-wide mt-0.5">سنوات خبرة</span>
              </div>
              <div className="w-px h-8 bg-white/20 hidden md:block" />
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-black text-white">+500</span>
                <span className="text-xs text-industrial-300 font-semibold tracking-wide mt-0.5">عميل راضٍ</span>
              </div>
              <div className="w-px h-8 bg-white/20 hidden md:block" />
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-black text-accent-teal">10 سنوات</span>
                <span className="text-xs text-industrial-300 font-semibold tracking-wide mt-0.5">ضمان على المنتج</span>
              </div>
              <div className="w-px h-8 bg-white/20 hidden md:block" />
              <div className="flex flex-col items-center">
                <span className="text-2xl md:text-3xl font-black text-white">100%</span>
                <span className="text-xs text-industrial-300 font-semibold tracking-wide mt-0.5">بولي إيثيلين نقي</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Arrow Controls */}
      <div className="absolute z-30 bottom-10 left-0 right-0 flex justify-center gap-4">
        <button 
          onClick={prevSlide} 
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-accent-teal hover:border-accent-teal backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 border border-white/20 hover:scale-110 active:scale-90"
        >
          <ChevronRight size={24} />
        </button>
        <button 
          onClick={nextSlide} 
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-accent-teal hover:border-accent-teal backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 border border-white/20 hover:scale-110 active:scale-90"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute z-30 bottom-10 left-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs tracking-widest uppercase [writing-mode:vertical-lr] font-semibold">اسحب لأسفل</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1.5">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-accent-teal rounded-full"
          />
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute z-30 bottom-10 right-10 flex gap-2">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer border-none outline-none ${
              index === currentSlide ? 'w-8 bg-accent-teal' : 'w-4 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
