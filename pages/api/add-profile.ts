import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { bio, userId } =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body

    try {
      const profile = await prisma.profile.create({
        data: {
          bio,
          userId,
        },
      })
      res.status(201).json(profile)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
