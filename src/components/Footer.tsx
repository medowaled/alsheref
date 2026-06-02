import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import { getAssetUrl } from '../utils/path';

export function Footer() {
  return (
    <footer className="bg-industrial-950 text-industrial-200 pt-16 pb-8 border-t border-industrial-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md">
                <img 
                  src={getAssetUrl('503479033_1100126365470742_7704255855353260207_n copy 2.jpg')} 
                  alt="لوجو الشريف" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <span className="font-bold text-xl text-white">شركة الشريف</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              الشركة الرائدة في تصنيع خزانات البولي إيثيلين وحواجز الأمان ومنتجات الفايبر جلاس بأعلى معايير الجودة والكفاءة.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/ElSharif22?locale=ar_AR" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-industrial-800/50 flex items-center justify-center text-industrial-300 hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* WhatsApp (Official Logo) */}
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}  
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-industrial-800/50 flex items-center justify-center text-industrial-300 hover:bg-green-500 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300 shadow-md"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.479 5.362 1.48 5.432-.003 9.85-4.416 9.853-9.842.002-2.63-1.023-5.101-2.885-6.964C17.06 1.964 14.61 .94 12.003.94c-5.438 0-9.854 4.414-9.858 9.841a9.77 9.77 0 0 0 1.42 5.068l-.42 1.533-.943 3.442 3.545-.93 1.3-.343zm11.133-7.616c-.301-.15-1.78-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-1.04-.519-1.815-.967-2.528-2.186-.19-.328.19-.304.545-1.01.075-.15.038-.282-.019-.394-.056-.113-.475-1.144-.65-1.569-.17-.41-.36-.353-.49-.36-.125-.006-.27-.006-.415-.006-.145 0-.38.054-.58.27-.2.215-.76.744-.76 1.815s.78 2.1 1.03 2.42c.25.32 1.764 2.693 4.275 3.774.597.257 1.064.41 1.428.525.6.19 1.145.163 1.577.099.48-.072 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.127-.275-.202-.575-.352z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-accent-teal transition-colors duration-300 font-semibold">الرئيسية</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent-teal transition-colors duration-300 font-semibold">المنتجات</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent-teal transition-colors duration-300 font-semibold">اتصل بنا</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">منتجاتنا</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products?category=horizontal-tanks" className="hover:text-accent-teal transition-colors text-right block duration-300 font-semibold">
                  الخزانات الأفقية
                </Link>
              </li>
              <li>
                <Link to="/products?category=vertical-tanks" className="hover:text-accent-teal transition-colors text-right block duration-300 font-semibold">
                  الخزانات الرأسية
                </Link>
              </li>
              <li>
                <Link to="/products?category=safety-barriers" className="hover:text-accent-teal transition-colors text-right block duration-300 font-semibold">
                  حواجز الأمان
                </Link>
              </li>
              <li>
                <Link to="/products?category=fiberglass-cabins" className="hover:text-accent-teal transition-colors text-right block duration-300 font-semibold">
                  أكشاك الفايبر جلاس
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">معلومات التواصل</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group/item">
                <MapPin className="text-accent-teal shrink-0 mt-1 group-hover/item:scale-110 transition-transform duration-300" size={20} />
                <span className="group-hover/item:text-white transition-colors duration-300">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 group/item">
                <Phone className="text-accent-teal shrink-0 group-hover/item:scale-110 transition-transform duration-300" size={20} />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-accent-teal transition-colors duration-300 text-sm font-semibold" dir="ltr">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3 group/item">
                <Phone className="text-accent-teal shrink-0 group-hover/item:scale-110 transition-transform duration-300" size={20} />
                <a href={`tel:${COMPANY_INFO.phone2}`} className="hover:text-accent-teal transition-colors duration-300 text-sm font-semibold" dir="ltr">{COMPANY_INFO.phone2}</a>
              </li>
              <li className="flex items-center gap-3 group/item">
                <Mail className="text-accent-teal shrink-0 group-hover/item:scale-110 transition-transform duration-300" size={20} />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-accent-teal transition-colors duration-300 text-sm font-semibold">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-industrial-900 text-center text-sm">
          <p className="text-industrial-400">
            This website was crafted with love and passion by 
            <a 
              href="https://wa.me/201099444012" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-accent-blue transition-colors font-bold mx-1"
            >
              Eng. Ahmed Walid
            </a> 
            & 
            <a 
              href="https://wa.me/201095412229" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-accent-blue transition-colors font-bold mx-1"
            >
              Eng. Eslam Saad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
