import { X } from "lucide-react";

export function DialogShell({
  step,
  stepLabel,
  totalSteps,
  onClose,
  children,
}: {
  step: number;
  stepLabel: string;
  totalSteps: number;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const progress = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <div
          className="relative rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-190 overflow-hidden bg-[#EFEFEF]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top bar */}
          <div className="flex flex-col">
            <div className="flex justify-end px-6 pt-5">
              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 mb-1 mt-1.5 flex items-center justify-center rounded-full hover:bg-white text-zinc-400 hover:text-zinc-700 transition-colors"
                aria-label="Fechar"
              >
                <X size={16} />
              </button>
            </div>
            <div className="px-6 pt-3 pb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[14px] montserrat-bold tracking-widest text-zinc-400 uppercase">
                Passo {step} de {totalSteps}
              </span>
              <span className="text-[11px] montserrat-bold tracking-widest text-zinc-400 uppercase">
                {stepLabel}
              </span>
            </div>
          </div>

          {/* Progress line */}
          <div className="mx-6 mt-1 h-2.25 bg-zinc-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FF6400] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Content */}
          <div className="px-6 pt-5 pb-6">{children}</div>
        </div>
      </div>
    </>
  );
}
