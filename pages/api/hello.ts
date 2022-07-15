// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma';
import { unstable_getServerSession } from "next-auth/next"
import {authOptions} from "./auth/[...nextauth]"
import { getToken } from "next-auth/jwt"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const session = await unstable_getServerSession(req, res, authOptions)
  console.log(session)
  const token = await getToken({ req, secret:process.env.NEXTAUTH_SECRET })
  console.log("JSON Web Token", token)

  const user = await prisma.user.findFirst({
    where: {
      id: 1
    }
  });
  
  res.status(200).json(user)
}
