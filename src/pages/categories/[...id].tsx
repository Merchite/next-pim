import Navigation from "@/components/Navigation";
import { useRouter } from "next/router";

const CategoryDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Navigation />
      <div>Details about category {id}</div>;
    </>
  )
}

export default CategoryDetails