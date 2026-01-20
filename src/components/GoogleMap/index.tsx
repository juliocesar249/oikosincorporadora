export function GoogleMap({ location }: { location: string }) {
  return <iframe src={`https://www.google.com/maps?q=${location}&z=16&output=embed`} className="w-full h-50"></iframe>
}