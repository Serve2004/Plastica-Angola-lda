import { useState } from "react";
import { ShellContactDialog } from "./shellContactDialog";


export function ContactDialog({className, type="primary",children}: {className?: string, type?: "primary" | "secondary", children?: React.ReactNode}) {
  const [open, setOpen] = useState(false);
  return (
    <>
        <button
          onClick={() => setOpen(true)}
          className={
            type === "primary"
              ? `w-full max-w-50 max-h-9.25 rounded-[8px] bg-[#FF6400] hover:bg-[#CD5304] text-sm sm:text-[16px] p-3 sm:p-4.5 flex items-center justify-center cursor-pointer gap-2 text-white ${className}`
              : `flex justify-center items-center h-10 sm:h-12 md:h-16 px-4 sm:px-6 md:px-8 py-2 rounded-lg bg-[#FF8800] hover:bg-[#FF9925] text-sm sm:text-lg md:text-xl text-white cursor-pointer gap-2 ${className}`
          }
        >
          {children}
          
        </button>
      <ShellContactDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
