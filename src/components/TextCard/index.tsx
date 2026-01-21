import type React from "react";
import textBorderDetail from "../../assets/img/text-border-detail.png";

export function TextCard({ children, className, ...props }: { children: React.ReactNode, className?: string } & React.ComponentProps<"div">) {
  return (
    <div className="w-full">
      <img src={textBorderDetail} alt="" className="w-full block relative top-0.5" />
      <div className={`bg-white w-full ${className || ""}`} {...props}>
        {children}
      </div>
      <img src={textBorderDetail} alt="" className="w-full block rotate-180 relative -top-0.5" />
    </div>
  )
}