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

export function ResidentialInfo() {
  useEffect(() => scrollTo({ top: 0 }), []);
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
    <InfoPageHeader />

    <main className="font-medium text-[16px]">
      <div className="mt-5 mb-10 w-fit text-end ml-auto mr-auto">
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

      <section className="mt-6 bg-white pt-2 pb-2 pl-1 pr-1">
        <Carousel images={residential.images.structure} />
        <p className="mt-1 font-normal text-[15px] w-60 text-center mr-auto ml-auto">{residential.location.long}</p>
      </section>

      <section className="mt-6">
        <TextCard className="text-justify pb-2">
          <TextCardParagraph className="pb-2">
            {residential.characteristics.surroundings}
          </TextCardParagraph>
          <GoogleMap address={residential.location.long} />
        </TextCard>
      </section>

      <section className="mt-6">
        <h2>
          <SectionTitle>Especificações</SectionTitle>
        </h2>
        <TextCard>
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

      <section className="mt-6 w-full">
        <h2>
          <SectionTitle>Formas de Pagamento</SectionTitle>
        </h2>
        <TextCard>
          <BulletList items={residential.payments} keyComplement="p" />
        </TextCard>
      </section>

      <section className={`mt-6 ${residential.images.onGoing.length > 1 ? "" : "mb-6"} `}>
        <div className="text-center mb-4">
          <SectionTitle>Acompanhe conosco!</SectionTitle>
          <p className="text-base/4">Percentual de evolução: {residential.donePercentage * 100}%</p>
        </div>
        <OnGoingImageCard imagePaths={residential.images.onGoing} />
      </section>

    </main>
  </MainTemplate>
}