import Link from 'next/link'

import { BsFillJournalBookmarkFill } from 'react-icons/bs'

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 text-xl">
          <BsFillJournalBookmarkFill />
          <Link href="/" className="font-my ml-2">
            My Nextjs
          </Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              href="/post"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-white mr-4"
            >
              Post
            </Link>
            <Link
              href="/nasa"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-white mr-4"
            >
              NASA api apod
            </Link>
            <Link
              href="#"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-700 hover:text-white"
            >
              Example2
            </Link>
          </div>
          <div>
            <Link
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
