import { CATEGORIES } from "@/data/orcamentoData";
import { DialogShell } from "./ui/dialogShell";

export function StepCategory({
  selected,
  onSelect,
  onClose,
}: {
  selected: string | null;
  onSelect: (id: string) => void;
  onClose: () => void;
}) {
  return (
    <DialogShell
      step={1}
      stepLabel="Categoria"
      totalSteps={3}
      onClose={onClose}
    >
      <h2 className="text-[25px] sm:text-[28px] md:text-[33px] font-bold text-zinc-900 leading-tight mb-1 mt-4.5">
        O que pretende orçamentar?
      </h2>
      <p className="text-[14px] md:text-[15px] montserrat text-zinc-400 mb-5">
        Selecione a categoria que melhor descreve o seu projeto.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelect(cat.id)}
            className={`group w-full flex flex-col items-start gap-3 px-4 py-5 rounded-xl border-2 text-left cursor-pointer transition-all duration-150 
              ${
                selected === cat.id
                  ? "border-[#FF6400] bg-white"
                  : "border-zinc-100 bg-white hover:border-[#FF6400] "
              }`}
          >
            <div className="w-10 h-10 rounded-lg bg-orange-50 group-hover:bg-[#FF6400] flex items-center justify-center transition-colors duration-150">
              <span className="text-[#FF6400] group-hover:text-white transition-colors duration-150">
                {cat.icon}
              </span>
            </div>
            <div>
              <p className="text-[18px] sm:text-[20px] font-bold text-zinc-900 leading-snug">
                {cat.name}
              </p>
              <p className="text-[14px] md:text-[15px] montserrat text-zinc-400 mt-1 leading-snug">
                {cat.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </DialogShell>
  );
}
