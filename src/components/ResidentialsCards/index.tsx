import { useAtomValue } from "jotai";
import { residentialsAtom } from "../../atom/store";
import { ResidentialCard } from "../ResidentialCard";

export function ResidentialsCards() {
  const residentials = useAtomValue(residentialsAtom);

  return (
    <section
      className="flex flex-col justify-center items-center pt-15 gap-13"
    >
      {
        residentials.map(residential => <ResidentialCard key={residential.id} residential={residential} />)
      }
    </section>
  )
}