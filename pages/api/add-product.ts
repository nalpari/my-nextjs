import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { name, imageUrl, categoryId } =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    console.log(req.body)

    try {
      const product = await prisma.products.create({
        data: {
          name,
          image_url: imageUrl,
          category_id: categoryId,
        },
      })
      res.status(201).json(product)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
