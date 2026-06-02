import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Package, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface WhatsAppFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export function WhatsAppFormModal({ isOpen, onClose, productName }: WhatsAppFormModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [product, setProduct] = useState(productName);

  const [prevProductName, setPrevProductName] = useState(productName);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (isOpen !== prevIsOpen || productName !== prevProductName) {
    setPrevIsOpen(isOpen);
    setPrevProductName(productName);
    if (isOpen && !prevIsOpen) {
      setName('');
      setPhone('');
      setAddress('');
      setProduct(productName);
    } else if (productName !== prevProductName) {
      setProduct(productName);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `مرحباً،\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالعنوان: ${address}\nأرغب في الاستفسار أو طلب: *${product}*`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.25)] w-full max-w-md pointer-events-auto overflow-hidden max-h-[95vh] flex flex-col"
              dir="rtl"
            >
              {/* Premium Teal Header */}
              <div className="bg-gradient-to-l from-accent-teal to-accent-teal-dark px-6 py-5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-white/15 rounded-2xl flex items-center justify-center shadow-inner">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.479 5.362 1.48 5.432-.003 9.85-4.416 9.853-9.842.002-2.63-1.023-5.101-2.885-6.964C17.06 1.964 14.61.94 12.003.94c-5.438 0-9.854 4.414-9.858 9.841a9.77 9.77 0 0 0 1.42 5.068l-.42 1.533-.943 3.442 3.545-.93 1.3-.343zm11.133-7.616c-.301-.15-1.78-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-1.04-.519-1.815-.967-2.528-2.186-.19-.328.19-.304.545-1.01.075-.15.038-.282-.019-.394-.056-.113-.475-1.144-.65-1.569-.17-.41-.36-.353-.49-.36-.125-.006-.27-.006-.415-.006-.145 0-.38.054-.58.27-.2.215-.76.744-.76 1.815s.78 2.1 1.03 2.42c.25.32 1.764 2.693 4.275 3.774.597.257 1.064.41 1.428.525.6.19 1.145.163 1.577.099.48-.072 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.127-.275-.202-.575-.352z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">طلب عبر واتساب</h3>
                    <p className="text-white/75 text-xs font-medium mt-0.5">أرسل طلبك مباشرةً وسنرد فوراً</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 bg-white/15 hover:bg-white/25 rounded-xl flex items-center justify-center text-white transition-all duration-200 active:scale-90"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Form Body */}
              <div className="overflow-y-auto">
                <form onSubmit={handleSubmit} className="p-6 space-y-4">

                  {/* Product */}
                  <div>
                    <label className="block text-xs font-bold text-industrial-500 uppercase tracking-wider mb-1.5">المنتج المطلوب</label>
                    <div className="relative">
                      <Package className="absolute right-3.5 top-1/2 -translate-y-1/2 text-accent-teal" size={17} />
                      <input
                        type="text"
                        required
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className="w-full pl-4 pr-11 py-3 rounded-xl border border-industrial-200 bg-industrial-50 focus:bg-white focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/15 outline-none transition-all text-industrial-800 font-semibold text-sm"
                        placeholder="أدخل اسم المنتج أو استفسارك"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-industrial-500 uppercase tracking-wider mb-1.5">الاسم الكريم</label>
                    <div className="relative">
                      <User className="absolute right-3.5 top-1/2 -translate-y-1/2 text-accent-teal" size={17} />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-4 pr-11 py-3 rounded-xl border border-industrial-200 bg-industrial-50 focus:bg-white focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/15 outline-none transition-all text-industrial-800 font-semibold text-sm"
                        placeholder="أدخل اسمك بالكامل"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-industrial-500 uppercase tracking-wider mb-1.5">رقم الهاتف</label>
                    <div className="relative">
                      <Phone className="absolute right-3.5 top-1/2 -translate-y-1/2 text-accent-teal" size={17} />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full pl-4 pr-11 py-3 rounded-xl border border-industrial-200 bg-industrial-50 focus:bg-white focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/15 outline-none transition-all text-industrial-800 font-semibold text-sm"
                        placeholder="مثال: 01000000000"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-xs font-bold text-industrial-500 uppercase tracking-wider mb-1.5">العنوان</label>
                    <div className="relative">
                      <MapPin className="absolute right-3.5 top-1/2 -translate-y-1/2 text-accent-teal" size={17} />
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full pl-4 pr-11 py-3 rounded-xl border border-industrial-200 bg-industrial-50 focus:bg-white focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/15 outline-none transition-all text-industrial-800 font-semibold text-sm"
                        placeholder="المحافظة، المدينة، الشارع"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base px-6 py-3.5 mt-2 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.479 5.362 1.48 5.432-.003 9.85-4.416 9.853-9.842.002-2.63-1.023-5.101-2.885-6.964C17.06 1.964 14.61.94 12.003.94c-5.438 0-9.854 4.414-9.858 9.841a9.77 9.77 0 0 0 1.42 5.068l-.42 1.533-.943 3.442 3.545-.93 1.3-.343zm11.133-7.616c-.301-.15-1.78-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-1.04-.519-1.815-.967-2.528-2.186-.19-.328.19-.304.545-1.01.075-.15.038-.282-.019-.394-.056-.113-.475-1.144-.65-1.569-.17-.41-.36-.353-.49-.36-.125-.006-.27-.006-.415-.006-.145 0-.38.054-.58.27-.2.215-.76.744-.76 1.815s.78 2.1 1.03 2.42c.25.32 1.764 2.693 4.275 3.774.597.257 1.064.41 1.428.525.6.19 1.145.163 1.577.099.48-.072 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.127-.275-.202-.575-.352z" />
                    </svg>
                    <span>تأكيد ومراسلة عبر واتساب</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
