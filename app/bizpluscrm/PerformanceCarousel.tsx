"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { memo, useMemo, useState } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

type Slide = {
  src: string;
  alt: string;
  label: string;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    src: "/assets/img/carousel/img1.png?v=2",
    alt: "Inventory Dashboard",
    label: "Inventory",
    title: "Real-time inventory tracking",
    description: "Monitor total value, low stock alerts, and overstock items instantly.",
  },
  {
    src: "/assets/img/carousel/img2.png?v=2",
    alt: "BOM Configuration Screen",
    label: "Manufacturing",
    title: "Intelligent BOM management",
    description: "Configure product recipes and track component structures efficiently.",
  },
  {
    src: "/assets/img/carousel/img3.png?v=2",
    alt: "Product Inventory List",
    label: "Products",
    title: "Detailed product inventory",
    description: "Quickly view product stock, batches, divisions, and HSN codes.",
  },
  {
    src: "/assets/img/carousel/img4.png?v=2",
    alt: "Scrap Inventory Editor",
    label: "Scrap",
    title: "Scrap and waste tracking",
    description: "Manage scrap records with detailed job card and unit price tracking.",
  },
  {
    src: "/assets/img/carousel/img5.png?v=2",
    alt: "Indent Tracking Screen",
    label: "Indents",
    title: "Seamless indent tracking",
    description: "Track raw material requirements and open stock indents with ease.",
  },
  {
    src: "/assets/img/carousel/img6.png?v=2",
    alt: "Edit Challan Screen",
    label: "Sales",
    title: "Challan Management",
    description: "Streamline dispatch operations and track delivery challans effectively.",
  },
  {
    src: "/assets/img/carousel/img7.png?v=2",
    alt: "GRN Tracking Screen",
    label: "Purchase",
    title: "Goods Receipt Note (GRN)",
    description: "Manage inbound inventory and track purchase order fulfillment securely.",
  },
  {
    src: "/assets/img/carousel/img8.png?v=2",
    alt: "Job Card Editor",
    label: "Production",
    title: "Detailed Job Cards",
    description: "Plan production output, log labour hours, and calculate exact costs.",
  },
  {
    src: "/assets/img/carousel/img9.png?v=2",
    alt: "Business Analytics Dashboard",
    label: "Analytics",
    title: "Comprehensive Dashboard",
    description: "Get a bird's-eye view of open enquiries, tasks, sales, and overdue items.",
  },
];

const PaginationContainer = memo(function PaginationContainer() {
  return <div className="pc-pagination" />;
});

export function PerformanceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const activeSlide = slides[activeIndex] ?? slides[0];

  const glowStyle = useMemo(
    () => ({
      backgroundImage: `
        radial-gradient(circle at 18% 16%, rgba(255, 255, 255, 0.82), transparent 26%),
        radial-gradient(circle at 82% 22%, rgba(96, 165, 250, 0.34), transparent 22%),
        radial-gradient(circle at 50% 84%, rgba(16, 185, 129, 0.26), transparent 24%),
        linear-gradient(135deg, rgba(255, 255, 255, 0.92), rgba(237, 246, 255, 0.72)),
        url(${activeSlide.src})
      `,
    }),
    [activeSlide.src],
  );

  return (
    <motion.div
      className="pc-shell"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="pc-bg" style={glowStyle} aria-hidden="true" />
      <div className="pc-frost" aria-hidden="true" />

      <div className="pc-frame">
        <div className="pc-header">
          <div>
            <span className="pc-kicker">Live performance loop</span>
            <h3>{activeSlide.title}</h3>
          </div>
          <span className="pc-label">{activeSlide.label}</span>
        </div>

        <Swiper
          modules={[Autoplay, EffectCoverflow, Pagination]}
          effect="coverflow"
          centeredSlides
          slidesPerView={1.15}
          spaceBetween={18}
          loop
          grabCursor
          speed={850}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 180, modifier: 1.5, slideShadows: false }}
          autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true, el: ".pc-pagination" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="pc-swiper"
        >
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide key={slide.src}>
                <article
                  className={`pc-slide ${isActive ? "is-active" : ""}`}
                  style={{ transition: "transform 0.35s ease-out, opacity 0.3s ease, box-shadow 0.3s ease" }}
                >
                  <div className="pc-imageWrap">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 88vw, 540px"
                      className="pc-image"
                    />
                    <div className="pc-imageGlow" aria-hidden="true" />
                  </div>

                  <div className="pc-meta">
                    <span>{slide.label}</span>
                    <p>{slide.description}</p>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="pc-footer">
          <div className="pc-progressTrack" aria-hidden="true">
            <motion.span
              className="pc-progressFill"
              key={activeIndex}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.8, ease: "linear" }}
            />
          </div>
          <PaginationContainer />
        </div>
      </div>
    </motion.div>
  );
}
