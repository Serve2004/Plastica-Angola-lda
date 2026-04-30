import { Product } from "@/components/product";
import { products } from "@/data/data";

export function ProductsSection() {
  return (
    <section
      className="px-2 sm:px-4 md:px-8 xl:px-10 pt-6 sm:pt-10 md:pt-20 flex items-center justify-center min-h-screen mt-6 sm:mt-10 overflow-hidden"
      id="products"
    >
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="poppins-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#343434]">
          Soluções Completas em Plásticos
        </h1>
        <p className="poppins-medium text-xs sm:text-sm md:text-lg max-w-xs sm:max-w-md lg:max-w-2xl text-center text-[#777777] mt-3 sm:mt-4">
          Oferecemos uma vasta gama de produtos e serviços para atender todas as
          suas necessidades em artigos plásticos
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-10">
          {products.map((item) => (
            <Product
              id={item.id}
              name={item.name}
              image={item.image}
              slug={item.slug}
              products={item.products}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
