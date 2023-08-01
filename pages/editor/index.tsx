import { ReactElement } from 'react'

import QuillEditor from '@/components/QuillEditor'

import Layout from '@/components/Layout'

export default function Editor() {
  // const onChange = (content: string) => {
  //   console.log(content)
  // }

  const onChange: (content: string) => void = (content) => {
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
