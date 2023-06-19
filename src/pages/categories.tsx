import Navigation from "@/components/Navigation"
import Link from "next/link"

const CategoriesListing = () => {
  return (
    <>
      <Navigation />
      <div>
        <h1>Categories</h1>
        <p>Categories will be listed here</p>
        <Link href="/categories/new">
          <button>Create Category</button>
        </Link>
      </div>
    </>
  )
}

export default CategoriesListing