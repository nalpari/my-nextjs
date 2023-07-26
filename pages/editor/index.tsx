import Layout from '@/components/Layout'
import QuillEditor from '@/components/QuillEditor'
import { ReactElement } from 'react'

export default function Editor() {
  const onChange = (content: string) => {
    console.log(content)
  }

  return (
    <>
      <div className="m-4">
        <QuillEditor onChange={onChange} desc={'<p>test</p>'} />
      </div>
    </>
  )
}

Editor.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
