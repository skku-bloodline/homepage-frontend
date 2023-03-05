import { useEffect, useRef, useCallback } from "react";
import styles from "./BannerCard.module.scss";
import BannerCard from "./BannerCard";

const cards = [
  {
    title: "About",
    description: "성균관대학교 최고의 락밴드 동아리에 관하여",
    link: "/about",
    image: "/assets/images/about.jpg",
  },
  {
    title: "Events",
    description: "이전 공연 및 향후 계획",
    link: "/events",
    image: "/assets/images/events.jpg",
  },
  {
    title: "Register",
    description: "혈통과 함께 새롭고 멋진 경험을 쌓아보세요",
    link: "/register",
    image: "/assets/images/register.jpg",
  },
  {
    title: "Contact us",
    description: "언제든지 무엇이든 물어보세요!",
    link: "/contact",
    image: "/assets/images/contact.jpg",
  },
];

export default function BannerCardList() {
  const containerRef = useRef(null);

  const color = "white";

  useEffect(() => {
    function mouseMoveEvent(e) {
      const { x, y } = containerRef.current.getBoundingClientRect();
      containerRef.current.style.setProperty("--px", e.clientX - x);
      containerRef.current.style.setProperty("--py", e.clientY - y);
      color && containerRef.current.style.setProperty("--color", color);
    }
    containerRef.current.addEventListener("mousemove", mouseMoveEvent);

    return () => {
      containerRef.current.removeEventListener("mousemove", mouseMoveEvent);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`h-screen fixed top-0 left-0 right-0 flex flex-wrap ${styles.cardContainer}`}
    >
      {cards.map(({ title, description, link, image }, idx) => {
        return (
          <BannerCard
            key={idx}
            title={title}
            description={description}
            link={link}
            image={image}
          />
        );
      })}
    </div>
  );
}
