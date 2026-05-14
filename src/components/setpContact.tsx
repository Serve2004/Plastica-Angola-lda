import type { ContactForm } from "@/types";
import { DialogShell } from "./ui/dialogShell";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react/dist/ssr";

export function StepContact({
  form,
  onChange,
  onSubmit,
  onBack,
  loading,
  onClose,
}: {
  form: ContactForm;
  onChange: (field: keyof ContactForm, value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  loading: boolean;
  onClose: () => void;
}) {
  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#FF6400] transition-colors";

  const isValid = form.name.trim() && form.phone.trim();

  return (
    <DialogShell
      step={2}
      stepLabel="Identificação"
      totalSteps={3}
      onClose={onClose}
    >
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-[11px] sm:text-[13px] montserrat-medium text-zinc-400 hover:text-[#FF6400] transition-colors mb-4 cursor-pointer"
      >
        <ArrowLeftIcon size={14} /> Voltar
      </button>

      <h2 className="text-[24px] sm:text-[28px] md:text-[33px] font-bold text-zinc-900 leading-tight mb-1 mt-4.5">
        Quase lá. Como o contactamos?
      </h2>
      <p className="text-[13px] sm:text-[15px] montserrat text-zinc-400 mb-5">
        Os seus dados serão analisados pelo departamento de engenharia.
      </p>

      <div className="flex flex-col gap-3 sm:gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-[13px] montserrat-medium text-zinc-700">
            Nome completo
          </span>
          <input
            type="text"
            placeholder="O seu nome"
            value={form.name}
            onChange={(e) => onChange("name", e.target.value)}
            className={inputClass}
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-[13px] montserrat-medium text-zinc-700">
            Empresa
          </span>
          <input
            type="text"
            placeholder="Nome da sua empresa"
            value={form.company}
            onChange={(e) => onChange("company", e.target.value)}
            className={inputClass}
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-[13px] montserrat-medium text-zinc-700">
            Telefone
          </span>
          <input
            type="tel"
            placeholder="+244"
            value={form.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className={inputClass}
          />
        </label>

        <button
          onClick={onSubmit}
          disabled={loading || !isValid}
          className="mt-1 w-full flex items-center justify-center gap-2 bg-[#FF6400] hover:bg-orange-600 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-xl py-3.5 transition-all"
        >
          <PaperPlaneTiltIcon size={16} weight="fill" />
          {loading ? "A enviar..." : "Enviar para Análise Técnica"}
        </button>
      </div>
    </DialogShell>
  );
}
