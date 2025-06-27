import Link from 'next/link'
import React from 'react'
import "daisyui"
import { cookies } from 'next/headers';


async function SiteHeader() {
  const cookieStore = cookies();
  const sessCookie = (await cookieStore).get("sessionToken");
  //const cookies = await headerslist.values();
  console.log('Siteheader', sessCookie)
  return (
    <div className="navbar bg-amber-400 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href='/'>NextJS</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
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
            {
              sessCookie && (
                <Link href='/auth/login'>
                  <button className='btn btn-error'>
                    Login</button>
                </Link>
              ) 
            }
            <Link href='/auth/logout'>
                  <button className='btn btn-success'>
                    Logout</button>
                </Link>


          </li>

        </ul>
      </div>
    </div >
  )
}

export default SiteHeader