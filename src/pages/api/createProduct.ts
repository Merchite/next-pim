import { NextApiRequest, NextApiResponse } from 'next';
import { without } from 'lodash';

import prismadb from '@/../libs/prismadb';
import serverAuth from '@/../libs/serverAuth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { currentUser } = await serverAuth(req, res);

      const { productId, productName, productVendor, productPrice, productMSRP, productCost, productImage, productDescription, productCategory, productSKU, productBarcode, productQuantity, productTags, productStatus, productChannel, productNeedsRefinement } = req.body;

      const newProduct = await prismadb.product.create({
        data: {
          id: productId,
          name: productName,
          vendor: productVendor,
          price: productPrice,
          msrp: productMSRP,
          cost: productCost,
          image: productImage,
          description: productDescription,
          category: productCategory,
          sku: productSKU,
          barcode: productBarcode,
          quantity: productQuantity,
          tags: productTags,
          status: productStatus,
          channel: productChannel,
          needsRefinement: productNeedsRefinement,
        }
      })

      return res.status(200).json({ message: 'Product created successfully', product: newProduct });
    }
    return res.status(405).end();
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
}
