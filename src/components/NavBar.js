import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(props) {

    const mapped = props.pages.map(page => <li><Link key={page.path} to={page.path}>{page.title}</Link></li>)

    return (
        <nav>
            <ul>
                {mapped}
            </ul>
        </nav>
    )
}

export default NavBar
