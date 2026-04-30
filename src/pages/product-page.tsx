import { useParams, useNavigate } from "react-router-dom";
import { seeMoreProducts } from "../data/data";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import { assets } from "@/assets";

export function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = seeMoreProducts.find((item) => item.slug === slug);

  if (!product) {
    return <h1>Produto não encontrado</h1>;
  }

  return (
    <div className="min-h-screen bg-white text-[#343434]">
      {/* HERO */}
      <section className="bg-[#FFE8D9] px-6 md:px-10 py-10 md:py-14 pt-20 lg:pt-25 ">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex justify-center items-center gap-1 p-1 rounded-[8px] text-sm text-[#6B6B6B] hover:bg-[#FF6400] hover:text-white transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeftIcon size={32} /> Voltar para os produtos
          </button>

          <div className="flex items-start gap-3">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-[#E4D5CA] flex items-center justify-center">
              <div className="w-22.5 h-22.5 p-5 rounded-full flex items-center justify-center text-[#FF6400] text-lg">
                {product.logo}
              </div>
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {product.name}
              </h1>

              <p className="text-[#7A7A7A] text-sm md:text-base max-w-3xl leading-relaxed">
                {product.label}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* PRODUCTS */}
      <section className="px-6 md:px-10 py-10 md:py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Galeria de produtos
          </h2>

          <div className="flex flex-wrap justify-start items-center  gap-5">
            {product.products.map((item) => (
              <div
                key={item.id}
                className="w-92.5 h-80.75 rounded-xl overflow-hidden border border-[#C3BBBB] bg-[#FFF0E6] hover:-translate-y-3 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="h-56 bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-sm md:text-base">
                    {item.name}
                  </h3>

                  <p className="text-xs md:text-sm text-[#777777] mt-1 leading-relaxed">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Interessado nesta categoria?
          </h2>

          <p className="text-[#777777] text-sm md:text-lg mt-4 max-w-xl leading-relaxed">
            Fale connosco e solicite um orçamento personalizado para as suas
            necessidades.
          </p>

          <a
            href={`#contact`}
            className="w-full flex justify-center items-center sm:w-auto h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 py-2 rounded-lg bg-[#FF6400] hover:bg-[#CD5304] text-xs sm:text-sm md:text-lg cursor-pointer text-white gap-2 mt-3 sm:mt-5"
          >
            <img
              src={assets.social}
              alt="Social Media"
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8"
            />{" "}
            Fale conosco agora
          </a>
        </div>
      </section>
    </div>
  );
}
