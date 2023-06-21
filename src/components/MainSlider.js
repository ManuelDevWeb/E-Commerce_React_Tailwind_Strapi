// Swiper to create slide
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";

// Images
import CameraImg from "../img/camera.png";

// Styles
import "../slider.css";

// Data
const sliderData = [
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "First order",
    btnText: "Shop now",
  },
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "First order",
    btnText: "Shop now",
  },
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "First order",
    btnText: "Shop now",
  },
];

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
    >
      <>
        {sliderData?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-full p-[20px] md:p-[60px] relative">
              {/* Text */}
              <div className="w-full">
                <div className="uppercase mb-1 text-center lg:text-left">
                  {slide.pretitle}
                </div>
                <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                  {slide.titlePart1} <br />
                  {slide.titlePart2} <br />
                  {slide.titlePart3}
                </div>
                <button className="btn btn-accent mx-auto lg:mx-0">
                  Shop now
                </button>
              </div>
              {/* Img */}
              <img
                className="xl:absolute xl:-right-16 xl:-bottom-12"
                src={slide.img}
                alt={slide.pretitle}
              />
            </div>
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export { MainSlider };
