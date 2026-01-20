import type { residentialsType } from "../../types/residentials";
import { RouterLink } from "../RouterLink";

type ResidentialCardsProps = {
  residential: residentialsType
}

export function ResidentialCard({ residential }: ResidentialCardsProps) {
  return (
    <article
      className="w-70 p-2 bg-white z-1 drop-shadow-2xl"
    >
      <header>
        <img src={residential.images.structure[0]} alt="Um conjunto residêcial lcoalizado em uma esquina. Posusi paredes brancas, grades com visto para o interior e portões de garagem, totalizando 4 residências no conjunto." />
      </header>
      <div className="flex items-end">
        <p className="font-bold text-2xl">{residential.name}</p>
        <p className="text-sm text-nowrap">{residential.location.short}</p>
      </div>
      <RouterLink link={`/residencial?id=${residential.id}`} className="text-[12px] underline">Mais informações</RouterLink>
    </article>
  )
}