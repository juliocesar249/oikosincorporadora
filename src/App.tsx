import { useAtomValue } from "jotai";
import oikosLogo from "./assets/img/logo.png";
import titleBackground from "./assets/img/title-background.png";
import { residentialsAtom } from "./atom/store";

function App() {

  const residentials = useAtomValue(residentialsAtom);

  return <div className="bg-linear-to-r from-[#EDE4D8] via-[#ECE2D6] to-[#E8DDD0]">
    <header className="w-lvw">
      <img src={oikosLogo} alt='Um hexagono vermelho em expiral começando da esquerda para a direita. Abaixo do hexagono possui um texto escrito "OIKOS Incorporadora' />
    </header>

    <main className="relative w-lvw pb-8 overflow-clip">
      <div className={`w-full bg-[url('./assets/img/title-background.png')] bg-no-repeat bg-contain z-0 relative`}>
        <img src={titleBackground}/>
        <p
         className="h-full flex justify-center items-center font-[Montserrat] font-bold absolute top-0 left-1/2 -translate-x-1/2 text-2xl w-full">Nossos empreendimentos</p>
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
      <section
        className="flex flex-col justify-center items-center pt-15 gap-13"
      >
        {
          residentials.map(residential =>
            <article
            key={residential.id}
              className="w-70 p-2 bg-white z-1 drop-shadow-2xl"
            >
              <header>
                <img src={residential.images.structure[0]} alt="Um conjunto residêcial lcoalizado em uma esquina. Posusi paredes brancas, grades com visto para o interior e portões de garagem, totalizando 4 residências no conjunto."/>
              </header>
              <div className="flex items-end">
                <p className="font-bold text-2xl">{residential.name}</p>
                <p className="text-sm text-nowrap">{residential.location.short}</p>
              </div>
              <a href="#" className="text-[12px] underline">Mais informações</a>
            </article>)
        }
      </section>
    </main>
    <footer className="w-full bg-white text-[Montserrat] flex flex-col gap-3 items-center font-light text-[12px] pt-5 pb-5">
      <p>OIKOS INCORPORADORA LTDA</p>
      <p>CNPJ: 58.473.621/0001-72</p>
      <a href="https://maps.app.goo.gl/Ujp86SauANvhcGLv9">Rua Dr. Pedrosa, 313, Stúdio 1001, Centro, Curitiba-PR</a>
      <div className="flex font-bold justify-around w-full">
        <a href="mailto:oikosincorporadorabr@gmail.com">oikosincorporadorabr@gmail.com</a>
        <a href="tel:4198474-2721">(41) 98474-2721</a>
      </div>
    </footer>
  </div>
}

export default App
