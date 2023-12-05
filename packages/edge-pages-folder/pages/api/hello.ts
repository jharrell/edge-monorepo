// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return new Response(
    JSON.stringify({ data: 'Hello world' }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    },
  )
}

export const runtime = 'edge'