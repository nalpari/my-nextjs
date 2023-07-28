import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'DELETE') {
    const { id } = req.query

    try {
      const post = await prisma.post.delete({
        where: { id: Number(id) },
      })
      res.status(200).json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
