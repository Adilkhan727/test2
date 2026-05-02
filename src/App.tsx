import HeroSection from './components/HeroSection';
import PartnerBlock from './components/PartnerBlock';
import ProgramsGrid from './components/ProgramsGrid';
import WhyUsSection from './components/WhyUsSection';
import LeadFormSection from './components/LeadFormSection';

function App() {
  return (
    <div className="min-h-screen bg-surface text-slate-950 antialiased">
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-6 sm:px-8 lg:px-10">
        <header className="mb-12 flex flex-col gap-6 rounded-[32px] border border-slate-200 bg-white/90 px-6 py-6 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-brand/90">UPgrade school</p>
            <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">Modern Academic English для уверенного результата</h1>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">
            <a href="#programs" className="transition hover:text-brand">Программы</a>
            <a href="#bc-partner" className="transition hover:text-brand">British Council</a>
            <a href="#why-us" className="transition hover:text-brand">Почему мы</a>
            <a
              href="#lead-form"
              className="rounded-full bg-brand px-5 py-2 text-white shadow-soft transition hover:bg-[#8f1e1f]"
            >
              Записаться
            </a>
          </nav>
        </header>

        <main className="space-y-20">
          <HeroSection />
          <PartnerBlock />
          <ProgramsGrid />
          <WhyUsSection />
          <LeadFormSection />
        </main>
      </div>
    </div>
  );
}

export default App;
