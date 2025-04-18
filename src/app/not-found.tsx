import routes from '@/routes/router'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you re looking for doesnt exist.
      </p>
      <Link
        href={routes.home}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  )
}
