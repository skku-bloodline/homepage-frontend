import Image from "next/image";
import Link from "next/link";

interface HeaderProp {
  hide: boolean;
}

export default function Header({ hide }: HeaderProp) {
  const links = [
    {
      href: "/about",
      text: "About",
    },
    {
      href: "/events",
      text: "Events",
    },
    {
      href: "/register",
      text: "Register",
    },
    {
      href: "/contact",
      text: "Contact",
    },
    {
      href: "/login",
      text: "Login",
    },
  ];

  const bgColor = hide ? "" : "bg-black";

  return (
    <div
      className={`h-25 flex justify-between fixed top-0 w-screen ${bgColor}`}
    >
      <div className='flex flex-col justify-center items-center'>
        <Link href='/'>
          <Image
            src='/assets/images/bloodlineLOGO_R.svg'
            width='150'
            height='150'
            alt='logo'
            className='mx-20'
          />
        </Link>
      </div>
      <div className='flex flex-row items-center justify-start mx-10'>
        {links.map((link, idx) => {
          const { href, text } = link;
          return (
            <Link
              href={href}
              key={idx}
              className='mx-3 text-xl font-light'
            >
              {text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
