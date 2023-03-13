import { useRouter } from "next/router";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

interface EventProps {
  title: string;
  date: sting;
  image: string;
}

export default function Event({ title, date, image }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      {id}
      <Footer />
    </>
  );
}
