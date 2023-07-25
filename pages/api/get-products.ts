import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

async function getProducts() {
  try {
    const products = await prisma.products.findMany()
    return products
  } catch (error) {}
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await getProducts()
    res.status(200).json({ products: response })
  } catch (error) {
    res.status(400).json({ message: 'Failed to get products' })
  }
}
