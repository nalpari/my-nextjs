import Link from 'next/link'

export default function CkeditorHeader() {
  return (
    <>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  href="/ckeditor5"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Basic
                </Link>
              </li>
              <li>
                <Link
                  href="/ckeditor5/toolbar"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Toolbar
                </Link>
              </li>
              <li>
                <Link
                  href="/ckeditor5/upload"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Upload
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
