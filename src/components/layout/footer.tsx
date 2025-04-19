import routes from '@/routes/router'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-4 flex-srink-0 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 text-xl">
          <LocalDrinkIcon className="text-xl " />
          <Link href={routes.home}>
            <span className="font-bold cursor-pointer">My Beer Collection</span>
          </Link>
        </div>
        <div className="text-sm mt-2 md:mt-0">
          <p>&copy; {new Date().getFullYear()} BeerApp. All rights reserved.</p>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://github.com/ruiffpereira"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://x.com/superbock"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/ruiffpereiira/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
