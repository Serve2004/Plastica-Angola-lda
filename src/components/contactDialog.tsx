import { useState } from "react";
import { ShellContactDialog } from "./shellContactDialog";
import { assets } from "@/assets";

export function ContactDialog({className}: {className?: string}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`w-full max-w-50 max-h-9.25 rounded-[8px] bg-[#FF6400] hover:bg-[#CD5304] text-sm sm:text-[16px] p-3 sm:p-4.5 flex items-center justify-center cursor-pointer gap-2 text-white ${className}`}
      >
        <img
          src={assets.social}
          alt="Social Media"
          className="w-5 sm:w-7.5 h-5 sm:h-7.5"
        />{" "}
        Fale conosco
      </button>
      <ShellContactDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
