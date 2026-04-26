interface ProductProps {
    id: number;
    logo: React.ReactNode;
    name: string;
    image: string;
    products: string[];
}


export function Product({ id, logo, name, image, products }: ProductProps) {
  return (
    <div
      className="flex flex-col items-center rounded-2xl 
          shadow-[0_10px_30px_rgba(0,0,0,0.1)] 
          hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] 
          hover:-translate-y-1 
          transition-all duration-300 mt-10 h-72.5 w-56 overflow-hidden border border-[#C3BBBBE5] "
      key={id}
    >
      <div
        className="p-0.5 rounded-t-[8px] h-45 w-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {logo}
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
      </div>
    </div>
  );
}
