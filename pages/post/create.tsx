import { ReactElement, useState } from 'react'
import { NextPageWithLayout } from '../_app'
import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import Title from '@/components/Title'

const Create: NextPageWithLayout = () => {
  const router = useRouter()
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [categories, setCategories] = useState<string>('')

  const handleCreatePost = async () => {}

  return (
    <>
      <Title title="Create Post" />
      <div className="p-4">
        <span className="text-lg font-semibold mr-4">TITLE</span>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="p-4">
        <span className="text-lg font-semibold mr-4">AUTHOR</span>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="p-4">
        <span className="text-lg font-semibold mr-4">CATEGORIES</span>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />
      </div>

      <div className="p-4">
        <button className="btn btn-primary mr-2" onClick={handleCreatePost}>
          Create Post
        </button>
        <button className="btn mr-2" onClick={() => router.back()}>
          Back
        </button>
      </div>
    </>
  )
}

Create.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Create
