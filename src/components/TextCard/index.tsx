import type React from "react";

export function TextCard({ children, className, ...props}: { children: React.ReactNode, className?: string } & React.ComponentProps<"div">) {
  return (
    <div className={`bg-[url("./assets/img/text-background.png")] bg-contain w-full p-2 pt-6 pb-6 ${className || ""}`} {...props}>
      {children}
    </div>
  )
}