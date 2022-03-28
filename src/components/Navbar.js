import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'>Zain App</span>
        <ul className="list">
            <li className="listItem">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className='avatar' />
            </li>
            <li className="listItem">John Doe</li>
            <li className="listItem">Logout</li>
        </ul>
    </div>
  )
}

export default Navbar