import Link from 'next/link'
import React from 'react'

function Page() {
  return (
    <div className='border-2 border-dark text-1xl'>
        Teams Content
        <ul className="menu px-1">
          <li>
            <Link href='/home'>
              <button className='btn btn-accent'>Home</button>
            </Link>
          </li>
          <li>
            <Link href='/products'>
              <button className='btn btn-accent'>Products</button>
            </Link>
          </li>
          <li>

            <Link href='/auth/logout'>
                  <button className='btn btn-success'>
                    Logout</button>
                </Link>


          </li>

        </ul>
    </div>
  )
}

export default Page