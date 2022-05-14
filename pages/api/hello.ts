// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
}

type Data = {
  name: string
}

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user = await prisma.users.findFirst({
    where: {
      id: 1
    }
  })
  res.status(200).json(user)
}
