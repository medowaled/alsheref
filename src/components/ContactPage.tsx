import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export function ContactPage() {
  return (
    <div className="bg-industrial-50 min-h-screen">

      {/* Dark Hero Header */}
      <div className="bg-industrial-950 relative overflow-hidden pt-16 pb-14">
        <div className="absolute inset-0 bg-mesh-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent-teal/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5"
          >
            نحن هنا لخدمتك
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight"
          >
            تواصل معنا
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-industrial-300 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            نحن هنا للرد على استفساراتكم وتلبية احتياجاتكم. لا تتردد في التواصل معنا في أي وقت خلال ساعات العمل.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-6 md:gap-12 flex-wrap"
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-black text-white">+10</span>
              <span className="text-xs text-industrial-400 font-semibold tracking-wide mt-0.5">سنوات خبرة</span>
            </div>
            <div className="w-px h-8 bg-white/15 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-black text-white">+500</span>
              <span className="text-xs text-industrial-400 font-semibold tracking-wide mt-0.5">عميل راضٍ</span>
            </div>
            <div className="w-px h-8 bg-white/15 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-black text-accent-teal">4</span>
              <span className="text-xs text-industrial-400 font-semibold tracking-wide mt-0.5">فئات منتجات</span>
            </div>
            <div className="w-px h-8 bg-white/15 hidden md:block" />
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-black text-white">24/7</span>
              <span className="text-xs text-industrial-400 font-semibold tracking-wide mt-0.5">دعم فني</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl border border-industrial-100/80 transition-all duration-500 hover:border-accent-teal/20 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(14,165,233,0.05)] flex items-start gap-6 group">
              <div className="w-14 h-14 bg-blue-50 text-accent-blue rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-500">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-industrial-900 mb-2 group-hover:text-accent-blue transition-colors duration-300">العنوان</h3>
                <p className="text-industrial-600 font-semibold">{COMPANY_INFO.address}</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-industrial-100/80 transition-all duration-500 hover:border-accent-teal/20 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(14,165,233,0.05)] flex items-start gap-6 group">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-green-100 transition-all duration-500">
                <Phone size={28} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-industrial-900 mb-2 group-hover:text-green-600 transition-colors duration-300">الهاتف و واتساب</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-industrial-100 pb-3">
                    <span className="text-industrial-800 font-bold text-lg" dir="ltr">{COMPANY_INFO.phone}</span>
                    <a 
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-green-50 hover:bg-[#25D366] text-[#128C7E] hover:text-white font-bold text-sm transition-all duration-300 border border-green-200/50 hover:border-[#25D366] hover:shadow-lg hover:shadow-green-500/10 cursor-pointer"
                    >
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.479 5.362 1.48 5.432-.003 9.85-4.416 9.853-9.842.002-2.63-1.023-5.101-2.885-6.964C17.06 1.964 14.61 .94 12.003.94c-5.438 0-9.854 4.414-9.858 9.841a9.77 9.77 0 0 0 1.42 5.068l-.42 1.533-.943 3.442 3.545-.93 1.3-.343zm11.133-7.616c-.301-.15-1.78-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-1.04-.519-1.815-.967-2.528-2.186-.19-.328.19-.304.545-1.01.075-.15.038-.282-.019-.394-.056-.113-.475-1.144-.65-1.569-.17-.41-.36-.353-.49-.36-.125-.006-.27-.006-.415-.006-.145 0-.38.054-.58.27-.2.215-.76.744-.76 1.815s.78 2.1 1.03 2.42c.25.32 1.764 2.693 4.275 3.774.597.257 1.064.41 1.428.525.6.19 1.145.163 1.577.099.48-.072 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.127-.275-.202-.575-.352z"/>
                      </svg>
                      <span>مراسلة</span>
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                    <span className="text-industrial-800 font-bold text-lg" dir="ltr">{COMPANY_INFO.phone2}</span>
                    <a 
                      href={`https://wa.me/${COMPANY_INFO.whatsapp2}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-green-50 hover:bg-[#25D366] text-[#128C7E] hover:text-white font-bold text-sm transition-all duration-300 border border-green-200/50 hover:border-[#25D366] hover:shadow-lg hover:shadow-green-500/10 cursor-pointer"
                    >
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.479 5.362 1.48 5.432-.003 9.85-4.416 9.853-9.842.002-2.63-1.023-5.101-2.885-6.964C17.06 1.964 14.61 .94 12.003.94c-5.438 0-9.854 4.414-9.858 9.841a9.77 9.77 0 0 0 1.42 5.068l-.42 1.533-.943 3.442 3.545-.93 1.3-.343zm11.133-7.616c-.301-.15-1.78-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-1.04-.519-1.815-.967-2.528-2.186-.19-.328.19-.304.545-1.01.075-.15.038-.282-.019-.394-.056-.113-.475-1.144-.65-1.569-.17-.41-.36-.353-.49-.36-.125-.006-.27-.006-.415-.006-.145 0-.38.054-.58.27-.2.215-.76.744-.76 1.815s.78 2.1 1.03 2.42c.25.32 1.764 2.693 4.275 3.774.597.257 1.064.41 1.428.525.6.19 1.145.163 1.577.099.48-.072 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.127-.275-.202-.575-.352z"/>
                      </svg>
                      <span>مراسلة</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-industrial-100/80 transition-all duration-500 hover:border-accent-teal/20 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(14,165,233,0.05)] flex items-start gap-6 group">
              <div className="w-14 h-14 bg-teal-50 text-accent-teal rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-teal-100 transition-all duration-500">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-industrial-900 mb-2 group-hover:text-accent-teal transition-colors duration-300">البريد الإلكتروني</h3>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-industrial-600 hover:text-accent-blue transition-colors font-semibold">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-industrial-100/80 transition-all duration-500 hover:border-accent-teal/20 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(14,165,233,0.05)] flex items-start gap-6 group">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-purple-100 transition-all duration-500">
                <Clock size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-industrial-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">ساعات العمل</h3>
                <p className="text-industrial-600 font-semibold">{COMPANY_INFO.workingHours}</p>
              </div>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl shadow-sm border border-industrial-100 overflow-hidden h-[500px] lg:h-auto hover:shadow-md transition-shadow duration-500"
          >
            <iframe 
              src="https://maps.google.com/maps?q=%D8%B7%D8%B1%D9%8A%D9%82%20%D9%85%D8%B5%D8%B1%20%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9%20%D8%A7%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D9%8A%20%D8%A7%D9%84%D9%83%D9%8A%D9%84%D9%88%2017&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '100%' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
