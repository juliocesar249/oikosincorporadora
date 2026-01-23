import type React from "react";
import textBorderDetailSmall from "../../assets/img/text-border-detail.png";
import textBorderDetailMedium from "../../assets/img/text-border-detail-medium.png";
import textBorderDetailLarge from "../../assets/img/text-border-detail-large.png";
import { useWindowWidth } from "../../hooks/useWindowWidth";

export function TextCard({ children, className, borderSize, ...props }: { children: React.ReactNode, className?: string, borderSize?: "small" | "medium"} & React.ComponentProps<"div">) {
  
  const windowWidth = useWindowWidth();

  const useWidth = windowWidth >= 1280 ? textBorderDetailLarge : (windowWidth >= 1024 ? textBorderDetailMedium : textBorderDetailSmall);
  
  const useBorderSize = borderSize === undefined ? borderSize : (borderSize == "medium" ? textBorderDetailMedium : textBorderDetailSmall);
  
  const textBorderDetail = useBorderSize || useWidth;

  return (
    <div className="w-full xl:h-full xl:flex xl:flex-col">
      <img src={textBorderDetail} alt="" className="w-full block relative top-0.5 xl:top-0" />
      <div className={`bg-white w-full ${className || ""} xl:flex-1`} {...props}>
        {children}
      </div>
      <img src={textBorderDetail} alt="" className="w-full block rotate-180 relative -top-0.5 xl:top-0" />
    </div>
  )
}