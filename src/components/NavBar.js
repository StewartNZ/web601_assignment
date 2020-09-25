import React from 'react'
import {Link} from 'react-router-dom'

function NavBar(props) {

    const mapped = props.pages.map(page => <li key={page.path}><Link to={page.path}>{page.title}</Link></li>)

    return (
        <nav>
            <ul>
                {mapped}
            </ul>
        </nav>
    )
}

export default NavBar
