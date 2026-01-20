export function OnGoingImageCard({ imagePaths }: { imagePaths: string[] }) {

  if (imagePaths.length === 1) {
    return (
      <div className="w-54 bg-white p-2 pt-4 pb-8 shadow-[rgb(0,0,0,0.25)] shadow-[1px_2px_4px] ml-auto mr-auto">
        <img src={imagePaths[0]} loading="lazy" />
      </div>
    )
  }

  let topValue = 24;
  return (
    <div className="flex flex-col pr-2 pl-2">
      {
        imagePaths.map((path, i) => {

          const isNotFirst = !(i == 0);
          const isOdd = !(i % 2 == 0);
          const cardStyle : React.CSSProperties = {
            top: -topValue + "px",
          }
          
          if(isNotFirst) {
            topValue += 24;
          }


          return (
            <div
              key={i}
              style={isNotFirst ? cardStyle : undefined}
              className={`w-54 bg-white p-2 pt-4 pb-8 shadow-[rgb(0,0,0,0.25)] shadow-[0px_4px_4px] relative ${isOdd ? "self-end" : ""}`}>

              <img src={path} loading="lazy"/>
            </div>
          )
        })
      }
    </div>
  )

}