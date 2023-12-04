import { type InferGetServerSidePropsType } from "next"

export const runtime = 'edge'

export default function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {data}
    </>
  )
}

export const getServerSideProps = async () => {
  return {
    props: { data: "Hello world" }
  }
}