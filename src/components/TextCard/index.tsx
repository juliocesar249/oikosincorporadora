import type React from "react";
import textBorderDetail from "../../assets/img/text-border-detail.png";

export function TextCard({ children, className, ...props }: { children: React.ReactNode, className?: string } & React.ComponentProps<"div">) {
  return (
    <div className={`w-full ${className || ""}`} {...props}>
      <img src={textBorderDetail} alt="" className="w-full block" />
      <div className="bg-white w-full px-4 py-2">
        {children}
      </div>
      <img src={textBorderDetail} alt="" className="w-full block rotate-180" />
    </div>
  )
}