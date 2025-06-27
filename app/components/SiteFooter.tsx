import Link from 'next/link'
import React from 'react'

function SiteFooter() {
    return (
        <div className="navbar bg-blue-100 shadow-sm dock">
            <div className="flex-none">
                <Link className='btn btn-info border-0' href='/'>NextJS HPE</Link>
            </div>
        </div>
    )
}

export default SiteFooter