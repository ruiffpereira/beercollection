import LocalDrinkIcon from '@mui/icons-material/LocalDrink'

export default function Footer() {
  return (
    <footer className="py-4 flex-srink-0 border-t border-gray-300 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <LocalDrinkIcon fontSize="large" className="text-blue-500" />
          <span className="text-lg font-bold">BeerApp</span>
        </div>
        <div className="text-sm mt-2 md:mt-0">
          <p>&copy; {new Date().getFullYear()} BeerApp. All rights reserved.</p>
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
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
