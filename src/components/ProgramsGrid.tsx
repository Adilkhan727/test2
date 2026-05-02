import { BookOpen, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Дети',
    description: 'Занятия через игру, визуализацию и первые шаги к академическому английскому.',
    details: ['6–10 лет', 'Малые творческие группы', 'Развитие речи и внимательности'],
    icon: BookOpen,
  },
  {
    title: 'Подростки',
    description: 'Целенаправленная подготовка к экзаменам, олимпиадам и школьным проектам.',
    details: ['IELTS Academic', 'ЕГЭ/ЕНТ', 'Академическое письмо'],
    icon: Users,
  },
  {
    title: 'Взрослые',
    description: 'Профессиональные курсы для работы, учебы за рубежом и уверенного общения.',
    details: ['Индивидуальные планы', 'Бизнес английский', 'Подготовка к IELTS'],
    icon: Sparkles,
  },
];

export default function ProgramsGrid() {
  return (
    <section id="programs" className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-soft sm:p-10">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.32em] text-brand/90">Программы</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
          Образовательный трек для каждого возраста и цели
        </h2>
        <p className="mt-4 text-slate-600 leading-8">
          Наша структура курсов помогает ученикам расти системно, сохраняя академическую строгость и заботясь об индивидуальном прогрессе.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {programs.map((program) => {
          const Icon = program.icon;
          return (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="group rounded-[32px] border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-brand/40 hover:bg-white"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-brand text-white shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-950">{program.title}</h3>
              <p className="mt-3 text-slate-600 leading-7">{program.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {program.details.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-brand"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
