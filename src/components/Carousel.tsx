//Images
import Anisha from "../../images/avatar-anisha.png";
import Ali from "../../images/avatar-ali.png";
import Richard from "../../images/avatar-richard.png";
import Shanai from "../../images/avatar-shanai.png";
//Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "../index.css";
//Shadcn
import { Button } from "../@/components-shad/ui/button";

export default function Carousel() {
  return (
    <div>
      <div className="mt-16 mb-10 flex items-center justify-center">
        <h3 className="text-3xl text-darkBlue font-bold">What they've said</h3>
      </div>
      <div className=" relative">
        <Swiper
          className="py-10"
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
        >
          <SwiperSlide>
            <div className="bg-veryPaleRed flex flex-col items-center justify-center gap-4 text-center relative py-4 px-2">
              <img src={Anisha} className="h-20 w-20" />
              <h3 className="text-darkBlue font-bold text-xl">Anisha Li</h3>
              <p className="text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="keen-slider__slide bg-veryPaleRed flex flex-col items-center justify-center gap-4 text-center relative py-4 px-2">
              <img src={Ali} className="h-20 w-20" />
              <h3 className="text-darkBlue font-bold text-xl">Ali Bravo</h3>
              <p className="text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since 
                using Manage. There is no more cross-channel confusion and everyone
                is much more focused.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="keen-slider__slide bg-veryPaleRed flex flex-col items-center justify-center gap-4 text-center relative py-4 px-2">
              <img src={Richard} className="h-20 w-20" />
              <h3 className="text-darkBlue font-bold text-xl">Richard Watts</h3>
              <p className="text-darkGrayishBlue">
                “Manage allows us to provide structure and process. It keeps us organized
                and focused. I can't stop recommending them to everyone I talk to!”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="keen-slider__slide bg-veryPaleRed flex flex-col items-center justify-center gap-4 text-center relative py-4 px-2">
              <img src={Shanai} className="h-20 w-20" />
              <h3 className="text-darkBlue font-bold text-xl">Shanai Gough</h3>
              <p className="text-darkGrayishBlue">
                “Their software allows us to track, manage and collaborate on 
                our project from anywhere. It keeps the whole team in-sync without
                being intrusive.”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <Button className="flex mx-auto mt-10 shadow-md bg-brightRed font-bold rounded-3xl px-10 hover:opacity-70 hover:bg-brightRed transition duration-300 easy-in-out">
          Get Started
        </Button>
      </div>
    </div>
  );
}
