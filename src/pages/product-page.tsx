import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { seeMoreProducts } from "../data/data";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { TalkToUsButton } from "@/components/buttons";
import { ClickableImage, ImageLightbox } from "@/components/imageLightbox";

export function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // ── Lightbox state ──────────────────────────────────────────────────────────
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const product = seeMoreProducts.find((item) => item.slug === slug);

  if (!product) {
    return <h1>Produto não encontrado</h1>;
  }

  // Recolhe apenas os itens que têm imagem simples (sem label — formato industrial)
  const simpleImages = product.products.filter(
    (item) => !("label" in item) || !item.label,
  );

  function openLightbox(index: number) {
    setLightboxIndex(index);
  }

  function closeLightbox() {
    setLightboxIndex(null);
  }

  function prevImage() {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + simpleImages.length) % simpleImages.length : null,
    );
  }

  function nextImage() {
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % simpleImages.length : null,
    );
  }

  const activeLightboxItem =
    lightboxIndex !== null ? simpleImages[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-white text-[#343434]">
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="bg-[#FFE8D9] px-6 md:px-10 py-10 md:py-14 pt-20 lg:pt-25">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="montserrat-medium flex justify-center items-center gap-1 p-1 rounded-[8px] text-sm text-[#6B6B6B] hover:bg-[#FF6400] hover:text-white transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeftIcon size={32} /> Voltar para os produtos
          </button>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="shrink-0 w-16 h-16 rounded-2xl bg-white shadow-sm border border-[#E4D5CA] flex items-center justify-center text-[#FF6400] sm:mb-10">
              {product.logo}
            </div>
            <div className="w-full md:flex-1">
              <h1 className="text-3xl md:text-5xl poppins-bold leading-tight">
                {product.name}
              </h1>
              <p className="text-[#7A7A7A] montserrat text-sm md:text-base max-w-full md:max-w-3xl leading-relaxed mt-3 md:mt-2">
                {product.label}
              </p> 
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ───────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl poppins-semibold mb-8">
            Galeria de produtos
          </h2>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-5">
            {product.products.map((item) => (
              <div key={item.id}>
                <ClickableImage
                  src={item.img}
                  alt={"name" in item ? item.img : "produto"}
                  className="w-92.5 object-center"
                  onOpen={() => {
                    const simpleIndex = simpleImages.findIndex(
                      (s) => s.id === item.id,
                    );
                    openLightbox(simpleIndex);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl poppins-bold leading-tight">
            Interessado nesta categoria?
          </h2>
          <p className="text-[#777777] montserrat-medium text-sm md:text-lg mt-4 max-w-xl leading-relaxed">
            Fale connosco e solicite um orçamento personalizado para as suas
            necessidades.
          </p>
          <TalkToUsButton type="secondary" />
        </div>
      </section>

      {/* ── LIGHTBOX ───────────────────────────────────────────────────── */}
      {activeLightboxItem && (
        <ImageLightbox
          src={activeLightboxItem.img}
          alt={
            "name" in activeLightboxItem
              ? (activeLightboxItem.name as string)
              : "produto"
          }
          currentIndex={lightboxIndex ?? 0}
          total={simpleImages.length}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
}
