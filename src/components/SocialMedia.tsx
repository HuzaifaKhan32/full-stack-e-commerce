import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import Link from "next/link";
import React, { ReactElement } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";

type SOCIALLINKSTYPE = {
  title: string,
  link: string,
  icon: ReactElement
}

const socialLinks: SOCIALLINKSTYPE[] = [
  {
    title: "Yotube",
    link: "www.youtube.com",
    icon: (
      <Youtube className="w-5 h-5 " />
    ),
  },
  {
    title: "Github",
    link: "www.github.com",
    icon: (
      <Github className="w-5 h-5 " />
    ),
  },
  {
    title: "Linkedin",
    link: "www.linkedin.com",
    icon: (
      <Linkedin className="w-5 h-5  " />
    ),
  },
  {
    title: "Facebook",
    link: "www.facebook.com",
    icon: (
      <Facebook className="w-5 h-5  " />
    ),
  },
  {
    title: "Stack",
    link: "www.stackoverflow.com",
    icon: (
      <Slack className="w-5 h-5" />
    ),
  },
];

function SocialMedia({linkClassName, tooltipClassName}: {linkClassName?: string, tooltipClassName?: string}) {
  return (
    <TooltipProvider>
      <div className="flex gap-3.5 items-center">
        {socialLinks?.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Link
                href={item.link}
                className={cn("border border-white text-white/70 rounded-full p-2 group hover:border-shop_dark_green hoverEffect hover:text-white hover:border-e-shop_dark_green", linkClassName)}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn("bg-white text-darkColor font-semibold", tooltipClassName)}>
                {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}

export default SocialMedia;
