export function TextCardParagraph({children, className, ...props} : {children: React.ReactNode} & React.ComponentProps<"p">) {
  return (
    <p className={`px-4 py-2 ${className}`} {...props}>
      {children}
    </p>
  )
}