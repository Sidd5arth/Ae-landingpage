import React from 'react'

function FooterCategories({list, heading}) {
  return (
    <div>
    <h4 style={{marginBottom:"1em"}}>{heading}</h4>
    <hr style={{marginBottom:"1em"}} />
    <ul style={{}}>
        {list.map((mp) => (
            <li style={{listStyle:"none", marginBottom:"0.7em"}}>{mp}</li>
        ))}
    </ul>
  </div>
  )
}

export default FooterCategories