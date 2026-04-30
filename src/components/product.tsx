import { Link } from "react-router-dom";

interface ProductProps {
    id: number;
    name: string;
  image: string;
  slug: string;
    products: string[];
}


export function Product({ id, name, image, slug, products }: ProductProps) {
  return (
    <div
      className="flex flex-col items-center rounded-2xl 
          shadow-[0_10px_30px_rgba(0,0,0,0.1)] 
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] 
          hover:-translate-y-3 
          transition-all duration-300 mt-10 h-78 w-60  overflow-hidden border border-[#C3BBBBE5] cursor-pointer "
      key={id}
    >
      <div
        className=" rounded-t-[8px] h-45 w-full overflow-hidden"
      >
        <img
          src={image}
          alt={"product image"}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="px-6.5 pt-3 flex flex-col items-start h-full w-full">
        <h2 className="poppins-semibold text-[15px]">{name}</h2>
        <div className="flex flex-col items-start gap-1 mt-2">
          {products.map((product, index) => (
            <p
              key={index}
              className="poppins-medium text-[13px] text-[#777777]"
            >
              <span className="poppins-bold text-[#1BC69A]">•</span> {product}
            </p>
          ))}
        </div>
        <Link
          to={`/product/${slug}`}
          className="w-43.5 mb-2 p-0.75 flex justify-center rounded-lg bg-white text-[#777777] poppins-medium text-[13px] mt-auto hover:bg-[#FF6400] hover:text-white border-[#C3BBBBE5] border transition-colors duration-300 cursor-pointer"
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
}
