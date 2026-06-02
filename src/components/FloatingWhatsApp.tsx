import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../data';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  // Auto-hide tooltip after 8 seconds
  useState(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  });

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('مرحباً، أود الاستفسار عن منتجات شركة الشريف للخزانات البولي اثلين ')}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 dir-ltr">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            className="bg-industrial-900 text-white text-xs md:text-sm font-bold px-4 py-2.5 rounded-xl shadow-lg border border-industrial-800/80 flex items-center gap-2 max-w-xs text-right dir-rtl whitespace-nowrap"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>تواصل معنا مباشرة عبر واتساب!</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-white/60 hover:text-white mr-1 text-[10px] font-normal cursor-pointer"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <div className="relative">
        {/* Pulsing Outer Ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-colors duration-300 relative z-10 cursor-pointer"
          aria-label="تواصل عبر واتساب"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.479 5.362 1.48 5.432-.003 9.85-4.416 9.853-9.842.002-2.63-1.023-5.101-2.885-6.964C17.06 1.964 14.61 .94 12.003.94c-5.438 0-9.854 4.414-9.858 9.841a9.77 9.77 0 0 0 1.42 5.068l-.42 1.533-.943 3.442 3.545-.93 1.3-.343zm11.133-7.616c-.301-.15-1.78-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-1.04-.519-1.815-.967-2.528-2.186-.19-.328.19-.304.545-1.01.075-.15.038-.282-.019-.394-.056-.113-.475-1.144-.65-1.569-.17-.41-.36-.353-.49-.36-.125-.006-.27-.006-.415-.006-.145 0-.38.054-.58.27-.2.215-.76.744-.76 1.815s.78 2.1 1.03 2.42c.25.32 1.764 2.693 4.275 3.774.597.257 1.064.41 1.428.525.6.19 1.145.163 1.577.099.48-.072 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.127-.275-.202-.575-.352z" />
          </svg>
        </motion.a>
      </div>
    </div>
  );
}
