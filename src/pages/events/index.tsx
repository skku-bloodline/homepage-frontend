import Header from "@/components/shared/Header";
import Post from "@/components/events/Post";
import { ConcertProps } from "@/interfaces";

interface EventsProps {
  concerts: ConcertProps[];
}

export default function Home({ concerts }: EventsProps) {
  return (
    <div>
      <Header />
      <div className='flex gap-10 justify-around'>
        {concerts.map((concert) => {
          const { title, date, place, image, id } = concert;
          return (
            <Post
              key={id}
              id={id}
              title={title}
              date={date}
              place={place}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  let concerts = [];
  try {
    const res = await fetch("http://43.201.134.147:8080/api/concerts");
    const json = await res.json();
    concerts = json.data;
  } catch (e) {
    console.log("Error: ", e);
  }

  return {
    props: {
      concerts,
    },
    revalidate: 100,
  };
}
