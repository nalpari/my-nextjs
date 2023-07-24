export default function Footer() {
  return (
    <>
      <footer className="bg-white shadow dark:bg-gray-900 py-4 my-4">
        <div className="w-full max-w-screen-xl mx-auto">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a
              href="https://inblog.ai/devgrr"
              className="hover:underline"
              target="_blank"
            >
              Devgrr™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  )
}
