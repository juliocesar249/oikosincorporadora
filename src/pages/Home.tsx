import oikosLogoCompleta from "../assets/img/logo-completa.png";
import oikosLogo from "../assets/img/logo.png";
import titleBackgroundSmall from "../assets/img/title-background.png";
import titleBackgroundMedium from "../assets/img/title-background-medium.png";
import titleBackgroundLarge from "../assets/img/title-background-large.png";
import { MainTemplate } from "../templates/MainTemplate";
import { ResidentialsCards } from "../components/ResidentialsCards";
import { useWindowWidth } from "../hooks/useWindowWidth";

export function Home() {

  const windowWidth = useWindowWidth();
  const titleBackground = windowWidth >= 1280 ? titleBackgroundLarge : (windowWidth >= 768 ? titleBackgroundMedium : titleBackgroundSmall);

  return (
    <MainTemplate>
      <header className="w-lvw">
        <img src={oikosLogoCompleta} className="xl:w-1/2 ml-auto mr-auto xl:hidden" alt='Um hexagono vermelho em expiral começando da esquerda para a direita. Abaixo do hexagono possui um texto escrito "OIKOS Incorporadora"' />
        <div className="hidden xl:flex ap-2 justify-center p-5">
          <img src={oikosLogo} width={102} height={102} alt="" />
          <div className="font-bold flex flex-col items-center">
            <p className="text-[65px]/16">OIKOS</p>
            <p className="text-[22px]">INCORPORADORA</p>
          </div>
        </div>
      </header>

      <main className="relative w-lvw pb-8 overflow-clip">
        <div className={`w-full z-0 relative`}>
          <img src={titleBackground} />
          <h1
            className="h-full xl:h-1/2 flex justify-center items-center font-[Montserrat] font-bold absolute top-0 xl:top-1/2 left-1/2 -translate-x-1/2 xl:-translate-y-1/2 text-2xl w-full">
            Nossos empreendimentos
          </h1>
        </div>
        <div className="absolute w-full overflow-clip z-0">
          <div className="relative -left-33 lg:left-0">
            <div className="bg-[url('./assets/img/capital.png')] bg-contain w-48.75 h-17.5 sticky top-0 z-1"></div>
            <div className="bg-[url('./assets/img/pillar.png')] bg-contain w-30.5 h-192 relative left-9 -top-1 z-0"></div>
          </div>
          <div
            className="absolute top-0 -right-33 lg:right-0">
            <div className="bg-[url('./assets/img/capital.png')] bg-contain w-48.75 h-17.5 sticky top-0 z-1"></div>
            <div className="bg-[url('./assets/img/pillar.png')] bg-contain w-30.5 h-192 relative left-9 -top-1 z-0"></div>
          </div>
        </div>
        <ResidentialsCards />
      </main>
    </MainTemplate>
  )
}