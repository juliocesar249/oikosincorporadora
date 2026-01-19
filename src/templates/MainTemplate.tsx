import { Footer } from "../components/Footer"

type MainTemplateProps = {
  children: React.ReactNode
}
export function MainTemplate({children}: MainTemplateProps) {
  return <div className="bg-linear-to-r from-[#EDE4D8] via-[#ECE2D6] to-[#E8DDD0]">
    {children}
    
    <Footer />
  </div>
}