export function GoogleMap({ address }: { address: string }) {
  return <iframe title="Localização do residêncial no Google Maps" src={`https://www.google.com/maps?q=${address}&z=16&output=embed`} className="w-full h-50"></iframe>
}