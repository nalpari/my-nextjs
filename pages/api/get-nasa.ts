import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const repo = axios
        .get(
          'https://api.nasa.gov/planetary/apod?api_key=b8B6CITeZJhzttzri98034vQFYB7L54fc7ywxQak',
        )
        .then((response) => response.data)
      console.log(repo)
      res.status(200).json(repo)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}
