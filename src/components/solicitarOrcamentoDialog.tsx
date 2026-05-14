import { useEffect, useState } from "react";
import { QuoteWizard } from "./quoteWizard";

export function SolicitarOrcamentoDialog() {
  const [open, setOpen] = useState(false);

  // Fechar com Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full flex justify-center items-center sm:w-auto h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 py-2 rounded-lg bg-[#FF6400] hover:bg-[#CD5304] text-xs sm:text-sm md:text-lg cursor-pointer"
      >
        Solicitar Orçamento{" "}
      </button>
      <QuoteWizard open={open} onClose={() => setOpen(false)} />
    </>
  );
}



