import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const posts = await prisma.post.findMany({
        include: {
          author: true,
          categories: true,
        },
      })

      res.status(200).json(posts)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
