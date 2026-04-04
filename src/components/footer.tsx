import { assets } from "@/assets";
import { contact, links, media, products } from "@/data/data";

export function Footer() {
 return (
   <div className="flex flex-col items-center justify-center px-13.75 py-14.5 gap-6 bg-[#343434]">
     <div className="flex pb-20 pt-5 gap-20 w-full border-b border-[#6C6B6B80]">
       <div className="flex flex-col items-start gap-1 overflow-hidden">
         <div className="flex items-center justify-center">
           <img src={assets.footer} alt="Footer Logo" />
         </div>
         <p className="text-[#E9E2E2E5] text-[15px] w-59.25">
           Líder angolano em soluções plásticas de alta qualidade para todos os
           setores.
         </p>
       </div>
       <div className="flex flex-col items-start gap-1">
         <h2 className="text-white font-bold">LINKS</h2>
         {links.map((item) => (
           <div className="text-white font-bold text-[15px]">
             <a key={item.id} href={`#${item.id}`}>
               {item.label}
             </a>
           </div>
         ))}
       </div>
       <div className="flex flex-col items-start gap-1">
         <h2 className="text-white font-bold">PRODUTOS</h2>
         {products.map((item) => (
           <div className="flex items-center gap-2 text-[15px]">
             <p key={item.id} className="text-[#E9E2E2E5]/90 ">
               {item.name}
             </p>
           </div>
         ))}
       </div>
       <div className="flex flex-col items-start gap-1">
         <h2 className="text-white font-bold">CONTACTOS</h2>
         <div className="flex flex-col ">
           {contact
             .slice()
             .reverse()
             .map((item) => (
               <div className="flex items-center gap-2 text-[15px] ">
                 <span className="text-[#FF6400]">{item.logo}</span>
                 <p
                   key={item.id}
                   className={
                     !item.fill ? "text-[#E9E2E2E5]/90 " : "text-[#FF6400]"
                   }
                 >
                   {!item.fill ? item.description : item.name}
                 </p>
               </div>
             ))}
         </div>
       </div>
     </div>
     <div className="flex justify-between w-full items-start">
       <div className="flex flex-col ">
         <p className="text-[#E9E2E2E5]">
           © 2023 Plástica Angola. Todos os direitos reservados.
         </p>
         <p className="text-[#E9E2E2E5]">Desenvolvido por Serve.io</p>
       </div>
       <div className="">
         <div className="flex items-center gap-2">
           {media.map((item) => (
             <a
               key={item.id}
               href={item.link}
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center gap-2 text-white w-9 h-9 rounded-full bg-[#6C6B6B80]/30 p-2"
             >
               {item.logo}
             </a>
           ))}
         </div>
       </div>
     </div>
   </div>
 );
}