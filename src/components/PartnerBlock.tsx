import { Award, Globe, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PartnerBlock() {
  return (
    <section id="bc-partner" className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950/95 p-8 shadow-soft sm:p-10">
      <div className="absolute left-[-2rem] top-0 h-36 w-36 rounded-full bg-brand/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="relative grid gap-8 lg:grid-cols-[1.4fr_0.7fr] lg:items-center"
      >
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-brand/80">Партнерство</p>
          <h2 className="max-w-3xl text-3xl font-semibold text-white sm:text-4xl">
            Партнерство с British Council — академическое доверие и международный стандарт
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Мы объединяем проверенные методики British Council с авторскими учебными планами, чтобы подготовка к IELTS проходила эффективно и понятно.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] bg-slate-900/80 p-5">
              <div className="flex items-center gap-3 text-brand">
                <Award className="h-5 w-5" />
                <span className="font-semibold text-white">Академическая сила</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Программа подготовлена с учетом стандартов экзаменационной комиссии и адаптирована для разных возрастов.
              </p>
            </div>
            <div className="rounded-[28px] bg-slate-900/80 p-5">
              <div className="flex items-center gap-3 text-brand">
                <Globe className="h-5 w-5" />
                <span className="font-semibold text-white">Международная ориентированность</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Поддержка экзаменов и навыков, которые открывают доступ к учебе и карьере за границей.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-brand/20 bg-slate-900/90 p-8 text-center shadow-lg">
          <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-brand text-white shadow-soft">
            <span className="text-3xl font-semibold">BC</span>
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-lg font-semibold text-white">British Council Partner</p>
            <p className="text-sm leading-6 text-slate-300">
              Экспертиза экзаменационной практики и строгая академическая методология.
            </p>
            <div className="grid gap-3 text-left">
              <div className="flex items-start gap-3 text-slate-200">
                <ShieldCheck className="mt-1 h-4 w-4 text-brand" />
                <span>Проверенные учебные стандарты</span>
              </div>
              <div className="flex items-start gap-3 text-slate-200">
                <Star className="mt-1 h-4 w-4 text-brand" />
                <span>Поддержка уверенного результата</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
