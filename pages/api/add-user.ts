import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { email, name, posts } =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body

    try {
      console.log(req.body)
      const user = await prisma.user.create({
        data: {
          email,
          name,
          posts,
        },
      })
      res.status(200).json(user)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
