// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const user = await prisma.users.findFirst({
    where: {
      id: 1
    }
  });
  
  res.status(200).json(user)
}
