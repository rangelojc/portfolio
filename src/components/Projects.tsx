import katerThumb from "@/assets/projects/kater/kater (1).png";
import tbxThumb from "@/assets/projects/tbxm-2.png";
import vNextDemoThumb from "@/assets/projects/vnext-demostore2.PNG";
import vNextThumb from "@/assets/projects/vnext-int-3.PNG";
import zomThumb from "@/assets/projects/zombie-1.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Section, SectionTitle } from "./Widgets";

type PortfolioItem = {
  id: number;
  title: string;
  imageUrl: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Kater.ai",
    imageUrl: katerThumb,
  },
  {
    id: 2,
    title: "The BullX Trade",
    imageUrl: tbxThumb,
  },
  {
    id: 4,
    title: "Zombied",
    imageUrl: zomThumb,
  },
  {
    id: 3,
    title: "vNext",
    imageUrl: vNextThumb,
  },
  {
    id: 5,
    title: "vNext Demo Store",
    imageUrl: vNextDemoThumb,
  },
];

const Projects = () => {
  return (
    <Section id="projectsSection">
      <SectionTitle>Projects</SectionTitle>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="!pb-8 w-full"
      >
        {portfolioItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-cinder-950 rounded shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 relative">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="relative z-1 w-full h-[400px] scale-105 object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div className="p-4 relative z-2 bg-cinder-950">
                <h3 className="text-xl font-medium">{item.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Projects;
