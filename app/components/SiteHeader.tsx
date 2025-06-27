import Link from 'next/link'
import React from 'react'

function SiteHeader() {
  return (
    <div className="navbar bg-amber-400 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl" href='/'>NextJS</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/home'>Home</a></li>
      <li><Link href='/products'>Home</Link></li>
    </ul>
  </div>
</div>
  )
}

export default SiteHeader