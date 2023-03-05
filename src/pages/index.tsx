import Image from "next/image";
import styles from "@/styles/Home.module.css";
import BannerCardList from "@/components/home/BannerCardList";

export default function Home() {
  return (
    <div className='h-screen w-screen overflow-hidden flex justify-items-center items-center'>
      <BannerCardList />

      {/* TODO: Make border as text going around logo */}
      <div
        className={`bg-black rounded-full ${styles.circle} z-20 flex justify-items-center items-center border-solid border-2 border-white`}
      >
        <Image
          src='/assets/images/bloodlineLOGO_R.svg'
          width='300'
          height='300'
          alt='logo'
          className='mx-auto'
        />
      </div>
    </div>
  );
}
