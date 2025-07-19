import React from "react";
import { headerData } from "../../constants/data";
import Link from "next/link";
import { X } from "lucide-react";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { usePathname } from "next/navigation";
import { useOutsideClick } from "../../hooks/useOutsideClick";

type SideProps = {
    isOpen: boolean;
    onClose: () => void
}
function Sidebar({isOpen, onClose}: SideProps) {
  const pathname = usePathname()
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose)
  return (
    <div className={`fixed inset-y-0 w-full h-screen z-50 bg-black/50 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect left-0 text-white/70`}>
      <div ref={sidebarRef} className="min-w-72 max-w-96 h-screen p-10 z-50 absolute left-0 border-r-shop_dark_green bg-black top-0">
        <div className="flex justify-between items-center">
          <Logo className="text-white" />
          <X className="text-xl font-semibold text-white hover:text-shop_btn_dark_green cursor-pointer hoverEffect" onClick={() => onClose()}/>
        </div>
        <div className="flex gap-3 flex-col items-start text-base py-5 font-semibold capitalize hoverEffect">
          {headerData?.map((item, index) => (
            <Link
              href={item?.link}
              key={index}
              className={`hover:text-shop_light_green ${pathname === item?.link && "text-shop_light_green"}`}
              onClick={() => onClose()}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
