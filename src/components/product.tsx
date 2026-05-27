import { Link } from "react-router-dom";

interface ProductProps {
  id: number;
  banner: string;
  slug: string;
}

export function Product({ id, banner, slug }: ProductProps) {
  return (
    <div
      className="relative flex flex-col items-center rounded-2xl 
          shadow-[0_10px_30px_rgba(0,0,0,0.1)] 
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] 
          hover:-translate-y-3 
          transition-all duration-300 mt-10 w-67.5 h-69.75  overflow-hidden cursor-pointer "
      key={id}
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* make parent positioned so child can be absolute at bottom */}
      <div className=" z-10 w-full h-full flex items-end">
        <div className="w-full flex items-center px-6.5 pb-4.5 bg-transparent">
          <Link
            to={`/product/${slug}`}
            className="w-full h-7 flex justify-center items-center rounded-[8px] text-[#7777] border-white bg-transparent montserrat-medium text-[13px] mt-auto hover:bg-[#FF6400] hover:text-white  border transition-colors duration-300 cursor-pointer"
          >
            Ver mais
          </Link>
        </div>
      </div>
      {/* white fade at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none bg-linear-to-b from-transparent to-white" />
    </div>
  );
}
