import { CheckCircleIcon } from "@phosphor-icons/react";

interface AboutProps {
    id: number;
    name: string;
    description: string;
}
export function About({ id, name, description }: AboutProps) {
    return (
      <div
        className="rounded-[20px] p-6 
  shadow-[0_10px_30px_rgba(0,0,0,0.1)] 
  hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] 
  hover:-translate-y-1 
  transition-all duration-300
  w-125 border-[#C3BBBBE5] border
  flex items-start gap-1
  "
        key={id}
      >
        <CheckCircleIcon size={32} color="#1BC69A" />
        <div>
          <h2 className="poppins-semibold text-xl flex">{name}</h2>
          <p className="poppins-medium text-[14px] text-[#777777]">
            {description}
          </p>
        </div>
      </div>
    );
}