import { useState } from "react";
import carouselArrow from "../../assets/img/carousel-arrow.png";

type CarouselProps = {
  images: string[];
}
export function Carousel({ images }: CarouselProps) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const length = images.length;
  const currentImage = images[currentPosition];

  function nextImage() {
    if (currentPosition === (length - 1)) {
      setCurrentPosition(0);
      return;
    }
    setCurrentPosition(prev => prev + 1);
  }

  function previousImage() {
    if (currentPosition === 0) {
      setCurrentPosition(length - 1);
      return;
    }

    setCurrentPosition(prev => prev - 1);
  }

  return (
    <div className="relative">
      <button aria-label="Imagem anterior" className="bg-[rgb(255,255,255,0.22)] backdrop-blur-xs absolute p-3 rounded-[7px] flex top-1/2 -translate-y-1/2 ml-1" onClick={previousImage}>
        <img src={carouselArrow} alt="Seta do carrossel de imagens para a esquerda." className="w-6 h-6" />
      </button>

      <img
        src={currentImage}
        alt="Imagens ilustrativas da estrutura do conjunto residêncial"
        className="max-h-100 ml-auto mr-auto"
      />

      <button aria-label="Próxima imagem" className="bg-[rgb(255,255,255,0.22)] backdrop-blur-xs absolute p-3 rounded-[7px] flex top-1/2 -translate-y-1/2 mr-1 right-0">
        <img src={carouselArrow} alt="Seta do carrossel de imagens para a esquerda." className="w-6 h-6 rotate-180" onClick={nextImage} />
      </button>
    </div>
  )
}