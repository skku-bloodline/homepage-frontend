import Link from "next/link";
import Image from "next/image";
import { ConcertProps } from "@/interfaces";

export default function Post({ title, date, place, image, id }: ConcertProps) {
  return (
    <div className='flex justify-center m-20'>
      <div className='block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 h-80'>
        <Link href={`/events/${id}`}>
          <div className='relative w-full h-full'>
            <Image
              className='rounded-t-lg'
              src={image}
              fill
              alt={title}
            />
          </div>
        </Link>
        <div className='p-6'>
          <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
            {title}
          </h5>
          <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
            {date} <br /> {place}
          </p>
        </div>
      </div>
    </div>
  );
}
