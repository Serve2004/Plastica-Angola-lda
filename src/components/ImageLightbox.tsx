import {  useEffect, useCallback } from "react";
import { XIcon, ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ImageLightboxProps {
  src: string;
  alt?: string;
  currentIndex?: number;
  total?: number;
  onPrev?: () => void;
  onNext?: () => void;
  onClose: () => void;
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

export function ImageLightbox({
  src,
  alt = "Imagem do produto",
  currentIndex,
  total,
  onPrev,
  onNext,
  onClose,
}: ImageLightboxProps) {
  // Fechar com Escape, navegar com setas
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    // Bloquear scroll do body enquanto aberto
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  const hasNav = onPrev && onNext && total && total > 1;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal
      aria-label="Visualizador de imagem"
    >
      {/* Container da imagem — impede fechar ao clicar na imagem */}
      <div
        className="relative flex items-center justify-center w-full h-full px-4 py-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Fechar"
        >
          <XIcon size={20} />
        </button>

        {/* Contador */}
        {hasNav && (
          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-xs text-white/60 tracking-widest">
            {(currentIndex ?? 0) + 1} / {total}
          </span>
        )}

        {/* Botão anterior */}
        {hasNav && (
          <button
            onClick={onPrev}
            className="absolute left-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Anterior"
          >
            <ArrowLeftIcon size={20} />
          </button>
        )}

        {/* Imagem */}
        <img
          src={src}
          alt={alt}
          className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl select-none"
          draggable={false}
        />

        {/* Botão próximo */}
        {hasNav && (
          <button
            onClick={onNext}
            className="absolute right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Próxima"
          >
            <ArrowRightIcon size={20} />
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Thumbnail clicável ───────────────────────────────────────────────────────

interface ClickableImageProps {
  src: string;
  alt?: string;
  className?: string;
  /** Passa o índice e o setter para abrir o lightbox no contexto da lista */
  onOpen: () => void;
}

export function ClickableImage({ src, alt, className, onOpen }: ClickableImageProps) {
  return (
    <button
      onClick={onOpen}
      className="group relative overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6400]"
      aria-label={`Ver imagem: ${alt ?? "produto"}`}
    >
      <img
        src={src}
        alt={alt ?? "produto"}
        className={`${className} transition-transform duration-300 group-hover:scale-105`}
      />
      {/* Overlay hover */}
      <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 text-zinc-800 text-xs font-semibold rounded-full px-3 py-1.5 shadow">
          Ver imagem
        </span>
      </span>
    </button>
  );
}
