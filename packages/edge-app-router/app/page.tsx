import { revalidatePath } from "next/cache"

export const runtime = 'edge'

let data = 'Hello world'
async function getData() {
  return { data }
}

async function submitData(formData: FormData) {
  'use server'
  const name = formData.get('name') as string
  data = name

  // revalidate data
  revalidatePath('/')
}

export default async function Page() {
  const { data } = await getData()
  return (
    <main>
      <div>
        <h2>Server data response:</h2>
        {JSON.stringify(data, null, 2)}
      </div>

      <div>
        <h2>Server action </h2>

        <form action={submitData}>
          <input type="text" name="name" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  )
}
