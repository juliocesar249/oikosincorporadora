import { useAtomValue } from "jotai";
import { useSearchParams } from "react-router-dom"
import { residentialsAtom } from "../atom/store";
import { MainTemplate } from "../templates/MainTemplate";
import { Carousel } from "../components/Carousel";
import { InfoPageHeader } from "../components/InfoPageHeader";
import { TextCard } from "../components/TextCard";
import { OnGoingImageCard } from "../components/OnGoingImageCard";
import { SectionTitle } from "../components/SectionTitle";
import { BulletList } from "../components/BulletList";
import { GoogleMap } from "../components/GoogleMap";
import { useEffect } from "react";
import { TextCardParagraph } from "../components/TextCardParagraph";
import textBorderDetaulMedium from "../assets/img/text-border-detail-medium.png";
import { useWindowWidth } from "../hooks/useWindowWidth";

export function ResidentialInfo() {
  useEffect(() => scrollTo({ top: 0 }), []);
  const [searchParams] = useSearchParams();

  const width = useWindowWidth();

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
    <InfoPageHeader />

    <main className="font-medium text-[16px] ">
      <div className="mt-5 mb-10 w-fit text-end ml-auto mr-auto xl:col-span-2">
        <span className="text-[10px] font-medium">{residential.expectedDelivery}</span>
        <h1>
          <SectionTitle className="text-2xl/5">{residential.name}</SectionTitle>
        </h1>
      </div>

      <section>
        <TextCard className="text-justify">
          <TextCardParagraph>
            {residential.concept}
          </TextCardParagraph>
        </TextCard>
      </section>

      <div className="xl:mt-6 xl:grid xl:grid-cols-2 xl:grid-rows-[auto]">
        <section className="mt-6 xl:mt-0">
          <img src={textBorderDetaulMedium} className="hidden xl:block w-full" />
          <div className="bg-white pt-2 pb-2 pl-1 xl:pt-0 xl:pb-0 pr-1">
            <Carousel images={residential.images.structure} />
            <p className="mt-1 font-normal text-[15px] w-60 text-center mr-auto ml-auto">{residential.location.long}</p>
          </div>
          <img src={textBorderDetaulMedium} className="hidden xl:block rotate-180 w-full" />
        </section>

        <section className="mt-6 xl:mt-0">
          <TextCard className="text-justify pb-2 xl:pb-0 xl:flex xl:flex-col" {...width >= 1280 && { borderSize: "medium" }}>
            <TextCardParagraph className="pb-2">
              {residential.characteristics.surroundings}
            </TextCardParagraph>
            <GoogleMap address={residential.location.long} />
          </TextCard>
        </section>
      </div>

      <div>
        <section className="mt-6">
          <h2>
            <SectionTitle>Especificações</SectionTitle>
          </h2>
          <TextCard className="pb-2">
            <TextCardParagraph
              className="font-bold text-[16px] text-center"
            >
              {residential.characteristics.totalArea}
            </TextCardParagraph>
            <BulletList items={residential.characteristics.interior} keyComplement="c" />
          </TextCard>
        </section>

        <section className="mt-6 bg-white pt-2 pb-2 pl-1 pr-1">
          <Carousel images={residential.images.blueprints} />
        </section>
      </div>

      <section className="mt-6 w-full">
        <h2>
          <SectionTitle>Formas de Pagamento</SectionTitle>
        </h2>
        <TextCard className="p-2">
          <BulletList items={residential.payments} keyComplement="p" />
        </TextCard>
      </section>

      <section className={`mt-6 ${residential.images.onGoing.length > 1 ? "" : "mb-6"} xl:col-span-2`}>
        <div className="text-center mb-4">
          <SectionTitle>Acompanhe conosco!</SectionTitle>
          <p className="text-base/4">Percentual de evolução: {residential.donePercentage * 100}%</p>
        </div>
        <OnGoingImageCard imagePaths={residential.images.onGoing} />
      </section>

    </main>
  </MainTemplate>
}