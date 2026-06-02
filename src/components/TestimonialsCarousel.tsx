import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data';
import { Star, Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

const PARTNERS = [
  { name: 'المقاولون العرب', logo: 'arab_contractors' },
  { name: 'طلعت مصطفى', logo: 'talaat_moustafa' },
  { name: 'أوراسكوم', logo: 'orascom' },
  { name: 'معمار المرشدي', logo: 'morshedy' }
];

const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

function PartnerLogo({ id }: { id: string }) {
  if (id === 'arab_contractors') {
    return (
      <img 
        src="/images/partners/arab_contractors.png" 
        alt="المقاولون العرب" 
        className="h-10 md:h-12 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
      />
    );
  }
  if (id === 'talaat_moustafa') {
    return (
      <img 
        src="/images/partners/talaat_moustafa.webp" 
        alt="طلعت مصطفى" 
        className="h-10 md:h-12 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
      />
    );
  }
  if (id === 'orascom') {
    return (
      <img 
        src="/images/partners/orascom.svg" 
        alt="أوراسكوم" 
        className="h-10 md:h-12 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
      />
    );
  }
  if (id === 'morshedy') {
    return (
      <img 
        src="/images/partners/morshedy.svg" 
        alt="معمار المرشدي" 
        className="h-10 md:h-12 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
      />
    );
  }
  return null;
}


export function TestimonialsCarousel() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!isMobile) return;
    const scrollLeft = Math.abs(e.currentTarget.scrollLeft);
    const scrollWidth = e.currentTarget.scrollWidth;
    const cardWidth = scrollWidth / TESTIMONIALS.length;
    const newIndex = Math.min(
      Math.max(Math.round(scrollLeft / cardWidth), 0),
      TESTIMONIALS.length - 1
    );
    setActiveIndex(newIndex);
  };

  // Duplicate testimonials for a seamless continuous desktop marquee loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="py-24 bg-gradient-to-b from-industrial-950 to-industrial-900 overflow-hidden relative border-t border-industrial-800"
      id="testimonials"
    >
      {/* Decorative Premium Glow Backgrounds */}
      <div className="absolute top-1/4 -right-48 w-80 h-80 bg-accent-teal/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-80 h-80 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-mesh-grid opacity-[0.07] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="text-center">
          <motion.span 
            variants={itemVariants}
            className="text-accent-teal font-bold text-xs md:text-sm tracking-wider uppercase bg-accent-teal/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-accent-teal/20"
          >
            شركاء النجاح
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight"
          >
            ماذا يقول عملاؤنا عن <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-teal to-accent-teal-glow">الشريف</span>؟
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-industrial-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            نفخر بثقة عملائنا وشركاء النجاح في مشاريع المقاولات الكبرى والتنمية العمرانية.
          </motion.p>
        </div>
      </div>

      {/* Success Partners Logos Marquee */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="border-t border-b border-white/5 py-8 overflow-hidden flex relative" dir="ltr">
          {/* Subtle edge fades for partner logos */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-industrial-950 via-industrial-950/70 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-industrial-950 via-industrial-950/70 to-transparent z-20 pointer-events-none" />
          
          <div 
            className="flex gap-16 px-4 shrink-0"
            style={{ 
              animation: 'marquee-loop 25s linear infinite',
              width: 'max-content'
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={`${partner.logo}-${index}`}
                className="flex items-center justify-center shrink-0 group px-4 cursor-pointer"
              >
                <PartnerLogo id={partner.logo} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee / Slider Container */}
      <div className="relative w-full z-10">
        {/* Edge Gradient Fades for Premium Look on Desktop */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-industrial-950 to-transparent z-20 pointer-events-none" />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-industrial-950 to-transparent z-20 pointer-events-none" />

        {isMobile ? (
          /* Mobile: Touch-Swipe Scroll Slider */
          <div 
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto px-6 py-8 snap-x snap-mandatory scrollbar-none scroll-smooth"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 rounded-3xl min-w-[85vw] max-w-[85vw] snap-center shadow-2xl flex flex-col justify-between h-[280px] relative overflow-hidden group"
                dir="rtl"
              >
                {/* Glow Spot */}
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent-teal/5 rounded-full blur-2xl group-hover:bg-accent-teal/15 transition-all duration-500" />
                
                <Quote className="absolute left-6 top-6 text-white/5 w-16 h-16 pointer-events-none transform -rotate-12 group-hover:text-accent-teal/10 group-hover:scale-110 transition-all duration-500" />

                <div>
                  <div className="flex text-yellow-400 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={i < testimonial.rating ? "currentColor" : "none"}
                        className={i < testimonial.rating ? "text-yellow-400" : "text-white/20"}
                      />
                    ))}
                  </div>
                  <p className="text-white/90 font-medium text-sm leading-relaxed mb-6 relative z-10">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-white/5 pt-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-accent-teal to-accent-teal-dark flex items-center justify-center text-white font-bold text-base shadow-lg shadow-accent-teal/20">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-industrial-400 mt-0.5">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Desktop: Infinite Seamless Scroll Marquee with LTR trick for Cross-Browser RTL Stability */
          <div className="overflow-hidden py-8 flex" dir="ltr">
            <div className="flex gap-8 px-4 animate-marquee-loop hover:[animation-play-state:paused]">
              {duplicatedTestimonials.map((testimonial, idx) => (
                <div
                  key={`${testimonial.id}-${idx}`}
                  className="bg-white/[0.02] backdrop-blur-md border border-white/10 hover:border-accent-teal/30 p-8 rounded-3xl min-w-[380px] max-w-[380px] shadow-[0_15px_35px_rgba(0,0,0,0.35)] flex flex-col justify-between h-[300px] flex-shrink-0 transition-premium hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(14,165,233,0.15)] group relative overflow-hidden"
                  dir="rtl"
                >
                  {/* Glow Spot */}
                  <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent-orange/5 rounded-full blur-2xl group-hover:bg-accent-orange/15 transition-all duration-500" />
                  
                  <Quote className="absolute left-6 top-6 text-white/5 w-16 h-16 pointer-events-none transform -rotate-12 group-hover:text-accent-orange/10 group-hover:scale-110 transition-all duration-500" />

                  <div>
                    <div className="flex text-yellow-400 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                          className={i < testimonial.rating ? "text-yellow-400" : "text-white/20"}
                        />
                      ))}
                    </div>
                    <p className="text-white/90 font-medium text-base leading-relaxed mb-6 relative z-10">
                      "{testimonial.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-white/5 pt-5 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-accent-teal to-accent-teal-dark flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-accent-teal/20">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{testimonial.name}</h4>
                      <p className="text-xs text-industrial-400 mt-0.5">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Swipe Indicators */}
      {isMobile && (
        <div className="flex justify-center gap-2 mt-4 relative z-10">
          {TESTIMONIALS.map((_, index) => (
            <div 
              key={index} 
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-accent-teal w-4' : 'bg-white/25'
              }`}
            />
          ))}
        </div>
      )}
    </motion.section>
  );
}
