import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'PUT') {
    const { title } =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const { id } = req.query

    try {
      const post = await prisma.post.update({
        where: {
          id: Number(id),
        },
        data: {
          title,
        },
      })

      res.status(200).json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
