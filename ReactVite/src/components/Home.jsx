import React from 'react'

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
    </div>
  )
}

export default Home