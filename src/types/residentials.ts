export type residentialsType = {
  id: number,
  expectedDelivery: string,
  images: {
    structure: string[],
    blueprints: string[],
    onGoing: string[]
  }
  name: string,
  concept: string,
  location: {
    short: string,
    long: string
  },
  characteristics: {
    surroundings: string,
    totalArea: string,
    interior: string[]
  },
  incorporation: string,
  payments: string[]
  donePercentage: number,
}