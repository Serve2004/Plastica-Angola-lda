
export function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-800 text-slate-50 p-8">
      <div className="max-w-105 w-full text-center bg-slate-900/92 border border-slate-400/16 rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.35)] p-12">
        <div className="inline-flex items-center justify-center w-21 h-21 mx-auto mb-6 rounded-full bg-linear-to-br from-sky-400 to-indigo-500 text-white text-3xl font-bold shadow-[0_16px_30px_rgba(56,189,248,0.25)]">404</div>
        <h1 className="m-0 mb-4 text-4xl tracking-tight">Página não encontrada</h1>
        <p className="m-0 mb-8 text-slate-300 leading-relaxed">
          Parece que você se perdeu. A página que você está procurando não existe ou foi movida.
        </p>
        <a href="/" className="inline-block px-7 py-3.5 rounded-full bg-sky-400 text-slate-900 font-bold no-underline transition-colors duration-200 hover:bg-sky-300">
          Voltar para o início
        </a>
      </div>
    </main>
  );
};

