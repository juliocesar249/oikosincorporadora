import { useAtomValue } from "jotai";
import { useSearchParams } from "react-router-dom"
import { residentialsAtom } from "../atom/store";
import { MainTemplate } from "../templates/MainTemplate";
import { RouterLink } from "../components/RouterLink";
import oikosLogo from "../assets/img/logo.png";
import { Carousel } from "../components/Carousel";

export function ResidentialInfo() {
  const [searchParams] = useSearchParams();

  const residentialIdString = searchParams.get("id");
  if (residentialIdString === null) {
    return;
  }

  const residentialId = Number.parseInt(residentialIdString);

  const residentials = useAtomValue(residentialsAtom);

  const residential = residentials[residentialId];

  if (residential == undefined) {
    history.back();
    return;
  }

  return <MainTemplate>
    <header className="font-bold p-3 sticky top-0 backdrop-blur-[2px]">
      <RouterLink link="/" className="flex items-center justify-center gap-1">
        <img src={oikosLogo} alt="" className="h-8.75" />
        <p className="flex flex-col items-center">
          <span className="text-2xl/4">OIKOS</span>
          <span className="text-[8px]">INCORPORADORA</span>
        </p>
      </RouterLink>
    </header>

    <main className="font-medium text-[16px]">
      <div className="mt-5 mb-10 w-fit text-end ml-auto mr-auto">
        <span className="text-[10px] font-medium">{residential.expectedDelivery}</span>
        <h1 className="font-bold text-2xl/5">{residential.name}</h1>
      </div>
      <section className={`bg-[url("./assets/img/text-background.png")] bg-contain w-full p-2 pt-6 pb-6`}>
        <p>
          {residential.concept}
        </p>
      </section>
      <section className="mt-6 bg-white pt-2 pb-2 pl-1 pr-1">
        <Carousel images={residential.images.structure} />
        <p className="mt-1 font-normal text-[15px] w-60 text-center mr-auto ml-auto">{residential.location.long}</p>
      </section>
      <section className={`mt-6 bg-[url("./assets/img/text-background.png")] bg-contain w-full pb-6`}>
        <p className="p-2 pt-6 pb-2">
          {residential.characteristics.surroundings}
        </p>
        <iframe src={`https://www.google.com/maps?q=${residential.location.long}&z=16&output=embed`} className="w-full h-50"></iframe>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-center mt-6">Especificações</h2>
        <div className={`mt-1 bg-[url("./assets/img/text-background.png")] bg-contain w-full p-2 pt-6 pb-6`}>
          <p className="font-bold text-[16px] text-center">{residential.characteristics.totalArea}</p>
          <ol className="list-disc ml-7">
            {residential.characteristics.interior.map((str, i) => <li key={i + "c"}>
              {str}
            </li>)}
          </ol>
        </div>
      </section>
      <section className="mt-6 bg-white pt-2 pb-2 pl-1 pr-1">
        <Carousel images={residential.images.blueprints} />
      </section>
      <section className="mt-6 w-full">
        <p className="text-2xl font-bold text-center">Formas de Pagamento</p>
        <div className={`bg-white pt-2 pb-2 pl-1 pr-1 w-full`}>
          <ul className="list-disc ml-7">
            {residential.payments.map((p, i) =>
              <li key={i + "p"} className="">
                {p}
              </li>)}
          </ul>
        </div>
      </section>
      <section className="mt-6 mb-6">
        <div className="text-center mb-4">
          <h2 className="font-bold text-2xl">Acompanhe conosco!</h2>
          <p className="text-base/4">Percentual de evolução: {residential.donePercentage * 100}%</p>
        </div>
        <div className="w-54 bg-white p-2 pt-4 pb-8 ml-auto mr-auto shadow-xl">
          <img src={residential.images.onGoing[0]} />
        </div>
      </section>
    </main>
  </MainTemplate>
}