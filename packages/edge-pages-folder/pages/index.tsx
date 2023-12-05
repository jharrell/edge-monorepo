import { type InferGetServerSidePropsType } from "next"

export const config = {
  runtime: 'experimental-edge',
}

export default function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      {data}
    </main>
  )
}

export const getServerSideProps = async () => {
  return {
    props: { data: "Hello world" }
  }
}