import React from 'react'

function StaffCard(props) {
    const staff = props.staff

    return (
        <div className="staff-card">
            <h3>{staff.Name}</h3>
            <h4>{staff.Position}</h4>
            <p>{staff.Phone}</p>
            <p className="staff-email">{staff.Email}</p>
        </div>
    )
}

export default StaffCard
