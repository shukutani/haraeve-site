import Slider from "react-slick";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const slides = [
    {
      image: "public/img/0A21CDB8-6EE7-4476-8C2D-82D9DE6FBBA72024-04-13_15-57-03_746.jpeg",
      alt: "No_1",
    },
    {
      image: "public/img/80E1B04E-8E9A-46D8-A448-4D0F18037DF72025-12-21_14-07-06_993.jpeg",
      alt: "No_2",
    },
    {
      image: "public/img/E7854AD6-B3F1-4AD1-8A1F-198C3410FEC32025-12-15_16-52-57_144.jpeg",
      alt: "No_3",
    },
    {
      image: "public/img/image.jpeg",
      alt: "No_4",
    },
    {
      image: "public/img/IMG_3945.JPG",
      alt: "No_5",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="relative h-screen w-full overflow-hidden px-2 py-4 md:px-4 md:py-6">
      <div className="relative h-full w-full overflow-hidden rounded-3xl md:rounded-[3rem] shadow-2xl">
        {/* Slider */}
        <Slider {...settings} className="h-full">
          {slides.map((slide, index) => (
            <div key={index} className="h-screen">
              <div className="relative h-full w-full">
                <ImageWithFallback
                  src={slide.image}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-orange-100/80 backdrop-blur-sm rounded-3xl px-8 py-10 md:px-12 md:py-14 shadow-xl text-center">
            <h1 className="mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-900" style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}>
              はらだのいべんと
            </h1>
            <p className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl text-orange-600">
              みんなで楽しむボードゲームサークル
            </p>
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-slate-800">
              初心者から経験者まで、誰もが安心して楽しめる温かいコミュニティです
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-white">
            <span className="text-xs sm:text-sm tracking-wider drop-shadow-md">SCROLL</span>
            <div className="h-8 w-5 rounded-full border-2 border-white shadow-lg">
              <div className="mx-auto mt-2 h-1.5 w-1.5 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}