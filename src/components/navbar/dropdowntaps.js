import Link from 'next/link'
import React from 'react'

export const Dropdowntabs = ({title, link}) => {
  return (
    <li>
    <Link href={link} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
        {title}
    </Link>
    </li>
    )
}
