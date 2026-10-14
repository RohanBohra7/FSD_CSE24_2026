import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h2>
            Welcome to our home page
        </h2>
        <nav>
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Registration</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
    </div>
  )
}

export default Home