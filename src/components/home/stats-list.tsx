import { Counter } from "@/components/ui/counter/counter";
import { statics } from "@/data/data";

export function StatsList() {
  return (
    <div className="flex flex-row md:flex-wrap items-center justify-between md:justify-center lg:justify-start md:gap-10 mt-2 sm:mt-3">
      {statics.map((item) => (
        <div
          className="flex flex-col items-center gap-1 p-2 sm:p-4 md:p-6"
          key={item.id}
        >
          <div className="p-0.5 text-sm sm:text-base">{item.logo}</div>
          <h2 className="poppins-bold text-sm sm:text-lg md:text-xl lg:text-[32px] w-16 sm:w-20 text-[#0088EB] text-center">
            <Counter end={item.number} />
            {item.symbol}
          </h2>
          <p className="poppins-medium text-[10px] sm:text-xs md:text-sm text-center">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
