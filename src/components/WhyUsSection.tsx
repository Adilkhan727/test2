import { CheckCircle2, Clock3, GraduationCap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  { title: 'Персональный подход', description: 'Каждый ученик получает план обучения под свои задачи, уровень и цель.' },
  { title: 'Экспертные преподаватели', description: 'Преподаватели с опытом международных экзаменов и академического английского.' },
  { title: 'Регулярный прогресс', description: 'Контроль результатов и прозрачные метрики для уверенного роста.' },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-soft sm:p-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
      >
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.32em] text-brand/90">Почему мы</p>
          <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
            Надежный академический рост с 2016 года
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            Мы строим обучение так, чтобы ученики не просто знали английский, а чувствовали себя уверенно на экзаменах, в учебе и на работе.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] bg-brand/10 p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-brand text-white">
                <Clock3 className="h-5 w-5" />
              </div>
              <p className="mt-4 text-3xl font-semibold text-slate-950">8+</p>
              <p className="mt-2 text-sm text-slate-600">лет в языковом образовании</p>
            </div>
            <div className="rounded-[28px] bg-brand/10 p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-brand text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <p className="mt-4 text-3xl font-semibold text-slate-950">120+</p>
              <p className="mt-2 text-sm text-slate-600">успешных студентов</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {reasons.map((item, index) => {
            const Icon = item.title === 'Экспертные преподаватели' ? Sparkles : CheckCircle2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-[28px] border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-center gap-3 text-brand">
                  <Icon className="h-5 w-5" />
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                </div>
                <p className="mt-3 text-slate-600 leading-7">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
