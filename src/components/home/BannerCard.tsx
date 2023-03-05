import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./BannerCard.module.scss";

interface BannerCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function BannerCard({
  title,
  description,
  link,
  image,
}: BannerCardProps) {
  const router = useRouter();
  const card = useRef(null);
  console.log(`${image}`);
  return (
    <div
      className={`flex justify-center items-center flex-col h-1/2 w-1/2 bg-black ${styles.card}`}
      onClick={() => {
        router.push(encodeURI(link));
      }}
      ref={card}
    >
      <Image
        src={`${image}`}
        fill
        alt={title}
        style={{ objectFit: "cover" }}
        className={`${styles.image}`}
      />
      <strong className='z-10'>{title}</strong>
      <span className='z-10'>{description}</span>
    </div>
  );
}
