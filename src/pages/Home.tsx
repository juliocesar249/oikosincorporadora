import oikosLogo from "../assets/img/logo-completa.png";
import titleBackground from "../assets/img/title-background.png";
import { MainTemplate } from "../templates/MainTemplate";
import { ResidentialsCards } from "../components/ResidentialsCards";

export function Home() {

  return (
    <MainTemplate>
      <header className="w-lvw">
        <img src={oikosLogo} alt='Um hexagono vermelho em expiral começando da esquerda para a direita. Abaixo do hexagono possui um texto escrito "OIKOS Incorporadora' />
      </header>

      <main className="relative w-lvw pb-8 overflow-clip">
        <div className={`w-full bg-[url('./assets/img/title-background.png')] bg-no-repeat bg-contain z-0 relative`}>
          <img src={titleBackground} />
          <h1
            className="h-full flex justify-center items-center font-[Montserrat] font-bold absolute top-0 left-1/2 -translate-x-1/2 text-2xl w-full">Nossos empreendimentos</h1>
        </div>
        <div className="absolute w-full overflow-clip z-0">
          <div className="relative -left-33">
            <div className="bg-[url('./assets/img/capital.png')] bg-contain w-48.75 h-17.5 sticky top-0 z-1"></div>
            <div className="bg-[url('./assets/img/pillar.png')] bg-contain w-30.5 h-192 relative left-9 -top-1 z-0"></div>
          </div>
          <div
            className="absolute top-0 -right-33">
            <div className="bg-[url('./assets/img/capital.png')] bg-contain w-48.75 h-17.5 sticky top-0 z-1"></div>
            <div className="bg-[url('./assets/img/pillar.png')] bg-contain w-30.5 h-192 relative left-9 -top-1 z-0"></div>
          </div>
        </div>
        <ResidentialsCards />
      </main>
    </MainTemplate>
  )
}