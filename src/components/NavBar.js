import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

import {Context} from "./Store";

function NavBar(props) {

    const mapped = props.pages.map(page => <li key={page.path}><Link to={page.path}>{page.title}</Link></li>)

    const [state, dispatch] = useContext(Context);

    return (
        <div>
            <nav>
                <ul>
                    {mapped}
                </ul>
            </nav>
            <p className="logged-in-account">Logged in as: {state.username}</p>
        </div>
    )
}

export default NavBar
