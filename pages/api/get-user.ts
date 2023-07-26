import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const { id } = req.query

    try {
      const user = await prisma.user.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          profile: true,
          posts: {
            include: {
              categories: true,
            },
          },
        },
      })
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
