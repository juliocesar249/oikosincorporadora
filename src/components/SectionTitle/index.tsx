import type React from "react";

export function SectionTitle({children, className, ...props}:{children: React.ReactNode} & React.ComponentProps<"div">) {
  return (
    <div className={`text-2xl font-bold text-center ${className}`} {...props}>
      {children}
    </div>
  )
}