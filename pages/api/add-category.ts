import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { name } =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body

    try {
      console.log(req.body)
      const category = await prisma.category.create({
        data: {
          name,
        },
      })

      res.status(200).json(category)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
