interface AboutProps {
  id: number;
  name: string;
  description: string;
  label: string;
  logo: React.ReactNode;
  color: string;
}
export function ContactInfo({
  id,
  name,
  description,
  label,
  logo,
  color,
}: AboutProps) {
  return (
    <div
      className="rounded-[20px] p-6 
        shadow-[0_10px_30px_rgba(0,0,0,0.1)] 
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] 
        hover:-translate-y-1 
        transition-all duration-300
        w-full sm:w-100 border-[#C3BBBBE5] border
        flex flex-col sm:flex-row items-start gap-4
        "
      key={id}
    >
      <span
        className="w-10 h-10 min-w-10 rounded-[8px] border flex items-center justify-center text-white shrink-0"
        style={{ backgroundColor: color }}
      >
        {logo}
      </span>
      <div className="flex flex-col items-start gap-2 flex-1">
        <h2 className="poppins-semibold text-xl">{name}</h2>
        <p className="poppins-medium text-[16px] text-[#777777]">
          {description}
        </p>
        <p className="poppins-semibold text-[18px] mt-4">{label}</p>
      </div>
    </div>
  );
}
