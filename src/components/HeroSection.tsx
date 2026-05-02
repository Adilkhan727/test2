import { ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  'Подготовка к IELTS с академическим уклоном',
  'Авторские планы от экзаменаторов',
  'Онлайн и офлайн группы с живой поддержкой',
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/95 p-8 shadow-soft sm:p-12">
      <div className="absolute left-0 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-52 w-52 translate-x-1/3 translate-y-1/3 rounded-full bg-brand/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: 'easeOut' }}
        className="relative grid gap-12 lg:grid-cols-[1.15fr_auto] lg:items-center"
      >
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full bg-brand/10 px-4 py-2 text-sm font-semibold text-brand">
            <ShieldCheck className="h-4 w-4" />
            IELTS Focus
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">Языковая школа</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              UPgrade school — академическая подготовка, которая работает.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Современный академический подход к английскому: от первого слова до уверенных результатов на IELTS и международных экзаменах.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-brand text-white p-2">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#8f1e1f]"
            >
              Получить консультацию
              <ArrowRight className="ml-3 h-4 w-4" />
            </a>
            <div className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-600">
              Удобный онлайн-формат и проверенный академический стандарт.
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-950/95 p-8 text-white shadow-soft sm:p-10">
          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-900/90 p-6 shadow-lg">
              <p className="text-sm uppercase tracking-[0.24em] text-brand/80">Результат</p>
              <h3 className="mt-3 text-3xl font-semibold">7.0+ IELTS</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Персональная стратегия и подготовка к академическому модулю IELTS по стандартам British Council.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-brand/10 p-5 text-center">
                <p className="text-3xl font-semibold text-white">8+</p>
                <p className="mt-2 text-sm text-slate-200">лет опыта</p>
              </div>
              <div className="rounded-3xl bg-brand/10 p-5 text-center">
                <p className="text-3xl font-semibold text-white">120+</p>
                <p className="mt-2 text-sm text-slate-200">успешных студентов</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
