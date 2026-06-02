import { motion } from 'framer-motion';
import { FEATURES } from '../data';
import { Sun, ShieldCheck, Award, Droplets } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Sun,
  ShieldCheck,
  Award,
  Droplets,
};

export function FeaturesGrid() {
  return (
    <section className="py-20 bg-industrial-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-extrabold text-industrial-900 mb-4"
          >
            لماذا تختار خزانات الشريف؟
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-industrial-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            نلتزم بتقديم أعلى معايير الجودة في صناعة البولي إيثيلين لضمان متانة وأمان منتجاتنا لسنوات طويلة.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-8 rounded-2xl border border-industrial-100/80 transition-all duration-500 hover:border-accent-teal/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(14,165,233,0.06)] group relative overflow-hidden flex flex-col h-full"
              >
                {/* Accent line indicator top */}
                <div className="absolute top-0 right-0 left-0 h-1 bg-accent-blue scale-x-0 group-hover:scale-x-100 group-hover:bg-accent-teal transition-transform duration-500 origin-right" />

                <div className="w-14 h-14 bg-industrial-50 group-hover:bg-accent-teal/10 group-hover:scale-110 rounded-xl flex items-center justify-center mb-6 transition-all duration-500">
                  {Icon && <Icon className="text-accent-blue group-hover:text-accent-teal transition-colors duration-500" size={28} />}
                </div>
                <h3 className="text-xl font-bold text-industrial-900 mb-3 group-hover:text-accent-teal transition-colors duration-300">{feature.title}</h3>
                <p className="text-industrial-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
