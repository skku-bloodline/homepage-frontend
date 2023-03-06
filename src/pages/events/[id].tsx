import { useRouter } from "next/router";

export default function Event() {
  const router = useRouter();
  const { id } = router.query;

  return <>{id}</>;
}
