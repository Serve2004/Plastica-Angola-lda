import { useState } from "react";
import { X, PaperPlaneTiltIcon } from "@phosphor-icons/react";
import { Field } from "./field";
import { type ContactDialogProps, type SendMenssageForm } from "../types";
import { assets } from "@/assets";
import { StepSuccess } from "./setSucess";
import { createPortal } from "react-dom";

const inputClass =
  "w-full px-4 py-3 rounded-[10px] border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#FF6400] transition-colors";

export function ShellContactDialog({ open, onClose }: ContactDialogProps) {
  const [form, setForm] = useState<SendMenssageForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // ← novo estado

  if (!open) return null;

  function handleChange(field: keyof SendMenssageForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit() {
    if (!form.name.trim() || !form.email.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true); // ← só após o await terminar
  }

  function handleClose() {
    onClose();
    // Reset após fechar
    setTimeout(() => {
      setSuccess(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 300);
  }

  const isValid = form.name.trim() && form.email.trim();

  // ← Mostra success apenas quando o utilizador fechar manualmente
  if (success) {
    return createPortal( <StepSuccess onClose={handleClose} type="primary" />, document.body);
  }

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-4">
        <div
          className="absolute inset-0 md:relative md:inset-auto bg-[#EFEFEF] md:rounded-2xl rounded-none shadow-2xl w-full h-full md:h-auto md:max-w-sm flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full hover:bg-zinc-200 text-zinc-400 hover:text-zinc-700 transition-colors"
            aria-label="Fechar"
          >
            <X size={15} />
          </button>

          <div className="px-6 pt-6 pb-5">
            <div className="flex items-center gap-2.5 mb-1">
              <div className="w-9 h-9 rounded-[8px] bg-[#FF6400] flex items-center justify-center shrink-0">
                <img
                  src={assets.social}
                  alt="Social Media"
                  className="w-4 sm:w-6 h-4 sm:h-6"
                />
              </div>
              <h2 className="text-[24px] font-bold text-zinc-900 leading-tight">
                Fale Connosco
              </h2>
            </div>
            <p className="text-[14px] montserrat text-zinc-400 mt-1 leading-snug">
              Preencha o formulário e a nossa equipa entrará em contacto
              consigo.
            </p>
          </div>

          <div className="flex flex-col gap-4 px-6 pb-4">
            <Field label="Nome completo">
              <input
                type="text"
                placeholder="O seu nome"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="E-mail">
              <input
                type="email"
                placeholder="nome@exemplo.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Telefone">
              <input
                type="tel"
                placeholder="+244"
                value={form.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Mensagem">
              <textarea
                placeholder="Conte-nos como podemos ajudar..."
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={4}
                className={`${inputClass} resize-none`}
              />
            </Field>
          </div>

          <div className="px-6 py-5">
            <button
              onClick={handleSubmit}
              disabled={loading || !isValid}
              className="w-full flex items-center justify-center gap-2 bg-[#FF6400] hover:bg-orange-600 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-xl py-3.5 transition-all"
            >
              <PaperPlaneTiltIcon size={16} weight="fill" />
              {loading ? "A enviar..." : "Enviar mensagem"}
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
