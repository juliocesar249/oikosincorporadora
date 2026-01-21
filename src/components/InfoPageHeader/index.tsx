import { RouterLink } from "../RouterLink";
import oikosLogo from "../../assets/img/logo.png";

export function InfoPageHeader() {
  return (
    <header className="font-bold p-3 sticky top-0 backdrop-blur-[2px] z-10">
      <RouterLink aria-label="Voltar para a página inicial" link="/" className="flex items-center justify-center gap-1">
        <img src={oikosLogo} className="h-8.75" />
        <p className="flex flex-col items-center">
          <span className="text-2xl/4">OIKOS</span>
          <span className="text-[8px]">INCORPORADORA</span>
        </p>
      </RouterLink>
    </header>
  )
}