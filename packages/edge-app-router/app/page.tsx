
export const runtime = 'edge'

async function getData() {
  return { data: "Hello world" }
}

export default async function Page() {
  const { data } = await getData()
  return (
    <>{data}</>
  )
}
