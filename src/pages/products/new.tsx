import { Button, Input, Navigation } from "@/components/Index"
import axios from "axios"

const NewProduct = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await axios.post('/api/createProduct', {
      data: {
        name: event.currentTarget.name.valueOf,
        vendor: event.currentTarget.vendor.value,
        price: event.currentTarget.price.value,
        msrp: event.currentTarget.msrp.value,
        cost: event.currentTarget.cost.value,
        image: event.currentTarget.image.value,
        description: event.currentTarget.description.value,
        category: event.currentTarget.category.value,
        sku: event.currentTarget.sku.value,
        barcode: event.currentTarget.barcode.value,
        quantity: event.currentTarget.quantity.value,
        tags: event.currentTarget.tags.value,
        status: event.currentTarget.status.value,
        channel: event.currentTarget.channel.value,
        needsRefinement: event.currentTarget.needsRefinement.checked
      }
    })

    const { success } = await response.data
    if (success) {
      alert('Product created!')
    }
  }

  return (
    <>
      <Navigation />
      <div>
        <h1>New Product</h1>
        {/* Add form with product schema values and submit it to /api/createProduct endpoint */}
        <form onSubmit={handleSubmit}>
          <Input id="name" label="Name" />
          <Input id="vendor" label="Vendor" />
          <Input id="price" label="Price" />
          <Input id="msrp" label="MSRP" />
          <Input id="cost" label="Cost" />
          <Input id="image" label="Image URL" />
          <Input id="description" label="Description" />
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="vendor">Vendor</label>
            <input type="text" id="vendor" />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input type="number" id="price" />
          </div>
          <div>
            <label htmlFor="msrp">MSRP</label>
            <input type="number" id="msrp" />
          </div>
          <div>
            <label htmlFor="cost">Cost</label>
            <input type="number" id="cost" />
          </div>
          <div>
            <label htmlFor="image">Image URL</label>
            <input type="text" id="image" />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" />
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <input type="text" id="category" />
          </div>
          <div>
            <label htmlFor="sku">SKU</label>
            <input type="text" id="sku" />
          </div>
          <div>
            <label htmlFor="barcode">Barcode</label>
            <input type="text" id="barcode" />
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" />
          </div>
          <div>
            <label htmlFor="tags">Tags</label>
            <input type="text" id="tags" />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <input type="text" id="status" />
          </div>
          <div>
            <label htmlFor="channel">Channel</label>
            <input type="text" id="channel" />
          </div>
          <div>
            <label htmlFor="needsRefinement">Needs Refinement</label>
            <input type="checkbox" id="needsRefinement" />
          </div>
          <div>
            <Button type="submit">Create products</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewProduct