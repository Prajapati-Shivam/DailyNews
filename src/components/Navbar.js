import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "/"
    },
    {
      id: 2,
      name: "Business",
      link: "/business"
    },
    {
      id: 3,
      name: "Entertainment",
      link: "/entertainment"
    },
    {
      id: 4,
      name: "Politics",
      link: "/politics"
    },
    {
      id: 5,
      name: "Science",
      link: "/science"
    },
    {
      id: 6,
      name: "Sports",
      link: "/sports"
    },
    {
      id: 7,
      name: "World",
      link: "/world"
    },
  ]
  return (
    <nav className="bg-gray-800 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 shadow-md text-white dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            <i>Daily News</i>
          </span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            onClick={toggle}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
        className={`items-center justify-between w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky`}
        >
          <ul className={`${!isOpen && 'hidden md:flex'} flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
            {navItems.map((item) => {
              const {id, name, link} = item
              return (
                <li key={id}>
                  <Link
                    to={link}
                    className={`block py-2 pl-3 pr-4 text-gray-400 rounded md:p-0 dark:text-white hover:underline hover:underline-offset-4 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${location.pathname === link ? "text-white" : ""}`}
                  >
                    {name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
