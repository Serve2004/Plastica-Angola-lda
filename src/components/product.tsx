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
          transition-all duration-300 mt-10 h-80 w-65.5  overflow-hidden border border-[#C3BBBBE5] cursor-pointer "
      key={id}
    >
      <div className=" rounded-t-[8px] h-46.5 w-full overflow-hidden">
        <img
          src={image}
          alt={"product image"}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="pt-3 flex flex-col h-full w-full gap-4">
        <div className="pl-6 flex flex-col items-start">
          <h2 className="poppins-semibold text-[15px]">{name}</h2>
          <div className="flex flex-col items-start gap-1 mt-2">
            {products.map((product, index) => (
              <p key={index} className="inter text-[14px] text-[#777777]">
                <span className="inter-bold text-[#1BC69A]">•</span> {product}
              </p>
            ))}
          </div>
        </div>
        <div className="flex w-full items-center px-6.5">
          <Link
            to={`/product/${slug}`}
            className="w-full h-7 flex justify-center items-center rounded-[8px] bg-white text-[#777777] montserrat-medium text-[13px] mt-auto hover:bg-[#FF6400] hover:text-white border-[#C3BBBBE5] border transition-colors duration-300 cursor-pointer"
          >
            Ver mais
          </Link>
        </div>
      </div>
    </div>
  );
}
