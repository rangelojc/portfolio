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
  description?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Kater.ai",
    imageUrl: katerThumb,
    description:
      "Various fully functional screens for Kater's LLM-based business intelligence tool. Developed with Vite, React, Xyflow/Reactflow, TailwindCSS, Zustand, HeadlessUI and others.",
  },
  {
    id: 2,
    title: "The BullX Trade",
    imageUrl: tbxThumb,
    description:
      "South Korean-based digital asset trading platform made using React/Next, Redux and SignalR.",
  },
  {
    id: 4,
    title: "Zombied",
    imageUrl: zomThumb,
    description:
      "Web-based poker game made with Phaser, an Express.js backend and Socket.io for real-time multiplayer logic.",
  },
  {
    id: 3,
    title: "vNext Dashboards",
    imageUrl: vNextThumb,
    description:
      "Internal and external dashboard applications for Vesta's vNext anti-fraud platform, made with React/Next, Redux, MaterialUI and others.",
  },
  {
    id: 5,
    title: "vNext Demo Store",
    imageUrl: vNextDemoThumb,
    description:
      "Demo store application used by Vesta's sales team and integrates the company's anti-fraud services and API endpoints. Developed with React/Next, Redux, MaterialUI.",
  },
];

const Projects = () => {
  return (
    <Section id="projectsSection">
      <SectionTitle>Projects</SectionTitle>
      <Swiper
        style={
          {
            "--swiper-navigation-size": "32px",
            "--swiper-theme-color": "var(--color-yellow-500)",
            "--swiper-pagination-bullet-inactive-color":
              "var(--color-neutral-400)",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          } as any
        }
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
            <div className="bg-primary-900 rounded shadow-lg overflow-hidden group hover:brightness-125 hover:shadow-xl transition-all duration-300 relative cursor-pointer">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="relative z-1 w-full h-[400px] scale-105 object-cover group-hover:scale-110 transition-transform duration-300"
              />

              <div className="p-4 relative z-2 bg-primary-900 min-h-36">
                <h5 className="text-xl font-medium">{item.title}</h5>
                <p className="text-neutral-300">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};

export default Projects;
