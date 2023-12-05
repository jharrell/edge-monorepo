// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(

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