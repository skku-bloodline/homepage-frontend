import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default function About() {
  const [scrollLocation, setScrollLocation] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const set = () => {
      setScrollLocation(window.scrollY);
    };

    window.addEventListener("scroll", () => {
      set();
    });

    return window.removeEventListener("scroll", set);
  }, []);

  return (
    <>
      <div className='relative w-screen h-screen'>
        <Image
          src='/assets/images/hero.jpg'
          fill
          alt='hero'
          className='-z-10 opacity-70'
        />

        <h1 className='text-xl z-20 white'>화려한 혈통</h1>
      </div>

      {scrollLocation > 200 ? <Header hide={false} /> : <Header hide />}

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit veniam
        magni commodi nemo porro molestiae quo vitae? Dicta alias amet molestiae
        tempore pariatur error distinctio commodi recusandae repellendus a?
        Totam? Quia doloremque tempora commodi assumenda enim aspernatur ut
        quas? Nesciunt, et cum dolores quia quis est dolorem nihil possimus ab
        neque quod perferendis labore dignissimos suscipit voluptatibus
        temporibus molestias harum! Veritatis, similique quos ratione vero
        molestiae quibusdam quia in magni recusandae, optio, totam tenetur ab.
        Exercitationem provident ipsa asperiores totam optio necessitatibus
        magni doloremque nemo, temporibus accusamus cumque est possimus!
        Explicabo molestias sequi assumenda enim voluptate obcaecati sunt iste
        ut iusto nesciunt aliquam ad aut provident magni atque est perspiciatis
        reprehenderit qui optio expedita, dolore fugit tempora eum. Dolorem,
        totam. Dignissimos commodi fugit iure numquam. Officiis deserunt
        veritatis consectetur minus cumque neque quisquam numquam soluta quasi
        voluptatum eligendi esse tenetur, animi, libero est veniam molestiae ad
        iste quas quae facilis! Corporis quasi, expedita consequatur nisi at
        perspiciatis aspernatur in nesciunt voluptatibus, reprehenderit
        voluptate provident, sapiente est nobis quo dolor facere nihil fuga
        quisquam repellat laborum architecto. Totam maiores ea enim! Laborum
        nemo doloribus aperiam quod ex placeat eos dolore minus ad nobis
        tempora, explicabo cupiditate sunt possimus tenetur non qui
        exercitationem minima fugit iure dolor consectetur. Doloremque
        cupiditate iste accusantium. Aliquam tempore impedit eum laborum totam
        minima asperiores incidunt. Rem quae enim deserunt provident corporis
        sed doloribus veniam esse, consequuntur voluptatibus, totam recusandae
        eveniet dolorem rerum consequatur quod dolores minima. Odio numquam
        eligendi rem, pariatur laudantium autem, exercitationem ullam obcaecati
        consectetur sequi unde ducimus dolorem asperiores deleniti repellendus,
        sunt natus deserunt sint quibusdam molestias! Possimus sint odit soluta
        inventore consequatur? Totam, nostrum nemo, voluptatum aperiam fuga sit
        eveniet ab labore ducimus enim neque hic non unde inventore, molestias
        quo! Vero quas neque a beatae atque nam eos eius molestiae at?
      </p>
      <Footer />
    </>
  );
}
