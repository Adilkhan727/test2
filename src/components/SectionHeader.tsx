import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-2xl"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.32em] text-brand/90">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-slate-600 leading-8">{description}</p> : null}
    </motion.div>
  );
}
