import { useState } from 'react';
import { motion } from 'framer-motion';
import { Info, MessageCircle, Ruler, Maximize, ShieldCheck, Package } from 'lucide-react';
import { WhatsAppFormModal } from './WhatsAppFormModal';
import { getAssetUrl } from '../utils/path';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    capacity: string;
    dimensions: string;
    image: string;
    layers: number;
    categoryId: string;
    customSpecs?: { label: string; value: string }[];
    technicalSpecs?: string[];
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const isCabin = product.categoryId === 'fiberglass-cabins';

  // Dynamic specs mapping
  const specs = product.customSpecs 
    ? product.customSpecs.map((spec, idx) => {
        const icons = [<Ruler size={14} key={1} />, <ShieldCheck size={14} key={2} />, <Package size={14} key={3} />];
        return { label: spec.label, value: spec.value, icon: icons[idx] || <Info size={14} /> };
      })
    : isCabin 
    ? [
        { label: 'المقاس', value: 'قطر 105 سم / ارتفاع 2.40 م', icon: <Ruler size={14} /> },
        { label: 'مادة الصنع', value: 'بوليستر مسلح بالألياف الفيبر جلاس', icon: <ShieldCheck size={14} /> },
        { label: 'المشتملات', value: 'شامل 2 فتحة شباك + فتحة باب ومقعد مثبت', icon: <Package size={14} /> }
      ]
    : [
        { label: 'السعة', value: product.capacity, icon: <Maximize size={14} /> },
        { label: 'الأبعاد', value: product.dimensions, icon: <Ruler size={14} /> },
        { label: 'الطبقات / المتانة', value: product.layers, icon: <Info size={14} /> }
      ];

  return (
    <>
      <motion.div 
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-2xl overflow-hidden border border-industrial-100 transition-all duration-500 hover:-translate-y-2 hover:border-accent-teal/25 hover:shadow-[0_20px_50px_rgba(14,165,233,0.08)] group flex flex-col h-full"
      >
        <div className="relative h-64 overflow-hidden bg-industrial-50 p-4 flex items-center justify-center">
          {/* Skeleton Loader */}
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-gradient-to-r from-industrial-100 via-industrial-50 to-industrial-100 bg-[length:200%_100%] animate-pulse flex items-center justify-center">
              <Package size={40} className="text-industrial-300 animate-bounce" />
            </div>
          )}

          {/* Image Fallback in case of error */}
          {imageError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-industrial-50/50 text-center">
              <div className="w-16 h-16 rounded-full bg-industrial-100 flex items-center justify-center text-industrial-400 mb-3">
                <Package size={32} />
              </div>
              <span className="text-sm font-bold text-industrial-600 mb-1">الصورة غير متوفرة حالياً</span>
              <span className="text-[11px] text-industrial-400">جاري تحديث صور المنتجات</span>
            </div>
          ) : (
            <img 
              src={getAssetUrl(product.image)} 
              alt={product.name}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`max-w-full max-h-full object-contain transition-all duration-700 group-hover:scale-105 ${
                imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          )}

          {/* Subtle bottom dark vignette for images */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur text-accent-blue font-bold px-4 py-1.5 rounded-full text-xs shadow-md border border-white/20 transition-all duration-300 group-hover:bg-accent-teal group-hover:text-white">
            {product.capacity}
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-industrial-900 mb-4 group-hover:text-accent-teal transition-colors duration-300">{product.name}</h3>
          
          <div className="space-y-3 mb-6 flex-grow">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-center text-industrial-600 text-sm gap-2.5">
                <div className="w-6 h-6 rounded-full bg-industrial-50 flex items-center justify-center text-accent-blue group-hover:text-accent-teal group-hover:bg-accent-teal/10 transition-all duration-500">
                  {spec.icon}
                </div>
                <span>
                  {spec.label}:{' '}
                  <span className="font-semibold text-industrial-800" dir={spec.label === 'الأبعاد' ? 'ltr' : undefined}>
                    {spec.value}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-auto">
            <button 
              onClick={() => setIsSpecsOpen(!isSpecsOpen)}
              className="flex-1 border-2 border-industrial-200 hover:border-accent-teal text-industrial-700 hover:text-accent-teal font-bold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSpecsOpen ? 'إخفاء التفاصيل' : 'التفاصيل'}
            </button>
            <button 
              onClick={() => setIsWhatsAppOpen(true)}
              className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-green-500/40"
            >
              <MessageCircle size={18} />
              <span>اطلب الآن</span>
            </button>
          </div>

          {/* Expandable Specs Area */}
          <motion.div 
            initial={false}
            animate={{ height: isSpecsOpen ? 'auto' : 0, opacity: isSpecsOpen ? 1 : 0, marginTop: isSpecsOpen ? 16 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-industrial-50 rounded-xl px-4"
          >
            <div className="py-4 border-t border-industrial-200">
              <h4 className="font-bold text-industrial-900 mb-2">المواصفات الفنية:</h4>
              <ul className="text-sm text-industrial-600 space-y-1 list-disc list-inside">
                {product.technicalSpecs ? (
                  product.technicalSpecs.map((spec, idx) => (
                    <li key={idx}>{spec}</li>
                  ))
                ) : isCabin ? (
                  <>
                    <li>القاعدة: مصنعة من الفيبر جلاس المدعم.</li>
                    <li>السقف: مصنع من الفيبر جلاس شكل بومبية.</li>
                    <li>الألوان: جميع الألوان متاحة حسب طلب العميل.</li>
                    <li>تصميم متين ومقاوم تماماً للعوامل الجوية المختلفة.</li>
                  </>
                ) : (
                  <>
                    <li>مصنوع من البولي إيثيلين النقي 100%.</li>
                    <li>مقاوم للأشعة فوق البنفسجية (UV).</li>
                    <li>تصميم هندسي يتحمل الضغط العالي.</li>
                    <li>مضمون لمدة 10 سنوات ضد عيوب الصناعة.</li>
                  </>
                )}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <WhatsAppFormModal 
        isOpen={isWhatsAppOpen} 
        onClose={() => setIsWhatsAppOpen(false)} 
        productName={product.name} 
      />
    </>
  );
}
