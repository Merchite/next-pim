import Navigation from "@/components/Navigation";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Navigation />
      <div>Details about product {id}</div>;
    </>
  )
}

export default ProductDetails