import { CheckCircleIcon } from "@phosphor-icons/react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

export function StepSuccess({
  onClose,
  type = "default",
}: {
  onClose: () => void;
  type?: "default" | "primary";
}) {
  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative bg-[#EFEFEF] rounded-2xl shadow-2xl w-full max-w-150 sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden">
          <button
            type="button"
            title="close"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            <X size={16} />
          </button>

          <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10">
            <div className="w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 rounded-full bg-green-50 flex items-center justify-center mb-4 sm:mb-5">
              <CheckCircleIcon
                size={40}
                weight="fill"
                className="text-green-500 sm:w-12 md:w-12.5"
              />
            </div>
            {type === "primary" ? (
              <>
                <h2 className="text-lg sm:text-xl md:text-[24px] font-bold text-zinc-900 mb-2">
                  Projeto submetido com sucesso!
                </h2>
                <p className="text-sm sm:text-base md:text-[17px] montserrat text-zinc-400 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
                  O nosso departamento de engenharia vai analisar e entraremos
                  em contacto o mais breve possível.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-lg sm:text-xl md:text-[24px] font-bold text-zinc-900 mb-2">
                  Recebemos o seu projeto!
                </h2>
                <p className="text-sm sm:text-base md:text-[17px] montserrat text-zinc-400 leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
                  O nosso departamento de engenharia vai analisar e entraremos
                  em contacto o mais breve possível.
                </p>
              </>
            )}
            <button
              type="button"
              onClick={onClose}
              className="mt-6 sm:mt-7 px-6 sm:px-8 py-2 sm:py-3 bg-[#FF6400] hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </>,document.body
  );
}
