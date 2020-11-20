import React, {useState, useEffect} from 'react'

import StaffCard from "../components/StaffCard"

function Contacts() {

    const [apiStaff, setStaff] = useState([]); 
    const [hasError, setErrors] = useState(false);

    async function fetchStaff(){
      const res = await fetch("https://webdev.talos.net.nz/~stewart-nelson/api/staff");
      res
        .json() 
        .then(res => setStaff(res))
        .catch(err => setErrors(err));
    }
    useEffect(() => {
     fetchStaff();
    },[] );

    return (
        <div>
            <h1>Contacts</h1>
            <ul className="staff-container">{apiStaff.map(staff => <li><StaffCard staff={staff} /></li>)}</ul>
        </div>
    )
}

export default Contacts
