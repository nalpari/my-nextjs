import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

async function addUser(param: any) {
  try {
    const user = await prisma.user.create({
      data: param,
    })
    return param
  } catch (error) {
    console.log(error)
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    console.log(req.body)
    const response = await addUser(req.body)
    res.status(200)
  } catch (error) {
    res.status(500).json({ message: 'Failed to add user' })
  }
}
