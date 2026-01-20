export function BulletList({ items, keyComplement }: { items: string[], keyComplement: string }) {
  return (
    <ul className="list-disc ml-7">
      {items.map((p, i) =>
        <li key={i + keyComplement} className="">
          {p}
        </li>)}
    </ul>
  );
}