import { Navigation, Button } from "@/components/Index"
import Link from "next/link"

const ProductsListing = () => {
  return (
    <>
      <Navigation />
      <div>
        <h1>Products</h1>
        <p>
          Products will be listed here.
        </p>
        <Link href="/products/new">
          <Button>
            Create Product
          </Button>
        </Link>
      </div>
    </>
  )
}

export default ProductsListing