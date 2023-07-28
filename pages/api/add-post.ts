import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { title, authorId, categories } =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    console.log(req.body)

    try {
      const post = await prisma.post.create({
        data: {
          title,
          author: { connect: { id: authorId } },
          categories,
        },
      })
      res.status(201).json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
